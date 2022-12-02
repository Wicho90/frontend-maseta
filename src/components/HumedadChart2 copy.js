
import React, { useContext, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { SocketContext } from '../context/SocketContext';
ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const numeroDeEstado = (humedads, estado) => {

  return humedads.filter( humadad => {
    if ( humadad.estado === estado ) {
      return humadad;
    }
  }).length;
}


export const HumedadChart2 = () => {
    const { socket } = useContext( SocketContext );

    const [userData, setUserData] = useState(data);

    useEffect(() => {
      socket.on('humedads-from-server', ( humedads ) => { 

        const normal = numeroDeEstado(humedads, 'normal');

        const alto = numeroDeEstado(humedads, 'alto');

        const bajo = numeroDeEstado(humedads, 'bajo');

        

        setUserData({
          labels: ['Humedad Normal', 'Humedad Baja', 'Humead Alta' ],
          datasets: [
            {
              label: '# of Votes',
              data: [normal, alto, bajo],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });

      });

    }, [ socket ]);
   

    return (
      <Doughnut data={userData} />

    )
}