import { emit } from "process"
import {Resend} from "resend"
import { sendRealMail } from "./real_mail/mail"
import handelbars from "handlebars"
import { verifyyouemail } from "./verify"
import path from "path"
import fs from 'fs';
import juice from 'juice';




export const sendVerificationEmail=async(email:string,token:string)=>
{
    const confirmLink=`${process.env.NEXT_PUBLIC_APP_URL}/new-verification?token=${token}`
    const templatePath = path.join(process.cwd(), 'app', 'emailtemplates', 'verify.html');
    const source = fs.readFileSync(templatePath, 'utf8');
  
    // Use Handlebars to compile the template with dynamic data
    const template = handelbars.compile(source);
    // const confirmLink2='http://localhost:3000/new-verification?token='+token
    const htmlWithInlineStyles = juice(template({ confirmLink }));

    await sendRealMail({
        
        to: email,
        name: email,
        subject: 'Confirm your email',
        body: htmlWithInlineStyles,
    })


}

export const sendPasswordResetEmail=async(email:string,token:string)=>
{
    
    // const confirmLink=`${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`
    // const templatePath = path.join(process.cwd(), 'app', 'emailtemplates', 'resetpassword.html');
    // const source = fs.readFileSync(templatePath, 'utf8');
    // const template = handelbars.compile(source);
    // const htmlWithInlineStyles = juice(template({ confirmLink }));
    
    // await sendRealMail({
       
    //     to: email,
    //     name: email,
    //     subject: 'Reset your password',
    //     body: htmlWithInlineStyles,
    // })
    await sendRealMail({
        to:email,
        name:email,
        subject:'Reset your password',
        body:`<h1>Reset your password</h1>`
    })
}
export const sendRejectionEmail = async (email: string, name: string, reason: string) => {
    // Update the path to match your directory structure
    const templatePath = path.join(process.cwd(), 'app', 'emailtemplates', 'rejectcourse.html');
    const source = fs.readFileSync(templatePath, 'utf8');
  
    // Use Handlebars to compile the template with dynamic data
    const template = handelbars.compile(source);
    const html = template({ name, reason });
  
    // Inline the CSS styles
    const htmlWithInlineStyles = juice(html);
  
    // Send the email
    await sendRealMail({
      to: email,
      name,
      subject: 'Your course submission has been rejected',
      body: htmlWithInlineStyles,
    });
    }
  
   
  