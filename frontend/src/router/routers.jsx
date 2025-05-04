import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../component/home/Home'
import Create from '../component/create/CreateProject'

import Project from '../component/project/Project'


const AppRoutes = () => {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create  />} />

                <Route path="/project/:id" element={<Project/>} />
            
            </Routes>
        </Router>
    )
}

export default AppRoutes
