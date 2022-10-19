import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)

  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, links, setIsSidebarOpen }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
