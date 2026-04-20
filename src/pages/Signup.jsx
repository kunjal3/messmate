import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Signup() {
  const [name, setName] = useState('')
  const { loginWithName } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    loginWithName(name)
    navigate('/student')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center">Create Session</h1>
        <p className="text-slate-400 text-center mt-2">
          Start using MessMate
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 py-3 font-medium"
          >
            Start
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Already entered your name?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup