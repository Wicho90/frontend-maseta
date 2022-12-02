
import React from 'react'
import HomePage from './pages/HomePage'
import { SocketProvider } from './context/SocketContext'
import { AppRouter } from './routes/AppRouter'

import './BandNamesApp.css'

export const BandNamesApp = () => {
  return (
    <SocketProvider>
        <AppRouter />
    </SocketProvider>
  )
}
