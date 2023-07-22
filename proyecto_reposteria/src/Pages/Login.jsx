import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [usuario,setUsuario] = useState ({
        email: '',
        password: '',
    }) 
    const obtenerDato = (a) =>{
        setUsuario({
            ...usuario,
            [a.target.name]: a.target.value,
        })
    }
    const irARegistro = () =>{
        navigate("/Registro")
    }
    const irAPagPrincipal = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3579/base', usuario).then(({data})=>{
            navigate('/Home',{state:{prop:usuario}})
            console.log(data)
        }).catch(({error})=>{
            e.preventDefault()
            console.log("Cliente no existe")
        })
    }

    return (
        <section className="bg-white flex justify-evenly flex-wrap">
            <img className="w-[580px] h-screen m-0" src="./Imagenes/repostera.png"/>
            <div className='flex flex-col items-center justify-center'>
                <p className="my-6 ml-5 text-[40px] tracking-widest bienvenida">Bienvenid@ a Sweet Cake!</p>
                <form className="bg-[#FFDBD6] w-[420px] py-4 px-7 shadow-xl inicioSesion">
                    <center><img className="w-32 h-32 rounded-full my-5" src="./Imagenes/logoSC.png"/></center>
                    <div>
                        <h3 className="text-left font-bold m-2">Correo electrónico</h3>
                        <input name='email' value={usuario.email} onChange={obtenerDato} className="llenadoIC" type="email" placeholder="Ingresa tu correo electrónico"/>
                    </div>
                    <div>
                        <h3 className="text-left font-bold m-2">Contraseña</h3>
                        <input name='password' value={usuario.password} onChange={obtenerDato} className="llenadoIC" type="password" placeholder="Ingresa tu contraseña"/>
                    </div>
                    <center><button onClick={irAPagPrincipal} className="botonIRE">
                        Iniciar sesión
                    </button></center>
                    <h3>¿No tienes una cuenta?</h3>
                    <center><button onClick={irARegistro} className="font-bold underline text-center text-lg mb-3">Regístrate aquí</button></center>
                </form>
            </div>
        </section>
    )
}

export default Login