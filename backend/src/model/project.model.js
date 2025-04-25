import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'Project name is required'],
    },
    code: {
        type: String,
        default: "",
    },
    review: {
        type: String,
        default: "",
    }
}, { timestamps: true
    
 });

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
