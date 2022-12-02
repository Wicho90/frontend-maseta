
import React from 'react';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './routes/AppRouter';

import './BandNamesApp.css'

export const BandNamesApp = () => {
  return (
    <SocketProvider>
        <AppRouter />
    </SocketProvider>
  )
}
