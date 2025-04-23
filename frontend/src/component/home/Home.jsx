import React from 'react'
import  {useNavigate} from 'react-router-dom'
import './home.css'


const Home = () => {
const navigate = useNavigate();


    return (    
        <main className='home' >
            <section className='home-a'>
                <h1>MY PROJECT</h1>
                <button type="button" className='btn' onClick={ ()=> navigate('/create') }> submit</button>
            </section>
        </main>
    )
}

export default Home
