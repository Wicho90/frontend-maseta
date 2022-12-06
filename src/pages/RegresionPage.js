import React from 'react';
import { RegressionChart } from '../components/RegressionChart';


export const RegresionPage = () => {

    return (
        <div>
            {/* <h1></h1>
            <hr /> */}

            <div className="row row-cols-1 row-cols-md-2 g-4 position-relative">

                <div className="col-10 center position-absolute top-0 start-50 translate-middle-x">
                    <RegressionChart />
                </div>

            </div> 

        </div>

    )
}