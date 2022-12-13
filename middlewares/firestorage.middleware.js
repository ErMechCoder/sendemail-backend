// const Multer = require('multer')
// const FirebaseStorage = require('../node_modules/multer-firebase-storage')

// //const fireCent = require('')

// const multerFireStorage =  Multer({

//     storage:FirebaseStorage ({
//         bucketName : "",
//         Credential: {
//         clientEmail :  "",   
//         privateKey :"",
//         projectId:""
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
