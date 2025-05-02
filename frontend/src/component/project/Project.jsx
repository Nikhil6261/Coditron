import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../project/project.css'
import {  io as socketIo } from 'socket.io-client'

const Project = () => {

    const param = useParams()
    const [message, setMessage] = useState([])
    const [input, setinput] = useState("")

    const [socket, setsocket] = useState(null)

    function handelmessage() {

        setMessage((prev) => {
        
            return [...prev, input]
        })

        setinput("")

        socket.emit('message' , input)

}
 
    useEffect(() => {
        const io = socketIo('http://localhost:3000')


        setsocket(io)
        // console.log(socket);
        
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
                            value={input}
                            onChange={(e) => { setinput(e.target.value) }}
                        />


                        <button className='send-button' type='submit' onClick={handelmessage}> <i className="ri-send-plane-2-fill"></i> </button>

                    </div>


                </section>

                <section className='code'>  </section>
                <section className='review'>  </section>


            </div>
        </div>
    )
}

export default Project
