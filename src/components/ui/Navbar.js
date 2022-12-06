import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SocketContext } from '../../context/SocketContext';

export const Navbar = () => {
  const { online } = useContext( SocketContext );



    return (
        <nav className="navbar navbar-expand-lg navbar-dark">

            <div className="container-fluid">
   
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/luz"
                            >
                                Luz
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/humedad"
                            >
                                Humedad
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/regresion"
                            >
                                Regresion
                            </NavLink>
                        </li>
                    
                    </ul>

                    <div className="d-flex">

                        <span className="navbar-text text-info me-2">
                        Service status: 
                            {
                                online
                                ? <span className="text-success"> Online</span>
                                : <span className="text-danger"> Offline</span>
                            }        
                        </span>
                        <button 
                            className="btn text-light" 
                        >
                            Logout
                        </button>

                    </div>

                </div>
            </div>
        </nav>
    )
}