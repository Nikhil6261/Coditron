import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../project/project.css'
import io from 'socket.io-client'

const Project = () => {

    const param = useParams()
    const [message, setMessage] = useState([])
    const [input, setinput] = useState("")

function handelmessage (){
    setMessage((prev) =>{ 
        return [...prev , input]
    })

    setinput("")
}
    useEffect(() => {
        io('http://localhost:3000')
    }, [])

    return (

        <div className=' project'>

            <div className=' project-section '>
                <section className='chat'>

                    <div className="massage">

                        {
                            message.map((e, index) => {
                                return (
                                    <div key={index} className="massage">
                                        <span>
                                            {e}
                                        </span>
                                    </div>
                                )

                            })
                        }

                    </div>

                    <div className='chat-box'>

                        <input type="text"
                        className='chat-type'
                        placeholder='write any u want' 
                        value= {input}
                        onChange={ (e)=>{ setinput( e.target.value )}}
                        />
                    
                  
                          <button className='send-button' onClick={ handelmessage}> <i class="ri-send-plane-2-fill"></i> </button>
                    
                    </div>


                </section>

                <section className='code'>  </section>
                <section className='review'>  </section>


            </div>
        </div>
    )
}

export default Project
