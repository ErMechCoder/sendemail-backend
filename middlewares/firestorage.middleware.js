// const Multer = require('multer')
// const FirebaseStorage = require('../node_modules/multer-firebase-storage')

// //const fireCent = require('../cent/emaileditor-5a393-firebase-adminsdk-jqkal-5dfbec8032.json')

// const multerFireStorage =  Multer({

//     storage:FirebaseStorage ({
//         bucketName : "emaileditor-5a393.appspot.com",
//         Credential: {
//         clientEmail :  "firebase-adminsdk-jqkal@emaileditor-5a393.iam.gserviceaccount.com",   
//         privateKey :  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCr86uqvg7sJbwu\nMbz7naAHi+DMKnV0pi5LSI5bOSN0zR0HgDy9qLtJ3Z/4/lPfyKaRSYTHnxKqAX93\ne9XGLtDs4r62dFb5Hzl3+iJQs8XzkeiFp1RQRU56JRfrgW0GFQ3Rrm3oxvUxCkWW\nQclFzqKHbk+1Gk1/+kZRskfRsk/psBsCDPioLFutPNMRLCMfYbucXnOeRWy6t9Dv\ndZwg97qaWC50iXUgYrqT+k6oxSibFQOBI4Ml7YX92qhREtf5gfKZSnRfCZnccUfN\nBboJ8Zvdb9ZW97h9fzZk7OFdNT81GquJUeuQjiIgwjyhaqNMUHuJd5+2/qks+yQG\n1udwSQH9AgMBAAECggEABs5nXiPOqBKBau3KouKaeudSoH6uMfid+u/GLlA0y9vH\nfrcRvqesXbkiKuicemrYRQZn2MBMnkXe5+RoZ0NG6gmB2QgeiMGobT3i32TnLm6j\nwld5lMi19fY1P5+FU1rc4Q7fsxYWx5vSlt/j+cQs5MV2CnTI2oqH4yQvTujSFS2J\nJnKXRonKxM82ZnTZcbAR580Qy+WCU9zeCbkggu2tu3OxZknKjjQGmpdXRKO++ZmC\ne6Y+UN05oNiiOCz6o/q3uRWTvNKYzxcQl/iWpOWrlyUmv9xEYyZdocfT3EzWotCy\nM2nK0eswLqidmGKvKofPVekXSMbnFmtCNVtB7DruVQKBgQDurfGyHZbNlRiyMzkD\nXmQsVA0hANeoa94ukBLiv1qzQA277+y/+PqaTnX2nolMS9MOtdQ4YLpWrl5k1IAi\nXp2EkZuKYoEnHRWS0qg0K4MbAuraE2WvCIrvD8P8MVCCMBTDYRVoNC1c2r9xN7e5\n/IbQoM+6U3/LlBNZpaa/97fZbwKBgQC4bhjj/HAqvy8SnLz0rJa0R7p5FXzESxHl\nAOUV/Hx/AwtNtdkeSXYlvK3cPznvlbnLq7EU2EIw7+6y670Yp/L84TXYU4SuAud3\nGVLQsKTGnsZTR/RvNC+1ZVqDrhEeuuZWR2ZMt8VBQkqzMOqaYBWJZ8kwQoFeN8xO\nHknZvFstUwKBgBM29ao9L5LFWgOelAxtYOsgqR3rD3GDnZNqDdsrRIYBthlXK1wZ\nEzOw9VYxVSRLRmZ8xOT1BItN5lN/uAEMVOoDPt5ZJ8SaVs5HHztz9U4LYhTEUv9Q\nVL8CKej3n1+bt1AzVKHa8Xv0ME1RCv1yEvhgudhqOHOPLC+fYlk5/BcJAoGAHRQW\nzpN1p/e+10NpM3amyEPq7b5qjpR7fMzYUdAeXPRA6v65/eF9RFPsYaaCXvkPc0Jd\nyDiUrxyVWRZ8GRAZ6q8jizkX2UvR7OBMQ2Umhb5w7J6StpnWz9XsIIjoYBz9xiq5\nwWzUKAboujoDM1Xk72YyvW4u8YkAqGx0HmVpRssCgYEAqqZLCi8kGVBl1wxIJ3pb\nseJ7brqIoNAZ5HRUkRh/dXbjh6r3djRTAJo7X13GrU31V1p0K2CIzjL0AeAjlLDO\nbHNbT+101fmbpwDG/INqRvsntlykfQIyqqK57pPtLgKy5HSyD7MZz94MoqGFxtET\njAYBhxmpzxLUN8/K29wPJC8=\n-----END PRIVATE KEY-----\n",
//         projectId:"emaileditor-5a393"
//         },

//         public : true,
//         unique: true,
     
//         hooks:{
    
//             beforeUpload(req ,file){
//                 let fileEx = file.originalname.split(' ')[1]
//                 const fileName =`SUPA_${new Date().getTime ()}.${fileEx}`
//                 file.filename = fileName
//                 file.originalname = fileName
//             }
//         }
       
//     }),
//     limits :{fieldSize:10* 1024*1024}
// })

// module.exports=  multerFireStorage;