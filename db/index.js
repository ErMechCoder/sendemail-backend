const mongoose = require('mongoose')                                ;

const config = require('../config')
mongoose.set('strictQuery', true);
const mongodbConnect = async()=>{
    try{
        const url ="mongodb+srv://atul:ermechcoder@cluster0.fq4j3um.mongodb.net/merndata?retryWrites=true&w=majority"
        await mongoose.connect(url)
        console.log(`database connected on url ${url}`)
    }catch (error){
        console.log(error.message)
    }
} 

module.exports = mongodbConnect;