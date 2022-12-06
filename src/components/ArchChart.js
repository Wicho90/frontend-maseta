
import React, { useEffect, useRef, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';


// const gradientSegment = ctx.createLine
export const dataInicial = {
    labels: ['Luz'],
    datasets: [
      {
        label: '# of Votes',
        data: [701, 100],
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
          enabled: false,
        }
    }
  }


  const gaugeChartText = () => {

    return {
      id: 'gaugeChartText',
      afterDatasetsDraw(chart, args, pluginOptions) {
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right, width, height },
          scales: { r }
        } = chart;
  
        ctx.save();
  
        const xCoord = chart.getDatasetMeta(0).data[0].x;
        const yCoord = chart.getDatasetMeta(0).data[0].y;
  
        const score = data.datasets[0].data[0];
        let rating;
        let color;
        if (score < 150) {
          rating = 'bajo'
          color = 'rgba(53, 162, 235, 0.5)'
        }
        if (score >= 150 && score <= 500) {
          rating = 'normal'
          color = 'rgba(75, 192, 192, 0.5)'
        }
        if (score > 500) {
          rating = 'alto'
          color = 'rgba(255, 99, 132, 0.7)'
        }

        // ctx.fillRect(xCoord, yCoord, 400, 1);
  
        function textLabel(text, x, y, fontSize, textBaseLine, textAlign, fillStyle) {
          ctx.font = `${ fontSize }px sans-serif`;
          ctx.fillStyle = fillStyle;
          ctx.textBaseLine = textBaseLine;
          ctx.textAlign = textAlign;
          ctx.fillText(text, x, y); 
        }
  
        textLabel('Min', left, yCoord + 20, 15, 'top', 'left', 'rgba(53, 162, 235, 0.5)');
        textLabel('Max', right, yCoord + 20, 15, 'top', 'right', 'rgba(255, 99, 132, 0.7)');
        textLabel(score, xCoord, yCoord, 40, 'bottom', 'center', color);
        textLabel(rating, xCoord, yCoord - 50, 19, 'bottom', 'center', color);
  
  
  
  
  
      }
    }

  }







export const ArchChart = ({ dato = { nivel: 0, estado: 'bajo'} }) => {

  const [ plugins, setPlugins ] = useState([ gaugeChartText(dato) ]);

  const [ data, setData ] = useState( dataInicial );

  const ref = useRef(null);

  useEffect(() => {
   
    const { ctx, width, height } = ref.current;
    
    const backgroundDegree = ctx.createLinearGradient(0, 0, width-46, 0);
    const borderDegree = ctx.createLinearGradient(0, 0, width-46, 0);

    backgroundDegree.addColorStop(0, 'rgba(53, 162, 235, 0.4)');
    backgroundDegree.addColorStop(0.5, 'rgba(75, 192, 192, 0.4)');
    backgroundDegree.addColorStop(1, 'rgba(255, 99, 132, 0.4)');

    borderDegree.addColorStop(0, 'rgba(54, 162, 235, 1)');
    borderDegree.addColorStop(0.5, 'rgba(75, 192, 192, 1)');
    borderDegree.addColorStop(1, 'rgba(255, 99, 132, 1)');
    


    setData({
      labels: ['Luz'],
      datasets: [
        {
          label: '# of Votes',
          data: [dato.nivel, 400],
          backgroundColor: [
            backgroundDegree,
            'rgba(102, 102, 102, 0.2)',

          ],
          borderColor: [
            borderDegree,
            'rgba(102, 102, 102, 0.2)',
          ],
          borderWidth: 1,
        },
      ],
    });


  }, [ dato ]);
    

    return (
        <div className="card" >
            
            <div className="card-header text-center">
                Luz Actual
            </div>

            <Doughnut id="my-element" ref={ref} className="card-img-top m-2" data={data} options={ options } plugins={ plugins } />

            <div className="card-footer">
                <small className="text-muted"> { "first_appearance" } </small>
            </div>

        </div>
      )
}
