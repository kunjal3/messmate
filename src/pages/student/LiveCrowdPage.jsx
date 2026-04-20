import React from 'react'

function LiveCrowdPage() {
  const activeUsers = 34
  let crowdLabel = 'Low'
  let waitTime = '5-10 mins'

  if (activeUsers > 20) {
    crowdLabel = 'Medium'
    waitTime = '10-15 mins'
  }

  if (activeUsers > 50) {
    crowdLabel = 'High'
    waitTime = '20-25 mins'
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Live Crowd Status</h1>
        <p className="text-slate-400 mt-2">Estimated crowd inside the mess right now.</p>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <p className="text-slate-400">Current crowd level</p>
          <h2 className="text-5xl font-bold mt-2 text-blue-400">{crowdLabel}</h2>
          <p className="mt-4 text-slate-300">Estimated people in queue: {activeUsers}</p>
          <p className="text-slate-400 mt-2">Estimated waiting time: {waitTime}</p>
        </div>
      </div>
    </div>
  )
}

export default LiveCrowdPage