import React, { useState, useEffect, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [active, setActive] = useState('Home')
  const [sidebarActive, setSidebarActive] = useState(false)
  const [heroActive, setHeroActive] = useState(true)

  return (
    <AppContext.Provider
      value={{
        active,
        setActive,
        sidebarActive,
        setSidebarActive,
        heroActive,
        setHeroActive,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppProvider, AppContext }
