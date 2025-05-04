import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../project/project.css'
import { io as socketIo } from 'socket.io-client'
import Editor from '@monaco-editor/react'

const Project = () => {
    const { id } = useParams()
    const [message, setMessage] = useState([])
    const [input, setinput] = useState("")
    const [socket, setsocket] = useState(null)
    const [codeContent, setCodeContent] = useState("// Write your code here...")

    function handelmessage() {
        setMessage((prev) => {
            return [...prev, input]
        })
        
        setinput("")
        socket.emit('message', input)
    }

    function handleEditorChange(value) {
        setCodeContent(value);
    }

    useEffect(() => {
        const io = socketIo('http://localhost:3000', {
            query: { project: id }
        });
    
        setsocket(io);
    
        io.on('chat-history', (messages) => {
            setMessage(messages);
        });
    
        io.on('message', (newMessage) => {
            setMessage(prev => [...prev, newMessage]);
        });
    
        return () => {
            io.disconnect();
        };
    }, [id]);

    return (
        <div className='project'>
            <div className='project-section'>
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
                        <button className='send-button' type='submit' onClick={handelmessage}>
                            <i className="ri-send-plane-2-fill"></i>
                        </button>
                    </div>
                </section>

                <section className='code'>
                    <Editor
                        height="100%"
                        defaultLanguage="javascript"
                        defaultValue={codeContent}
                        theme="vs-dark"
                        onChange={handleEditorChange}
                        options={{
                            minimap: { enabled: true },
                            fontSize: 14,
                            wordWrap: 'on',
                            automaticLayout: true,
                            scrollBeyondLastLine: false,
                            lineNumbers: 'on',
                            folding: true,
                            lineDecorationsWidth: 0,
                            lineNumbersMinChars: 3,
                        }}
                    />
                </section>
                <section className='review'> </section>
            </div>
        </div>
    )
}

export default Project
