import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import { useEffect, useState } from 'react'


import axios from 'axios'

const Home = () => {

    const navigate = useNavigate();

    const [project, setproject] = useState([])


    let getdata = async () => {
        const res = await axios.get('http://localhost:3000/project/show');
        setproject(res.data);

    }

    useEffect(() => {
        getdata();
        

        
    }, []);
    
    function navigateToProject(projectId) {
        navigate(`/project/${projectId}`)
    }


    return (
        <main className='home' >
            <section className='home-a'>
                <h1>MY PROJECT</h1>
                <button type="button" className='btn' onClick={() => navigate('/create')}> New Project  </button>
            </section>


            <section className='project-data'>


                {project.length === 0 ? (
                    <div>{"empty: " + project.length}</div>
                ) : (
                    project.map((item, index) => (

                        <div className='data' key={index} >

                            <div  onClick={() => { navigateToProject(item._id) }}  className="btn-project"> {item.projectName} </div>
                        
                         
                        </div>
                    ))
                )}
            </section>


        </main>
    )
}

export default Home
