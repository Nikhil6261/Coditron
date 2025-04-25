import ProjectModel from '../model/project.model.js';


export const create = async (req,res)=>{
    
    try {
        const projectName = req.body;

        const newProject = await ProjectModel.create(projectName);

        console.log(newProject);
        res.status(201).json(newProject);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create project", error });
    }
}


export const show = async (req,res)=>{

    const getproject = await ProjectModel.find()
    
    return getproject;  
}
