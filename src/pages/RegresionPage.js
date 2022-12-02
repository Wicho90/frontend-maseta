import React from 'react';
import { HumedadRegresion } from '../components/HumedadRegreseion';


export const RegresionPage = () => {

    return (
        <div className="container">
            <h1>Regresion Page</h1>
            <hr />

            <div className="row">
                <div className="col-10">
                    <HumedadRegresion />
                </div>
            </div>

            
        </div>

    )
}