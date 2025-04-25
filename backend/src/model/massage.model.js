import mongoose from "mongoose";
const msgschema = mongoose.Schema({

    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'project',
        required:[true ,'project is required']
    },
    text:{
        type:String,
        required:[true ,'project is required']
    }
},{ timestamps:true})


const msgModel = mongoose.Schema('msgModel', msgschema)

export default msgModel