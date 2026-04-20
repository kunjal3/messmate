import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

function ComplaintsPage() {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('taste')
  const [description, setDescription] = useState('')
  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem('complaints')
    return saved ? JSON.parse(saved) : []
  })

  function handleSubmit(e) {
    e.preventDefault()

    const newComplaint = {
      id: Date.now(),
      name: user?.name,
      title,
      category,
      description,
      status: 'Pending',
    }

    const updated = [newComplaint, ...complaints]
    setComplaints(updated)
    localStorage.setItem('complaints', JSON.stringify(updated))

    setTitle('')
    setCategory('taste')
    setDescription('')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Complaints</h1>
        <p className="text-slate-400 mt-2">Raise and view mess-related issues.</p>

        <form onSubmit={handleSubmit} className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <input
            type="text"
            placeholder="Complaint title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3"
          >
            <option value="taste">Taste</option>
            <option value="hygiene">Hygiene</option>
            <option value="delay">Delay</option>
            <option value="shortage">Shortage</option>
            <option value="staff">Staff</option>
          </select>

          <textarea
            placeholder="Describe your issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 min-h-32"
          />

          <button className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 py-3 font-medium">
            Submit Complaint
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {complaints.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <span className="text-sm px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
                  {item.status}
                </span>
              </div>
              <p className="text-slate-400 mt-2">By: {item.name}</p>
              <p className="text-slate-400">Category: {item.category}</p>
              <p className="text-slate-300 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComplaintsPage