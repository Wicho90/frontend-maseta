import React, { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { UserData } from './Data';
import { SocketContext } from '../context/SocketContext';

import { Chart as ChartJS} from 'chart.js/auto';

export const options = {
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Exposicion de Luz',
      },
    },
  };

export const LuzChart = () => {

    const { socket } = useContext( SocketContext );

    const [userData, setUserData] = useState({
      labels: UserData.map( user =>  user.year ),
      datasets: [{
        label: 'Luz',
        data: UserData.map( user =>  user.userGain ),
        borderColor: ['rgb(53, 162, 235)', 'rgb(255, 99, 132)'],
        backgroundColor: ['rgba(53, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
  
      }]
    });
    
    useEffect( () => {
      socket.emit('findAllLuzs');
    }, []);
  
  
    useEffect(() => {
  
      socket.on('luzs-from-server', ( luzs ) => {
        setUserData({
          labels: luzs.map( luzs =>  luzs.createAt ),
          datasets: [{
            label: 'Luz',
            data: luzs.map( luzs =>  luzs.dato ),
            borderColor: ['rgb(53, 162, 235)', 'rgb(255, 99, 132)'],
          backgroundColor: ['rgba(53, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
          }]
  
        });
          
        });
  
        return () => socket.off('luzs-from-server');
  
      }, [ socket ]);

    return (
        <Bar options={options} data={userData} />
    );
}