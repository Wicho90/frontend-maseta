
import React, { useContext, useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { SocketContext } from '../context/SocketContext';

  const datos = [
    {
        x: 100,
        y: 200
    }
]

const datos2 = [
  {
      x: 600,
      y: 300
  }
]



export const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


export const data = {
    datasets: [
        {
            type: 'scatter',
            label: 'Datos Originales',
            data: datos,
            backgroundColor: 'rgb(53, 162, 235)',
        },
    
        {
            type: 'line',
            label: 'Regresion',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: datos2,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            
        },
      
    ],
  };

export const HumedadRegresion = () => {

    const { socket } = useContext( SocketContext );

    const [userData, setUserData] = useState(data);

    useEffect(() => {
      socket.emit('findRegression');
    }, []);

    useEffect(() => {
      socket.on('regresion-from-server', ({original, regression}) => {
        setUserData({
          datasets: [
              {
                  type: 'scatter',
                  label: 'Datos Originales',
                  data: original,
                  backgroundColor: 'rgb(53, 162, 235)',
              },
          
              {
                  type: 'line',
                  label: 'Regresion',
                  borderColor: 'rgb(255, 99, 132)',
                  borderWidth: 2,
                  fill: false,
                  data: regression,
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  
              },
            
          ],
        });

      })
    }, [])



    return <Chart type='scatter' data={userData}  />;
}



	