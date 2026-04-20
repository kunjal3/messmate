import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold">MessMate</h1>
        <p className="mt-4 text-slate-300 text-lg">
          Smart hostel mess management for meal planning, live crowd tracking, and complaint handling.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600"
          >
            Enter App
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing