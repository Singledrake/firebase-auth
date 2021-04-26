import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase.config';

const Menu = () => {
    const historial = useHistory();
    const [user, setUser] = useState('');

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user.email);
            }
        })
    },[])

    const signOutUser = ()=>{
        auth.signOut();
        setUser(null);
        historial.push('/');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        {
                            !user ?
                            (
                                <Link className="nav-link" to="/admin">Admin</Link>
                            ):
                            (
                                <span></span>
                            )
                        }
                    </li>
                    <li className="nav-item">
                        {
                            !user ?
                            (
                                <Link className="nav-link" to="/login">Login</Link>
                            ):
                            (
                                <span></span>
                            )
                        }
                        
                    </li>
                </ul>
                {
                    user ?
                    (
                        <button
                        onClick={signOutUser}
                        className="btn btn-danger">
                            Cerrar Sesión
                        </button>
                    ):
                    (
                        <span></span>
                    )
                }
            </nav>
        </div>
    )
}

export default Menu
