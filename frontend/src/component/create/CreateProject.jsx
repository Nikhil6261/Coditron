import React from 'react'
import './create.css'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const CreateProject = () => {

    const [projectName , setproject] =  useState(null)

const navigate = useNavigate();

 function handle(e){
e.preventDefault()

 axios.post('http://localhost:3000/project/create',{projectName}).then(()=>{

     navigate('/');
 }).catch(()=>{
    console.log("not found");
    
 })


    }


    return (
        <div>
            <form  onSubmit={handle}>
                <input 
                type="text" 
                required 
                name='projectname' 
                placeholder='projectname' 
           onChange={ (e)=>{  setproject(e.target.value) }}
           />

                <button > submit</button>
            </form>

        </div>
    )
}

export default CreateProject



