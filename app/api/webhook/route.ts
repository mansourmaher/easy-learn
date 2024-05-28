import Stripe from "stripe";

import {headers} from "next/headers"
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { pusherServer } from "@/lib/pusher";


export async function POST(req:Request):  Promise<void | Response> {{
    console.log("webhook")
    const body=await req.text()
    const user=await auth()
    if(!user){
        return new NextResponse(null,{status:401})
    }

    const signature=headers().get("Stripe-Signature") as string

    let event:Stripe.Event
    try{
        event=stripe.webhooks.constructEvent(body,signature,process.env.STRIPE_WEBHOOK_SECRET!)
    }catch(e){  
            return new NextResponse(null,{status:400})
    }
    const session=event.data.object as Stripe.Checkout.Session
    const userId=session?.metadata?.userId
    const courseId=session?.metadata?.courseId
    const course=await db.course.findUnique({
        where:{
            id:courseId
        }
    })

    await db.courseUser.create({
        data:{
            userId:user.user.id as string,
            courseId:courseId!
        }
    })
    await db.course.update({
        where:{
            id:courseId
        },
        data:{
            totalPurchases:{
                increment:1
            }
        }
    })
    const notification= await db.notifications.create({
        data:{
            teacher:course?.userId!,
            student:user.user.id as string,
            message:`${user?.user.name} has purchased ${course?.title} course`
        },
        include:{
            user:true,
            studentNotif:true
        }
    })
     await pusherServer.trigger('notification', 'new-notification', {
        notification
    });

    if(event.type==="checkout.session.completed"){
        if(!userId || !courseId){
            return new NextResponse(null,{status:400})

        }
        console.log("checkout completed")
        await db.courseUser.create({
            data:{
                userId,
                courseId
            }
        })
        await db.course.update({
            where:{
                id:courseId
            },
            data:{
                totalPurchases:{
                    increment:1
                
            }

            }
        })

    }else{
        return new NextResponse(null,{status:401})

    }
    return new NextResponse(null,{status:200})

}}