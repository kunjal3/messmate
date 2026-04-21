import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function StudentDashboard() {
  const { userProfile, logout } = useAuth()
  const navigate = useNavigate()

  // 🔹 Sample data (for useMemo demo)
  const meals = [
    { name: "Breakfast", selected: true },
    { name: "Lunch", selected: false },
    { name: "Dinner", selected: true },
  ]

  // 🔹 useMemo optimization
  const selectedMealsCount = useMemo(() => {
    console.log("Calculating selected meals...")
    return meals.filter(meal => meal.selected).length
  }, [meals])

  async function handleLogout() {
    await logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Hello, {userProfile?.name || 'User'} 👋
            </h1>

            {/* 🔹 useMemo value displayed */}
            <p className="text-green-400 mt-2">
              Selected Meals: {selectedMealsCount}
            </p>

            <p className="text-slate-400 mt-2">
              Welcome to your MessMate dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Link
            to="/student/meal-intent"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold">Meal Intent</h2>
            <p className="text-slate-400 mt-2">
              Mark whether you are coming for meals.
            </p>
          </Link>

          <Link
            to="/student/live-crowd"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold">Live Crowd</h2>
            <p className="text-slate-400 mt-2">
              Check crowd level before going to the mess.
            </p>
          </Link>

          <Link
            to="/student/complaints"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold">Complaints</h2>
            <p className="text-slate-400 mt-2">
              Raise and track mess-related complaints.
            </p>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default StudentDashboard
