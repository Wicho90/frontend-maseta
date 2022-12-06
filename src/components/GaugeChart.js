
import React from 'react'
import { Doughnut } from 'react-chartjs-2';


export const data = {
    labels: ['Luz'],
    datasets: [
      {
        label: '# of Votes',
        data: [100 , 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(102, 102, 102, 0.2)',

        //   'rgba(7, 8, 9, 1 )', o este

        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(102, 102, 102, 0.2)',
          
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    circumference: 180,
    rotation: 270,
    cutout: '90%',
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            filter: (tooltipItem) => {
                return tooltipItem.dataIndex === 0;
            }
        }
    }
  }

export const GaugeChart = () => {


    

    return (
        <div className="card" >
            
            <div className="card-header text-center">
                Nivel de Luz
            </div>

            <Doughnut className="card-img-top" data={data} options={ options }/>

            <div className="card-footer">
                <small className="text-muted"> { "first_appearance" } </small>
            </div>

        </div>
      )
}
