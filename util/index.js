const nodemailer = require('nodemailer')
const config = require('../config');

const {mailConfig} =config;

const mailAccountDispatcher = async(mailOptions)=>{
    let transpoter = nodemailer.createTransport({
        host: 'process.env.mailConfig.host',
        service: 'Gmail',
        port :587,
        pool:true,
        secure: 465,
        maxMessages:500,
        maxConnections:500,
        auth:{
            user:"ambyrock007@gmail.com",
            pass:"wnvlupyyoyqvartl "
        }
    });

    let info = await transpoter.sendMail({ from:"ambyrock007@gmail.com",
        ...mailOptions })
        return{info}
    
}

const sendMailToUsers = async(data) =>{
   // console.log("sendMailToUsers >>>>>>",data )
  //console.log("sendMailToUsers >>>>>>",data.htmlTemplate )

    try{
        await mailAccountDispatcher({
            to: data.email, // list of email
            subject:data.title, // subject line 
            html:data.htmlTemplate // plan text body
        })
        return {error:false, message:"Mail Send successfully"}
    }catch (error){
        return{ error:true, message:"An Error accourred trying to  send mail to user"}
    }
}

module.exports ={sendMailToUsers}