import React, {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../project/project.css'
import io from 'socket.io-client'

const Project = () => {
    
    const param = useParams()
    const [message ,setMessage] = useState([ "hy","heelo"])

useEffect(() =>{
    io('http://localhost:3000')
} , [])
    
    return (

        <div className=' project'>

            <div className=' project-section '>
                <section className='chat'>

                    <div className="massage">
                        
{
    message.map((e) =>{
return (
                        <div className="massage">
                            <span> 
                                {e} 
                           </span>
                        </div>
        )

    })
}
                        
                    </div>

                    <div className='chat-box'>
                        <input type="text" className='chat-type' name="" placeholder='write any u want' />
                    </div>


                </section>
                <section className='code'>  </section>
                <section className='review'>  </section>


            </div>
        </div>
    )
}

export default Project
