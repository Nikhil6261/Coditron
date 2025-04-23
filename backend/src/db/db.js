import mongoose from 'mongoose'


export default function connection(){

    mongoose.connect('mongodb://localhost:27017/ai-model').then(()=>{
        console.log("database connected");
    }).catch(()=>{
        console.log("database not found");
    })
}