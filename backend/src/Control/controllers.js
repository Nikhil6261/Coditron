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

    try{

        const getproject = await ProjectModel.find();
        res.status(200).json(getproject);
    }
    catch(err){
        res.status(401).json({massage:  "failed to fetch the data ", err: err.massage})
    }
}
