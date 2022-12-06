import React, { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

import { BandAdd } from '../components/BandAdd';
import { BandList } from '../components/BandList';
import { BandChart } from '../components/BandChart';



function HomePage() {
  const { online } = useContext( SocketContext );
  

  return (
    <div>


      <h1>Mis Macetas</h1>
      <hr />


    </div>
  );
}

export default HomePage;
