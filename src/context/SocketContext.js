import React, { createContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useSocket } from '../hooks/useSocket';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
    // const { socket, online } = useSocket('http://localhost:3000');
    const { socket, online } = useSocket('https://maseta.onrender.com');

    // console.log(process.env);

    useEffect(() => {
        socket.on('notificacion', ( mensaje ) => {
            toast( mensaje, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
        

    }, [ socket ]);


    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}