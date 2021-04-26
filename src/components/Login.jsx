import React, {useState} from 'react';
import {auth} from '../firebase.config';
import {useHistory} from 'react-router-dom';

const Login = () => {

    const historial = useHistory();
    const [email, setEmail]= useState('');
    const [pwd, setPwd]= useState('');
    const [msgError, setMegError] = useState(null);

    const registrarUsuario = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, pwd)
            .then(r => historial.push('/'))
            .catch(e =>{
                if(e.code === "auth/invalid-email"){
                    setMegError("Formato de Email incorrecto");
                }
                if(e.code === "auth/weak-password"){
                    setMegError("La contraseña debe tener al menos 6 caracteres o mas!");
                }
            })
    }
    
    const loginUser = ()=>{
        auth.signInWithEmailAndPassword(email, pwd)
            .then(r=>historial.push('/'))
            .catch((e)=>{
                //auth/wrong-password
                // auth/invalid-email
                if(e.code === "auth/wrong-password"){
                    setMegError("Credenciales invalidas");
                }
                if(e.code === "auth/invalid-email"){
                    setMegError("El usuario no existe");
                }
                console.log(e);
            });
    }
    return (
        <div className="row mt-5">
            <div className="col-xs-12 col-sm-2 col-md-3"></div>
            <div className="col-xs-12 col-sm-8 col-md-6">
                <form onSubmit={registrarUsuario} className="form-group">
                    <input 
                    className="form-control m-2" 
                    type="text" 
                    placeholder="E-mail"
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input 
                    className="form-control m-2" 
                    type="password" 
                    placeholder="Contraseña"
                    onChange={(e)=>{setPwd(e.target.value)}}/>
                    {
                        msgError !== null ? 
                        (
                            <div className="alert alert-danger text-center m-2">
                                {msgError}
                            </div>
                        ):
                        (
                            <span></span>
                        )
                    }
                    <div className="row">
                        <div className="col-xs-12 col-md-4"></div>
                        <div className="col-xs-12 col-md-4">
                            <button type="submit" className="btn btn-dark btn-block mt-3">
                                Registrar Usuario
                            </button>
                        </div>
                        <div className="col-xs-12 col-md-4"></div>
                    </div>
                    
                </form>
                
                <div className="row">
                        <div className="col-xs-12 col-md-4"></div>
                        <div className="col-xs-12 col-md-4">
                            <button onClick={loginUser} className="btn btn-success btn-block mt-1">
                                Iniciar Sesión
                            </button>
                        </div>
                        <div className="col-xs-12 col-md-4"></div>
                    </div>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-3"></div>
        </div>
    )
}

export default Login
