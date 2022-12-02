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
      text: 'Bands',
    },
  },
};

export const BandChart = () => {

  const { socket } = useContext( SocketContext );

  const [userData, setUserData] = useState({
    labels: UserData.map( user =>  user.year ),
    datasets: [{
      label: 'User Gained',
      data: UserData.map( user =>  user.userGain ),
      borderColor: ['rgb(53, 162, 235)', 'rgb(255, 99, 132)'],
      backgroundColor: ['rgba(53, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],

    }]
  });

  // Cuando el componente se renderiza de nuevo el estado es el de arriba y se piede el otro

  useEffect( () => {
    socket.emit('findAllBands');
  }, []);

  useEffect(() => {

    socket.on('bands-from-server', ( bands ) => {
      
      setUserData({
        labels: bands.map( bands =>  bands.name ),
        datasets: [{
          label: 'Bands',
          data: bands.map( bands =>  bands.votes ),
          borderColor: ['rgb(53, 162, 235)', 'rgb(255, 99, 132)'],
        backgroundColor: ['rgba(53, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        }]

      });
        
      });

      return () => socket.off('bands-from-server');

    }, [ socket ]);
  
  // useEffect(() => {

  //   if (bands.length < 1) {
  //     console.log('vacias');
      
  //   }

  //   if (bands.length > 0) {
  //     console.log();
  //     console.log('contenido');
      
  //   }

  // }, [bands])
  



   

    return (
        <Bar options={options} data={userData} />
    )
}