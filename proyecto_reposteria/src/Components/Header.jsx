
import React from 'react'

export const Header = (props) => {

    const {setInicio} = props
    const {setPerfil} = props
    const {setPasteles} = props
    const {setPays} = props
    const {setCupcakes} = props
    const {setDonas} = props
    const {setOpiniones} = props
    const {setContacto} = props
    const {setCompra} = props

    const {setB} = props  
    const {setNombrePr} = props //cuando llamas a una variable {}
    const {setBusqueda} = props   // cuando defines [] 

    const mostrarHome = () =>{
        setInicio(true)
        setPasteles(false),
        setPays(false),
        setCupcakes(false),
        setDonas(false),
        setOpiniones(false),
        setContacto(false),
        setCompra(false)
    }

    const mostrarPasteles = () =>{
        setPasteles(true),
        setInicio(false),
        setPays(false),
        setCupcakes(false),
        setDonas(false),
        setOpiniones(false),
        setContacto(false),
        setPerfil(false),
        setCompra(false),
        cerrarBuscar()
    }

    const mostrarPays = () =>{
        setPays(true),
        setInicio(false),
        setPasteles(false),
        setCupcakes(false),
        setDonas(false),
        setOpiniones(false),
        setContacto(false),
        setPerfil(false),
        setCompra(false),
        cerrarBuscar()
    }

    const mostrarCupcakes = () =>{
        setCupcakes(true),
        setInicio(false),
        setPasteles(false),
        setPays(false),
        setDonas(false),
        setOpiniones(false),
        setContacto(false),
        setPerfil(false),
        setCompra(false),
        cerrarBuscar()
    }

    const mostrarDonas = () =>{
        setDonas(true),
        setInicio(false),
        setPasteles(false),
        setPays(false),
        setCupcakes(false),
        setOpiniones(false),
        setContacto(false),
        setPerfil(false),
        setCompra(false),
        cerrarBuscar()
    }

    const mostrarOpiniones = () =>{
        setOpiniones(true),
        setInicio(false),
        setPasteles(false),
        setPays(false),
        setCupcakes(false),
        setDonas(false),
        setContacto(false),
        setPerfil(false),
        setCompra(false),
        cerrarBuscar()
    }

    const mostrarContacto = () =>{
        setContacto(true),
        setInicio(false),
        setPasteles(false),
        setPays(false),
        setCupcakes(false),
        setDonas(false),
        setOpiniones(false),
        setPerfil(false),
        setCompra(false),
        cerrarBuscar()
    }

    const cerrarBuscar=()=>{
        setBusqueda(""),
        setB(false),
        setNombrePr([])
    }

  return (
    <header className="w-full h-[130px] bg-[url(./Imagenes/fondoInicio.jpg)] bg-cover flex items-center justify-between fixed z-[1]">
        <img onClick={mostrarHome} className="w-24 h-24 rounded-full mx-5 cursor-pointer" src="./Imagenes/logoSC.png"/>
        <label className="menu" for="check">
            <img src="./Iconos/menu.png"/>
        </label>
        <input type="checkbox" id="check" class="entrada"/>
        <nav>
            <button onClick={mostrarPasteles} className="no-underline text-xl font-thin py-2 px-6 mr-5 rounded-2xl bg-white opcion">Pasteles</button>
            <button onClick={mostrarPays} className="no-underline text-xl font-thin py-2 px-[40px] mr-5 rounded-2xl bg-white opcion">Pays</button>
            <button onClick={mostrarCupcakes} className="no-underline text-xl font-thin py-2 px-4 mr-5 rounded-2xl bg-white opcion">Cupcakes</button>
            <button onClick={mostrarDonas} className="no-underline text-xl font-thin py-2 px-9 mr-5 rounded-2xl bg-white opcion">Donas</button>
            <button onClick={mostrarOpiniones} className="no-underline text-xl font-thin py-2 px-4 mr-5 rounded-2xl bg-white opcion">Opiniones</button>
            <button onClick={mostrarContacto} className="no-underline text-xl font-thin py-2 px-1 mr-5 rounded-2xl bg-white opcion">Contáctanos</button>
        </nav>  
    </header>
  )
}

export default Header
