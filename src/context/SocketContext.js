import React, { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
    // const { socket, online } = useSocket('http://localhost:3000');
    const { socket, online } = useSocket('https://maseta.onrender.com');

    // console.log(process.env);
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}