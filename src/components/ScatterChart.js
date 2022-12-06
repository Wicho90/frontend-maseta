
import React, { useState } from 'react'
import { Scatter } from 'react-chartjs-2';
export const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const x = [
    9.472222222,
    9.355555556,
    9.377777778,
    8.288888889,
    8.755555556,
    9.222222222,
    7.733333333,
    8.772222222,
    10.82222222,
    13.77222222,
    16.01666667,
    17.14444444,
    17.8,
    17.33333333,
    18.87777778,
    18.91111111,
    15.38888889,
    15.55,
    14.25555556,
    13.14444444,
    11.55
  ];


  const y = [
    0.89,
    0.86,
    0.89,
    0.83,
    0.83,
    0.85,
    0.95,
    0.89,
    0.82,
    0.72,
    0.67,
    0.54,
    0.55,
    0.51,
    0.47,
    0.46,
    0.6,
    0.63,
    0.69,
    0.7,
    0.77
  ]

  const arrays = [
    [9.472222222, 0.89],
    [9.355555556, 0.86],
    [9.377777778, 0.89],
    [8.288888889, 0.83],
    [8.755555556, 0.83],
  ];

  arrays.map( array => {
    return {
        x: array[0],
        y: array[1]
    }
})
  export const llenar = {
    datasets: [
      {
        label: 'A dataset',
        data: x.map( (x, i) => {
            return {
                x,
                y: y[i]
            }
        }),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };


export const ScatterChart = () => {
    
    const [data, setData] = useState(llenar);



    return (
      <div className="card" >
        
        <div className="card-header text-center">
          Nivel de humedad
        </div>

        {/* <Scatter options={options} data={data} /> */}
      </div>
    )
}
