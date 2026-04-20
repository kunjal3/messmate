import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('messmateUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  function loginWithName(name) {
    const userData = { name }
    localStorage.setItem('messmateUser', JSON.stringify(userData))
    setUser(userData)
  }

  function logout() {
    localStorage.removeItem('messmateUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginWithName, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}