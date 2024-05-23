"use server"

import { signOut } from "@/auth";

export  const  logout=async()=>
{
    
     await signOut()
     //try to redirect to login page
      return {redirect: { destination: '/', permanent: false }}

    
}