
import React, { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { options } from '../helpers/graficaInicial';
import { getNewGreafica } from '../helpers/getNewGrafica';
import { datoInicial } from '../data/datoInicial';

export const BarrasChart = ({ datos = datoInicial, titulo }) => {
  
    const [ graficadData, setGraficaData ] = useState( getNewGreafica( datos ) );

    useEffect(() => {
      setGraficaData(getNewGreafica( datos, titulo ));
    }, [ datos ]);
    

    return (
      <div className="card" >
        
        <div className="card-header text-center">
          Nivel de { titulo }
        </div>

        <Bar className="card-img-top mt-0" options={ options } data={ graficadData } />

      </div>

    )
}