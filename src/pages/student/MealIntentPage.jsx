import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

function MealIntentPage() {
  const { user } = useAuth()
  const [mealType, setMealType] = useState('lunch')
  const [response, setResponse] = useState('going')
  const [submitted, setSubmitted] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: user?.name,
      mealType,
      response,
    }
    localStorage.setItem('mealIntent', JSON.stringify(data))
    setSubmitted(data)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Meal Intent</h1>
        <p className="text-slate-400 mt-2">Tell the mess whether you are coming.</p>

        <form onSubmit={handleSubmit} className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <div>
            <label className="block mb-2 text-sm text-slate-300">Meal Type</label>
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">Response</label>
            <select
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3"
            >
              <option value="going">Going</option>
              <option value="maybe">Maybe</option>
              <option value="skipping">Skipping</option>
            </select>
          </div>

          <button className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 py-3 font-medium">
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Saved Response</h2>
            <p className="text-slate-300 mt-2">Name: {submitted.name}</p>
            <p className="text-slate-300">Meal: {submitted.mealType}</p>
            <p className="text-slate-300">Status: {submitted.response}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MealIntentPage