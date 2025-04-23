import mongoose, { Types } from "mongoose";


const projectSchema = mongoose.model({


    name:{
        type:String,
        required:[true , 'prject name is required'],
    },
    code:{
        type:String,
        default:"",
    },
    review:{
        type:String,
        default:"",
    }
},{
    timestamps:true
}) 


const projectmodel = mongoose.Schema('project' ,projectSchema)
 
export default projectmodel