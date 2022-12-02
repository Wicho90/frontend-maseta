import React, { useContext, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {
    
    const [ valor, setValor ] = useState('');
    const { socket } = useContext( SocketContext );

    const onSubmit = (ev) => {
        ev.preventDefault();

        if ( valor.trim().length > 0 ) {
            // TODO: llamar la funcion para emitir el evento
            const name = valor;
            socket.emit('createBand', name);
            
            setValor('');
        }
    }

    return (
        <>

            <h3>Agregar Banda</h3>

            <form onSubmit={ onSubmit }>
                <input 
                   className="form-control"
                   placeholder="Nuevo nombre de banda" 
                   value={ valor }
                   onChange={ (ev) => setValor(ev.target.value) }
                />
            </form>

        </>
    )
}