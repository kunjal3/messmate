import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import StudentDashboard from './pages/student/StudentDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import MealIntentPage from './pages/student/MealIntentPage'
import ComplaintsPage from './pages/student/ComplaintsPage'
import LiveCrowdPage from './pages/student/LiveCrowdPage'
import ProtectedRoute from './components/common/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/student"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/meal-intent"
        element={
          <ProtectedRoute>
            <MealIntentPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/complaints"
        element={
          <ProtectedRoute>
            <ComplaintsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/live-crowd"
        element={
          <ProtectedRoute>
            <LiveCrowdPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App