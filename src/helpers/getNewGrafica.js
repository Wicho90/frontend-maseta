import { filtrarPorEstado } from "./filtrarPorEstado";

export const getNewGreafica = ( datos, titulo ) => {
    const normales = filtrarPorEstado( datos, 'normal' );
    const bajos    = filtrarPorEstado( datos, 'bajo' );
    const altos    = filtrarPorEstado( datos, 'alto' );

    return {
        labels: datos.map( dato =>  dato.createAt ),
        
        datasets: [
        {
            label: `${ titulo } Normal`,
            data: normales,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
          label: `${ titulo } Baja`,
          data: bajos,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)'
        },
        {
          label: `${ titulo } Alta`,
          data: altos,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ]

    }


}