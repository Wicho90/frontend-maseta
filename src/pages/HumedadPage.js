
import React from 'react';
import { HumedadChart } from '../components/HumedadChart';
import { HumedadChart2 } from '../components/HumedadChart2';

export const HumedadPage = () => {

    return (
        <div className="container">
            <h1>Humedad Page</h1>
            <hr />

            <div className="row">
                <div className="col-10">
                    <HumedadChart />
                </div>
            </div>

            <br />
            
            <div className="row">
                <div className="col-4">
                    <HumedadChart2 />
                </div>
            </div>

        </div>
    )
}