
export const filtrarPorEstado = ( datos, estado ) => {
    
  return datos.map( dato => {
    if( dato.estado === estado ) {
      return dato.nivel
    }
  });

}

export const numeroDeEstado = (datos, estado) => {

  return datos.filter( dato => {
    if ( dato.estado === estado ) {
      return dato;
    }
  }).length;
}

