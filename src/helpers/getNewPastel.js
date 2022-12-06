import { numeroDeEstado } from "./filtrarPorEstado";

export const getNewPastel = ( humedads, titulo = 'Title' ) => {

    const normal = numeroDeEstado(humedads, 'normal');

    const alto = numeroDeEstado(humedads, 'alto');

    const bajo = numeroDeEstado(humedads, 'bajo');


    return {
        labels: [`${ titulo } Normal`, `${ titulo } Alta`, `${ titulo } Baja` ],
        datasets: [
          {
            label: '# of Votes',
            data: [normal, alto, bajo],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

}