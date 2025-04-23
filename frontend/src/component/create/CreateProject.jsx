import React from 'react'
import './create.css'
import { useState } from 'react'

const CreateProject = () => {

    const [project , setproject] =  useState(null)


    function handle(e){
e.preventDefault()
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



