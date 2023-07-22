import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Registro = () => {
    const navigate = useNavigate();

    const [avatarInicial,setAvatar] = useState("./Iconos/usuario.png")
    const [avatarEst,setAvatars] = useState(false);

    const [usuario,setUsuario] = useState ({
        name:'',
        lastname:'',
        email: '',
        password: '',
        avatar:'',
    }) 

    const elegirAV1=()=>{
        usuario.avatar='./Imagenes/avatar1.png',
        setAvatars(false)
        setAvatar('./Imagenes/avatar1.png')
    }

    const elegirAV2=()=>{
        usuario.avatar='./Imagenes/avatar2.png',
        setAvatars(false)
        setAvatar('./Imagenes/avatar2.png')
    }

    const elegirAV3=()=>{
        usuario.avatar='./Imagenes/avatar3.png',
        setAvatars(false)
        setAvatar('./Imagenes/avatar3.png')
    }

    const elegirAV4=()=>{
        usuario.avatar='./Imagenes/avatar4.png',
        setAvatars(false)
        setAvatar('./Imagenes/avatar4.png')
    }

    const elegirAV5=()=>{
        usuario.avatar='./Imagenes/avatar5.png',
        setAvatars(false)
        setAvatar('./Imagenes/avatar5.png')
    }

    const elegirAV6=()=>{
        usuario.avatar='./Imagenes/avatar6.png',
        setAvatars(false)
        setAvatar('./Imagenes/avatar6.png')
    }



    const obtenerDato = (a) =>{
        setUsuario({
            ...usuario,
            [a.target.name]: a.target.value,
        })
    }

    const irAPagPrincipal = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3579/registro', usuario).then(({data})=>{
            navigate('/Home',{state:{prop:usuario}})
            console.log(data)
        }).catch(({error})=>{
            console.log("Campos o campo vacio");
          })
    }
  return (
    <section className="h-screen bg-[url(./Imagenes/fondoRegistro.png)] m-0 bg-cover bg-center contenido">
        <div className="flex flex-col justify-center items-center formulario">
            <center><img onClick={()=>setAvatars(true)} className="w-[120px] h-[120px] mt-24 cursor-pointer" src={avatarInicial}/></center>
            <h3>Avatar</h3>
            <div>
                <h3 className='text-left font-bold m-[6px]'>Nombre(s)</h3>
                <input name='name' value={usuario.name} onChange={obtenerDato} className="llenadoR" type="text" placeholder="Ingresa tu nombre"/>
            </div>
            <div>
                <h3 className='text-left font-bold m-[6px]'>Apellido(s)</h3>
                <input name='lastname' value={usuario.lastname} onChange={obtenerDato} className="llenadoR" type="text" placeholder="Ingresa tu apellido"/>
            </div>
            <div>
                <h3 className='text-left font-bold m-[6px]'>Correo electrónico</h3>
                <input name='email' value={usuario.email} onChange={obtenerDato} className="llenadoR" type="email" placeholder="Ingresa tu correo electrónico"/>
            </div>
            <div>
                <h3 className='text-left font-bold m-[6px]'>Contraseña</h3>
                <input name='password' value={usuario.password} onChange={obtenerDato} className="llenadoR" type="password" placeholder="Ingresa tu contraseña"/>
            </div>
            <center><button onClick={irAPagPrincipal} className="py-2 px-7 mt-7 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-[#1E1E1E] hover:bg-white  hover:py-[9px] hover:px-[30px] hover:duration-300 hover:ease-in-out">
                Registrarse
            </button></center>
        </div>
        
        <div className={`${avatarEst? "fixed inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center z-10 shadow-lg":"hidden"}`}>
            <div className='w-2/3 bg-[#FDF0E7] border-b-2 border-r-2 flex flex-col justify-center items-center border-[#D9A17A] '>
                <h3 className='my-5'>Elige un avatar</h3>
                <div className='flex justify-evenly items-start mb-4 flex-wrap'>
                    <button onClick={elegirAV1}>
                    <img className="w-32 h-32 rounded-full shadow-md" src="./Imagenes/avatar1.png"/>
                    </button>
                    <button onClick={elegirAV2}>
                    <img className="w-32 h-32 rounded-full shadow-md" src="./Imagenes/avatar2.png"/>
                    </button>
                    <button onClick={elegirAV3}>
                    <img className="w-32 h-32 rounded-full shadow-md" src="./Imagenes/avatar3.png"/>
                    </button>
                    <button onClick={elegirAV4}>
                    <img className="w-32 h-32 rounded-full shadow-md" src="./Imagenes/avatar4.png"/>
                    </button>
                    <button onClick={elegirAV5}>
                    <img className="w-32 h-32 rounded-full shadow-md" src="./Imagenes/avatar5.png"/>
                    </button>
                    <button onClick={elegirAV6}>
                    <img className="w-32 h-32 rounded-full shadow-md" src="./Imagenes/avatar6.png"/>
                    </button>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Registro