import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'
import { provider } from './services/auth'
import { Home } from './pages/home'
import { ProceedingsList } from './pages/proceedingsList'
import { ProceedingsForm } from './pages/proceedingsForm'

const PrivateRoutes = () =>
  provider.isAuthenticated() ? <Outlet /> : <Navigate to="/" />

export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/atas-list" element={<ProceedingsList />} />
          <Route path="/atas-form" element={<ProceedingsForm />} />
        </Route>
      </Routes>
    </Router>
  )
}
