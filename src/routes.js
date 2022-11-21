import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { ProceedingsList } from './pages/proceedingsList'
import { ProceedingsForm } from './pages/proceedingsForm'
// import { Header } from './components/Header'

export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atas-list" element={<ProceedingsList />} />
        <Route path="/atas-form" element={<ProceedingsForm />} />
      </Routes>
    </Router>
  )
}
