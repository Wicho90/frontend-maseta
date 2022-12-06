import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { BarrasChart } from '../components/BarrasChart';
import { GaugeChart } from '../components/GaugeChart';
import { ArchChart } from '../components/ArchChart';
import { json } from 'react-router-dom';

function LuzPage() {
    const { socket } = useContext( SocketContext );
    const [luz, setLuz] = useState([]);

      // Optimisar despues
    useEffect( () => {
        socket.emit('findAllLuzs');
    }, []);


    useEffect(() => {

        socket.on('luzs-from-server', ( luzs ) => {
            setLuz( luzs );

        });
      
        return () => socket.off('luzs-from-server');
    
    }, [ socket ]);


    return (

        <div>
            <h1>Luz Page</h1>
            <hr />
            
            <div className="row row-cols-1 row-cols-md-2 g-4">

                <div className="col-9">
                    <BarrasChart datos={ luz } titulo='Luz' />
                </div>

                <div  className="col-3">
                    <ArchChart dato={luz[luz.length-1]} />
                </div>
                




            </div>

        </div>

    );
}

export default LuzPage;
