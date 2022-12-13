// const formatUploadedFiles= async( req,next,res)=>{
//     const files= req.files
//     const body = JSON.parse(JSON.stringify(req.body))
//     if(files){
//             const formattedFiles= files.map((file, i)=>{
//                 const info = JSON.parse(body[`info_${i}`])
//                 return{
//                     url: file.public_URL,
//                     size: file.fileRef.metadata.size,
//                     filename: file.fileRef.metadata.name,
//                     width:info.height ||300,
//                     height:info.width ||500
//                 }
//             })
//             req.mediaFiles =  formattedFiles
//             next()
//     }

//     else(
//         res.status(400).json({message:"Error occurred , please try again "})
//     )
// }

// module.exports= formatUploadedFiles;