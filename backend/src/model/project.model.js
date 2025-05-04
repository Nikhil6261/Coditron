import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'Project name is required'],
    },
    code: {
        type: String,
        default:true,
    },
    review: {
        type: String,
        default: true,
    }
}, { timestamps: true
    
 });

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
