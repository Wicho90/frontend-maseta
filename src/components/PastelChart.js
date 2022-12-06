
import React, { useContext, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { getNewPastel } from '../helpers/getNewPastel';
import { datoInicial } from '../data/datoInicial';
ChartJS.register(ArcElement, Tooltip, Legend);


export const PastelChart = ({ datos = datoInicial, titulo }) => {

    const [ graficaData, setGraficaData ] = useState(getNewPastel( datos ));

    useEffect(() => {

      setGraficaData(getNewPastel( datos, titulo ));

    }, [ datos ]);
   

    return (
      <div className="card" >
        
        <div className="card-header text-center">
          Nivel de { titulo }
        </div>

        <Doughnut className="card-img-top" data={graficaData} />

        

        <div className="card-footer">
            <small className="text-muted"> { "first_appearance" } </small>
        </div>

      </div>

    )
}