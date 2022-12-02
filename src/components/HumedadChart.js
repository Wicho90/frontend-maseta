
import React, { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { UserData } from './Data';
import { SocketContext } from '../context/SocketContext';

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
        text: 'Nivel de humedad',
      },
    },
  };


  const extraerNormales = ( humedads, estado ) => {
    
    return humedads.map( humedad => {
      if( humedad.estado === estado ) {
        return humedad.nivel
      }
    });
  }

  const extraerBajos = ( humedads ) => {
    return humedads.filter( humedad => {
      if( humedad.estado === 'bajo') {
        return humedad.nivel
      }
    });
  }

  const extraerAltos = ( humedads ) => {
    return humedads.filter( humedad => {
      if( humedad.estado === 'alto') {
        return humedad.nivel
      }
    });
  }

export const HumedadChart = () => {
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
    socket.emit('findAllHumedads');
    }, []);

    useEffect(() => {
  
        socket.on('humedads-from-server', ( humedads ) => {

          const normales = extraerNormales( humedads, 'normal' );
          const bajos    = extraerNormales( humedads, 'bajo' );
          const altos    = extraerNormales( humedads, 'alto' );
          
          setUserData({
            labels: humedads.map( humedad =>  humedad.createAt ),
            
            datasets: [
            {
                label: 'Humedad Normal',
                data: normales,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
              label: 'Humedad Baja',
              data: bajos,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
            {
              label: 'Humedad Alta',
              data: altos,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          
          
          ]
    
          });
            
          });
    
          return () => socket.off('humedads-from-server');
    
        }, [ socket ]);
    

    return (
        <Bar options={options} data={userData} />
    )
}