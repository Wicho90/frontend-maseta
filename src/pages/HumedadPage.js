
import React, { useContext, useEffect, useState } from 'react';
import { BarrasChart } from '../components/BarrasChart';
import { PastelChart } from '../components/PastelChart';
import { SocketContext } from '../context/SocketContext';

export const HumedadPage = () => {

    const { socket } = useContext( SocketContext );
    const [humedad, setHumedad] = useState();

      // Optimisar despues
    
    useEffect( () => {
        socket.emit('findAllHumedads');
    }, []);


    useEffect(() => {
  
        socket.on('humedads-from-server', ( humedads ) => {
            console.log(humedads);
            setHumedad( humedads );
        });
    
        return () => socket.off('humedads-from-server');
    
    }, [ socket ]);


    return (
        <div>
            <h1>Humedad Page</h1>
            <hr />


            <div className="row row-cols-1 row-cols-md-2 g-4">
                
                <div className="col-9">
                    <BarrasChart datos={ humedad } titulo='Humedad' />
                </div>
                
                
                <div className="col-3">
                    <PastelChart datos={ humedad }  titulo='Humedad'/>
                </div>

            </div>

        </div>
    )
}