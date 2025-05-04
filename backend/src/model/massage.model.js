import mongoose from "mongoose";

const msgschema = mongoose.Schema({

    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'project',
        required:true
    },
    message:[{
        type:String,
        required:[true ,'project is required']
    }]
    
},{ timestamps:true})


const msgModel = mongoose.model('msgModel', msgschema)

export default msgModel

