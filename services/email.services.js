const {sendMailToUsers} = require("../util");

const sendEmailService= async(payload)=>{
    //console.log("sendEmailService payload>>>>>>>>>>>>>>>",payload)
    try{
 
        const body={
            title: payload.subject,
            htmlTemplate:payload.mailContent,
            email:payload.emails,
        };
       
     //console.log("EmailService Body Body>>>>>>>>>>>>>>>",body)

        const res= await sendMailToUsers(body);
        const status= res.error ? 400 :200;
        return {...res, data:[],status}
    }catch(error){
        return { error:true,message:"error occurred", status:500 }
    }
}

module.exports =sendEmailService;