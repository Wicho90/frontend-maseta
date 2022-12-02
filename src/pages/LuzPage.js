import React, { useContext } from 'react';
import { LuzChart } from '../components/LuzChart';
import { SocketContext } from '../context/SocketContext';




function LuzPage() {
    const { online } = useContext( SocketContext );

    return (
        <div className="container">

            <div className="alert">
                <p>
                Service status:
                {
                    online
                    ? <span className="text-success">Online</span>
                    : <span className="text-danger">Offline</span>
                }          
                </p>
            </div>

            <h1>Luz Page</h1>
            <hr />
            
            <div className="row">
                <div className="col">
                    <LuzChart />
                </div>
            </div>

        </div>
    );
}

export default LuzPage;
