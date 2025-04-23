import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../component/home/Home'
import Create from '../component/create/CreateProject'


const AppRoutes = () => {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<Home />} />
                
                <Route path='/create' element={<Create  />} />
            
            </Routes>
        </Router>
    )
}

export default AppRoutes
