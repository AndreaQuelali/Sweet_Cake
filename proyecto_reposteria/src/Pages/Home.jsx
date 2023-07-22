import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Footer } from '../Components/Footer';
import Header from '../Components/Header';

export const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const usuario = location.state?.prop
    const [user,setUser] = useState([]) 

    const [inicio,setInicio] = useState(true)
    const [pasteles,setPasteles] = useState(false)
    const [pays,setPays] = useState(false)
    const [cupcakes,setCupcakes] = useState(false)
    const [donas,setDonas] = useState(false)
    const [opiniones,setOpiniones] = useState(false)
    const [contacto,setContacto] = useState(false)
    const [compra,setCompra] = useState(false)
    
    const [tipoPt,setTipoPt] = useState("pt")
    const [tablaPasteles,setTablaPt] = useState([])

    const [tipoPy,setTipoPy] = useState("py")
    const [tablaPays,setTablaPy] = useState([])

    const [tipoCk,setTipoCk] = useState("ck")
    const [tablaCupcakes,setTablaCk] = useState([])

    const [tipoDc,setTipoDc] = useState("dc")
    const [tablaDc,setTablaDc] = useState([])

    const [tipoDe,setTipoDe] = useState("de")
    const [tablaDe,setTablaDe] = useState([])

    const [tipoDr,setTipoDr] = useState("dr")
    const [tablaDr,setTablaDr] = useState([])

    const [perfil,setPerfil] = useState(false)
    
    const [editar,setEditar] = useState(false)
    const [notificacion,setNotificacion]=useState(false)

    const [detalle,setDetalle] = useState(false)
    const [contador,setContador] = useState(0)
    const [tablaproductos, setProducto] = useState([])
    const [b,setB] = useState(false)  
    const[nombrePr,setNombrePr] = useState([])
    const [busqueda,setBusqueda] = useState("")  
    const [aux,setAux] = useState([])

    const [opinion,setOpinion] = useState({
        emailC:usuario.email,
        opinionC:'',
    })
    const [tablaOpiniones,setTablaO] = useState([])

    const [pedido,setPedido] = useState ({
        emailP:usuario.email,
        productoPedido:'',
        saborPedido:'',
        tematicaPedido: '',
        cantidadPedido:'',
        fechaPedido:'',
        descripcionPedido: '',
    }) 
    const [nota,setNota] = useState(false)
    const [confirmacion,setConf] = useState(false)
    
    const [aviso,setAviso] = useState(false)

    useEffect(() => {
        const fetchProducto = async () => {
          try {
            const response = await fetch('http://localhost:3579/producto');
            const data = await response.json();
            setProducto(data);
          } catch (error) {
            console.error("Error al obtener usuario:", error);
          }
        };
        fetchProducto();
      }, []);

    useEffect(() => {
        const fetchPast = async () => {
          try {
            const response = await fetch(`http://localhost:3579/pastel/${tipoPt}`);
            const data = await response.json();
            setTablaPt(data);
          } catch (error) {
            console.error("Error al obtener los pasteles:", error);
          }
        };
        fetchPast();
    },[]);

    useEffect(() => {
        const fetchPast = async () => {
          try {
            const response = await fetch(`http://localhost:3579/pay/${tipoPy}`);
            const data = await response.json();
            setTablaPy(data);
          } catch (error) {
            console.error("Error al obtener los pays:", error);
          }
        };
        fetchPast();
    },[]);

    useEffect(() => {
        const fetchPast = async () => {
          try {
            const response = await fetch(`http://localhost:3579/cupcake/${tipoCk}`);
            const data = await response.json();
            setTablaCk(data);
          } catch (error) {
            console.error("Error al obtener los cupcakes:", error);
          }
        };
        fetchPast();
    },[]);

    useEffect(() => {
        const fetchPast = async () => {
          try {
            const response = await fetch(`http://localhost:3579/donaC/${tipoDc}`);
            const data = await response.json();
            setTablaDc(data);
          } catch (error) {
            console.error("Error al obtener los donas clasicas:", error);
          }
        };
        fetchPast();
    },[]);  

    useEffect(() => {
        const fetchPast = async () => {
          try {
            const response = await fetch(`http://localhost:3579/donaE/${tipoDe}`);
            const data = await response.json();
            setTablaDe(data);
          } catch (error) {
            console.error("Error al obtener los donas especiales:", error);
          }
        };
        fetchPast();
    },[]);

    useEffect(() => {
        const fetchPast = async () => {
          try {
            const response = await fetch(`http://localhost:3579/donaR/${tipoDr}`);
            const data = await response.json();
            setTablaDr(data);
          } catch (error) {
            console.error("Error al obtener los donas rellenas:", error);
          }
        };
        fetchPast();
    },[]);

    useEffect(() => {
        const fetchOpinion = async () => {
          try {
            const response = await fetch('http://localhost:3579/opiniones');
            const data = await response.json();
            setTablaO(data);
          } catch (error) {
            console.error("Error al obtener las opiniones:", error);
          }
        };
        fetchOpinion();
      }, []);

    const obtenerDatoP=(e)=>{
        setBusqueda(e.target.value)
        filtrado(e.target.value)
    }

    const filtrado = (textoBusqueda)=>{
        var resultadoB = tablaproductos.filter((p)=>{
            if(p.nombreP.toString().toLowerCase().includes(textoBusqueda.toLowerCase())){
                return p;
            }
        })
        setNombrePr(resultadoB)
    }

    const mostrarDetalle = (arrP)=>{
        setDetalle(true)
        setAux(arrP)
    }  
    

    const irALogin = () =>{
        navigate('/')
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

    const mostrarCompra = (auxPr,contPr) =>{
        setCompra(true),
        setCupcakes(false),
        setInicio(false),
        setPasteles(false),
        setPays(false),
        setDonas(false),
        setOpiniones(false),
        setContacto(false),
        setDetalle(false),
        compraP.cantidad = contPr,
        compraP.producto= auxPr.nombreP,
        compraP.precio=auxPr.precioP
    }

    const [compraP,setCompraP] = useState({
        emailComp : usuario.email,
        telefono:'',
        direccion:'',
        indicaciones:'',
        producto:'',
        precio:'',
        cantidad: ''
    })

    const datosCompra = (a) =>{
        setCompraP({
            ...compraP,
            [a.target.name]: a.target.value,
        })
    }

    const ordenarPostre = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3579/compra', compraP).then(({data})=>{
            setCompraP(data)
            setAviso(true)
            console.log(data)
        }).catch(({error})=>{
            console.log("Error al ordenar");
          })
        
    }

    const cerrarAviso = ()=>{
        window.location.reload(true)
    }

    const mostrarPerfil = ()=>{
        setPerfil(true)
        setB(false)
    }

    const escribirBusqueda=()=>{
        setB(true)
        setPerfil(false)
    }

    const cerrarBuscar=()=>{
        setBusqueda(""),
        setB(false),
        setNombrePr([])
    }

    const cerrarDetalle=()=>{
        setDetalle(false)
        setContador(0)
    }

    useEffect(() => {
        const fetchUsuario = async () => {
          try {
            const respuesta = await fetch(`http://localhost:3579/login/${usuario.email}`);
            const data = await respuesta.json();
            setUser(data);
          } catch (error) {
            console.error("Error al obtener usuario:", error);
          }
        };
        fetchUsuario();
      }, [usuario.email]);


    const [cambiosP,setCambiosP] = useState({
    nameP:'',
    lastNameP:'',
    emailP: usuario.email,
    })

    const datosPerfNuevos=(a)=>{
        setCambiosP({
            ...cambiosP,
            [a.target.name]: a.target.value,
        })
    }

    const guardarCambios = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3579/perfilNuevo',cambiosP).then(({data})=>{
            setCambiosP(data)  
            setNotificacion(true)
             
            console.log(data)
        }).catch(({error})=>{
            console.log("Error al guardar cambio");
          })
    }

    const cerrarEditar =()=>{
        window.location.reload(true)
    }

    const datosPedido = (a) =>{
        setPedido({
            ...pedido,
            [a.target.name]: a.target.value,
        })
    }

    const datosOpinion=(a)=>{
        setOpinion({
            ...opinion,
            [a.target.name]: a.target.value,
        })
    }

    const guardarOpinion = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3579/opinion', opinion).then(({data})=>{
            setOpinion(data)
            setConf(true)
            console.log(data)
        }).catch(({error})=>{
            console.log("Error al guardar opinion");
          })
        
    }

    const cerrarConfirmacion = () =>{
        window.location.reload(true)
    }
    
    const mostrarNota = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3579/pedido', pedido).then(({data})=>{
            setNota(true)
            console.log(data)
        }).catch(({error})=>{
            console.log("Error al mostar nota");
          })
    }

    const cerrarNota = () =>{
        setNota(false),
        pedido.productoPedido='',
        pedido.saborPedido='',
        pedido.tematicaPedido='',
        pedido.cantidadPedido='',
        pedido.fechaPedido='',
        pedido.descripcionPedido=''
    }

  return (
    <div className='m-0 bg-white flex flex-col items-center contenido'>
        <Header setInicio={setInicio} setPerfil={setPerfil}  setPasteles={setPasteles} 
       setPays={setPays} setCupcakes={setCupcakes} setDonas={setDonas} 
         setOpiniones={setOpiniones} setContacto={setContacto} 
       setB={setB} setNombrePr={setNombrePr} setBusqueda={setBusqueda} setCompra={setCompra} />
        <br/><br/><br/><br/><br/><br/>
        <div className={`${inicio? "block w-full":"hidden"}`}>
            <section className="py-3 px-5 flex justify-between flex-wrap">
                <div className="flex items-center">
                    <h1 className='w-60 text-center truncate text-2xl animate-pulse'>Bienvenid@, {user.name}!</h1>
                    <img className="w-8 h-8 mx-3" src="./Iconos/feliz.png"/>
                </div>
                <div className="flex items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="buscador">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mx-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input onClick={escribirBusqueda} value={busqueda} onChange={obtenerDatoP} className="busqueda" type="text" placeholder="Buscar..."/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mx-1 cursor-pointer" onClick={cerrarBuscar}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className={`${b? "flex flex-col bg-[#ffdbd6e8] w-[300px] border-[1px] top-[200px] absolute auxB":"hidden"}`}>
                            {
                            nombrePr.map((p) => (
                                <button onClick={()=>mostrarDetalle(p)} className="w-full m-0 p-2 font-semibold border-b-[1px] border-stone-800 text-start">{p.nombreP}</button>          
                                ))
                            }
                        </div>  
                    </div>
                    <img onClick={mostrarPerfil} className='w-10 h-10 ml-3 cursor-pointer' src={user.avatar}/>
                    
                </div>
            </section> 
            <div className={`${perfil? "flex flex-col bg-white w-[270px] border-[1px] border-stone-700 top-[210px] right-5 absolute perfil":"hidden"}`}> 
                <div className='flex justify-end'>
                    <svg onClick={()=>setPerfil(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 m-1 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-5/6 border-b-2 border-[#1E1E1E] drop-shadow-lg'>
                        <h3 className='text-2xl'>{user.name} {user.lastName}</h3>
                    </div>
                    <h3 className='py-2'>{user.email}</h3>
                    <img className='w-32 h-32' src={user.avatar}/>
                    <button onClick={()=>setEditar(true)} className='py-2 px-10 my-3 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-[#1E1E1E] hover:bg-[#ffd8d3] hover:border-2 border-[#1E1E1E]'>Editar perfil</button>
                    <button onClick={irALogin} className='py-2 px-10 mb-7 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-[#1E1E1E] hover:bg-[#ffd8d3] hover:border-2 border-[#1E1E1E]'>Cerrar sesión</button>
                </div>
            </div>
             
        </div>

        <div className={`${pasteles? "w-full m-0 flex flex-col items-center":"hidden"}`}>
            <div className="tituloPrincipal">
                <h2>Pasteles</h2>
            </div>
            <section className='w-full h-auto flex flex-wrap justify-center'>
                {
                    tablaPasteles.map((p) => (
                        <div className="w-60 p-1 m-8 border-[1px] border-b-[#1E1E1E] border-r-[#1E1E1E] border-l-0 border-t-0 rounded-xl">
                        <div onClick={()=>mostrarDetalle(p)} className="mb-3 ml-10 cursor-pointer imgCambio">
                            <img src={p.imagenP2}/>      
                            <img className="cambia" src={p.imagenP}/>
                        </div>
                        <div className = " border-b-[5px] rounded border-[#ffcfc9]">
                            <h3>{p.nombreP}</h3>
                        </div>
                        <h4>{p.precioP}bs</h4>
                        <p>{p.descripcionC}</p>
                        <button  onClick={()=>mostrarDetalle(p)} className="compra">
                            <img className="carro" src="./Iconos/carrito.png"/>
                        </button>
                    </div>      
                    ))
                }                     
            </section>
        </div>

        <div className={`${pays? "w-full m-0 flex flex-col items-center":"hidden"}`}>
            <div className="tituloPrincipal">
                <h2>Pays</h2>
            </div>
            <section className="w-full flex justify-evenly items-center flex-wrap">
                {
                    tablaPays.map((p) => (
                        <div className="flex justify-center items-center pl-20 my-7">
                            <div className="w-[300px] h-auto flex flex-col pt-4 shadow-xl relative border-[1px] border-[#1E1E1E] colorPay">
                                <div onClick={()=>mostrarDetalle(p)} className='absolute top-6 left-[-80px] cursor-pointer'>
                                    <img className="rounded-full" src={p.imagenP}/>
                                </div>
                                <div className='flex flex-col pl-[68px]'>
                                    <div class = "bg-white w-48 border-2 border-[#1E1E1E] border-dashed ">
                                        <h3>{p.nombreP}</h3>
                                    </div>
                                    <h4 className='m-1 mb-0'>{p.precioP}bs</h4>
                                    <p>{p.descripcionC}</p>
                                    <center><button onClick={()=>mostrarDetalle(p)} class="compra2">
                                        <img class="carro" src="./Iconos/carrito.png"/>
                                    </button></center>
                                </div>
                            </div>
                        </div>      
                    ))
                }                     
            </section>
        </div>

        <div className={`${cupcakes? "w-full m-0 flex flex-col items-center":"hidden"}`}>
            <div className="tituloPrincipal">
                <h2>Cupcakes</h2>
            </div>
            <section className="w-full flex justify-evenly items-center flex-wrap">
            {
                    tablaCupcakes.map((p) => (
                        <div className="w-64 p-1 my-8">
                            <center><img  onClick={()=>mostrarDetalle(p)} className='cursor-pointer' src={p.imagenP}/></center>
                            <div className = "bg-[#FFDBD6] rounded-xl my-3 border-[1px] border-b-[#1E1E1E] border-r-[#1E1E1E] border-l-0 border-t-0">
                                <h3>{p.nombreP}</h3>
                            </div>
                            <h4>{p.precioP}bs</h4>
                            <p className='w-full'>{p.descripcionC}</p>
                            <button onClick={()=>mostrarDetalle(p)} className="compra">
                                <img className="carro" src="./Iconos/carrito.png"/>
                            </button>
                        </div> 
                        ))
                    } 
            </section>
        </div>

        <div className={`${donas? "w-full m-0 flex flex-col items-center":"hidden"}`}>
            <div className="tituloPrincipal">
                <h2>Donas</h2>
            </div>
            <section className="w-full flex justify-center flex-wrap">
                <div className="w-[400px] my-8 flex flex-col justify-around flex-wrap">
                    <h2 className="h2N">Clásicas</h2>
                    {
                    tablaDc.map((p) => (
                        <div className="flex my-7">
                            <div onClick={()=>mostrarDetalle(p)} className='cursor-pointer hover:rotate-[360deg] duration-500'>
                            <center><img src={p.imagenP}/></center>
                            </div>
                            <div className="w-64 flex flex-col">
                                <div className = "w-52 border-2 border-l-0 border-t-[#1E1E1E] border-b-[#1E1E1E] border-r-[#1E1E1E]">
                                    <h3>{p.nombreP}</h3>
                                </div>
                                <h4>{p.precioP}bs</h4>
                                <p>{p.descripcionC}</p>
                                <button  onClick={()=>mostrarDetalle(p)} className="compra2">
                                    <img className="carro" src="./Iconos/carrito.png"/>
                                </button>
                            </div>
                        </div>    
                        ))
                    } 
                </div>
                <div className="w-[400px] my-8 flex flex-col justify-around flex-wrap">
                    <h2 className="h2N">Especiales</h2>
                    {
                    tablaDe.map((p) => (
                        <div className="flex my-7">
                            <div  onClick={()=>mostrarDetalle(p)} className='cursor-pointer hover:rotate-[360deg] duration-500'>
                            <center><img src={p.imagenP}/></center>
                            </div>
                            <div className="w-64 flex flex-col">
                                <div className = "w-52 border-2 border-l-0 border-t-[#1E1E1E] border-b-[#1E1E1E] border-r-[#1E1E1E]">
                                    <h3>{p.nombreP}</h3>
                                </div>
                                <h4>{p.precioP}bs</h4>
                                <p>{p.descripcionC}</p>
                                <button  onClick={()=>mostrarDetalle(p)} className="compra2">
                                    <img className="carro" src="./Iconos/carrito.png"/>
                                </button>
                            </div>
                        </div>    
                        ))
                    }
                </div>
                <div className="w-[400px] my-8 flex flex-col justify-around flex-wrap">
                    <h2 className="h2N">Rellenas</h2>
                    {
                    tablaDr.map((p) => (
                        <div className="flex my-7">
                            <div onClick={()=>mostrarDetalle(p)} className='cursor-pointer hover:rotate-[360deg] duration-500'>
                            <center><img src={p.imagenP}/></center>
                            </div>
                            <div className="w-64 flex flex-col">
                                <div className = "w-52 border-2 border-l-0 border-t-[#1E1E1E] border-b-[#1E1E1E] border-r-[#1E1E1E]">
                                    <h3>{p.nombreP}</h3>
                                </div>
                                <h4>{p.precioP}bs</h4>
                                <p>{p.descripcionC}</p>
                                <button onClick={()=>mostrarDetalle(p)} className="compra2">
                                    <img className="carro" src="./Iconos/carrito.png"/>
                                </button>
                            </div>
                        </div>    
                        ))
                    }
                </div>
            </section>
        </div>

        <div className={`${opiniones? "w-full m-0 flex flex-col items-center":"hidden"}`}>
            <div className="tituloPrincipal">
                <h2>Opiniones  de  los  clientes</h2>
            </div>
            <section className="w-full p-5 flex flex-col">
                <div className='w-full flex justify-evenly flex-wrap'>
                    {
                    tablaOpiniones.map((p) => (
                        <div className="w-[280px] p-5 m-2 flex-col text-center flex-wrap border-[1px] border-[#1e1e1e] shadow-lg">
                        <div className="flex items-center">
                            <center><img className='w-16 h-16' src={p.avatar}/></center>
                            <div className = "w-[170px] bg-[#2e2e2e] ml-2 shadow-lg">
                                <h3 className='text-white'>{p.name} {p.lastName}</h3>
                            </div>
                        </div>
                        <p>{p.opinion}</p>
                    </div>   
                        ))
                    } 
                </div>
                <div className='w-full flex flex-col mt-10 ml-5'>
                        <h2 className='text-start tracking-normal '>¿Te gustaría hacernos saber lo que piensas de Sweet Cake?</h2>
                        <p className='ml-4'>Adelante, exprésate!</p>
                        <div className='flex my-2 mx-3'>
                            <img className='w-16 h-16'  src={user.avatar}/>
                            <textarea name='opinionC' value={opinion.opinionC} onChange={datosOpinion} className="llenadoCom" rows="5" placeholder="Escribe tu opinión"></textarea>
                        </div>
                        <button onClick={guardarOpinion} className="w-40 h-10 mt-7 ml-40 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-[#1E1E1E] hover:bg-[#ffd8d3] hover:border-2 hover:border-[#1E1E1E] hover:duration-200 hover:ease-in-out">Guardar</button>
                </div> 
            </section>
        </div>

        <form className={`${contacto? "w-full m-0 flex flex-col items-center":"hidden"}`}>
            <div className="tituloPrincipal">
                <h2>Contáctanos</h2>
            </div>
            <section className="w-full  flex justify-center flex-wrap">
                <div className="p-12">
                    <h2 className='tracking-normal mt-2 mb-5'>¿Quieres realizar un pedido especial?</h2>
                    <div className="flex-col justify-between flex-wrap">
                        <a className="flex items-center" target="_blank" href="https://wa.me/60391320?text=Hola!%20Me%20gustar%C3%ADa%20realizar%20un%20pedido%20con%20las%20siguientes%20especificaciones:%20*Escribir_especificaciones*">
                            <img className="w-10 h-10 m-3 cursor-pointer hover:w-11 hover:h-11 hover:duration-200" src="./Iconos/telefono.png"/>
                            <h3>+591 76543210</h3>
                        </a>
                        <a className="flex items-center" target="_blank" href="https://mail.google.com/">
                            <img className="w-10 h-10 m-3 cursor-pointer hover:w-11 hover:h-11 hover:duration-200" src="./Iconos/gmail.png"/>
                            <h3>sweetcake@gmail.com</h3>
                        </a>
                    </div>
                </div>
                <div className="w-[480px] my-8 py-5 px-8 bg-[#FFDBD6] items-center shadow-lg border-[1px] border-b-[#1E1E1E] border-r-[#1E1E1E] border-l-0 border-t-0">
                    <h2 className="varianteh2 tracking-normal text-start my-4">Envía un mensaje con los detalles de tu pedido</h2>
                    <div>
                        <h3 className="text-start font-bold m-2">Escriba el producto</h3>
                        <input name='productoPedido' value={pedido.productoPedido} onChange={datosPedido} class="llenadoP" type="text" placeholder="Cupcake"/>
                    </div>
                    <div>
                        <h3 className="text-start font-bold m-2">Escriba el sabor</h3>
                        <input name='saborPedido' value={pedido.saborPedido} onChange={datosPedido} className="llenadoP" type="text" placeholder="Frambuesa"/>
                    </div>
                    <div>
                        <h3 className="text-start font-bold m-2">Escriba la temática</h3>
                        <input name='tematicaPedido' value={pedido.tematicaPedido} onChange={datosPedido} className="llenadoP" type="text" placeholder="Primavera"/>
                    </div>
                    <div>
                        <h3 className="text-start font-bold m-2">Escriba la cantidad</h3>
                        <input name='cantidadPedido' value={pedido.cantidadPedido} onChange={datosPedido} className="llenadoP" type="number" placeholder="20"/>
                    </div>
                    <div>
                        <h3 className="text-start font-bold m-2">Elija la fecha de entrega</h3>
                        <input name='fechaPedido' value={pedido.fechaPedido} onChange={datosPedido} className="llenadoP" type="date" placeholder=""/>
                    </div>
                    <div>
                        <h3 className="text-start font-bold m-2">Descripción</h3>
                        <textarea name='descripcionPedido' value={pedido.descripcionPedido} onChange={datosPedido} className="llenadoD" cols="1" rows="5" placeholder="Bizcocho con trozos de chocolate y frambuesas,crema rosada y decorado con mariposas de fondant"></textarea>
                    </div>
                    <center><button onClick={mostrarNota} className="w-40 h-10 mt-7 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-[#1E1E1E] hover:bg-white hover:duration-200 hover:ease-in-out">
                        Enviar
                    </button></center>
                </div>   
            </section>
        </form>

        <div className={`${inicio? "block w-4/5 h-2/5 carrusel":"hidden"}`}>
            <ul>
                <li><img onClick={mostrarPays} className="cursor-pointer" src="./Imagenes/bannerPayLimon.png"/></li>
                <li><img onClick={mostrarPasteles} className="cursor-pointer" src="./Imagenes/bannerPastelFresa.png"/></li>
                <li><img onClick={mostrarCupcakes} className="cursor-pointer" src="./Imagenes/bannerCupcakeUni.png"/></li>
            </ul>
        </div>

        <div className={`${detalle? "fixed inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center z-10":"hidden"}`}>
            <div className='w-[650px] bg-white border-[1px] border-slate-950 text-black producto'>
                <div className='flex justify-end'>
                    <svg onClick={cerrarDetalle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-3 mr-3 cursor-pointer hover:text-stone-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='flex justify-around items-center mx-4 '>
                    <div className='w-[35%] flex flex-col justify-center items-center'>
                        <img src={aux.imagenP}/>
                        <div className='flex justify-center items-start text-white'>
                            <button>
                                <svg onClick={()=>setContador(contador-1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 bg-stone-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                            </button>
                            
                            <div className="w-10 h-7 border-2 border-black text-center">
                                <p className=' text-zinc-400 font-bold'>{contador}</p>
                            </div>
                            <button>
                                <svg onClick={()=>setContador(contador+1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 bg-stone-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                            </button>
                            
                        </div>
                    </div>
                    <div className='w-[65%] flex flex-col justify-center items-start pl-2 pr-6'>
                        <h3 className='px-3 py-2 text-[28px] bg-[#ffcfcf] tituloDetalle'>{aux.nombreP}</h3>
                        <h4 className='text-lg font-sans font-medium m-0'>Descripción:</h4>
                        <p>{aux.descripcionL}</p>
                        <div className='flex justify-start items-center'>
                            <h4 className='text-lg font-sans font-medium m-0'>Precio:</h4>
                            <p>{aux.precioP} bs</p>
                        </div>
                    </div>
                </div>
                <center><button onClick={()=>mostrarCompra(aux,contador)} className='py-2 px-10 my-8 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-rose-200'>Ordenar</button></center>
            </div>
        </div>

        <div className={`${nota? "w-full fixed inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center z-10":"hidden"}`}>
            <div className='w-60 border-2 border-[#1e1e1e] flex flex-col colorNota'>
                <div className='flex justify-end'>
                    <svg onClick={cerrarNota} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 m-1 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <h3 className='w-[80%] p-1 text-bold border-[3px] bg-white border-[#1e1e1e] border-dashed mb-2'>Pedido enviado con éxito</h3>
                    <p className='text-center text-sm'>Cualquier consulta o incoveniente le informaremos a su correo electrónico.</p>
                    <p className='text-center font-semibold my-4'>Gracias por elegirnos, que tenga un buen dia!</p>
                </div>
            </div>
            
        </div>

        <div className={`${confirmacion? "w-full fixed inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center z-10":"hidden"}`}>
            <div className='w-60 border-2 border-[#1e1e1e] flex flex-col colorOp'>
                <div className='flex justify-end'>
                    <svg onClick={cerrarConfirmacion} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 m-1 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 m-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                    <h3 className='w-[80%] p-1 text-bold border-[3px] bg-white border-[#1e1e1e] border-dashed mt-3 mb-8'>Su opinión se guardo con éxito</h3>
                </div>
            </div>
            
        </div>

        <div className={`${editar? "fixed inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center z-10":"hidden"}`}>
            <div className='w-[380px] bg-white border-[1px] border-slate-950 text-black'>
                <div className='flex justify-end'>
                    <svg onClick={cerrarEditar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-3 mr-3 cursor-pointer hover:text-stone-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="w-[80%] varianteh2  bg-[#FFDBD6] tracking-normal text-center mt-3 border-b-[1px] border-[#1e1e1e] shadow-lg">Editar perfil</h2>
                    <form className="w-96 ml-8 pt-3 pb-5 px-8 items-center">
                        <div>
                            <h3 className="text-start font-bold m-2">Nombre(s)</h3>
                            <input name='nameP' value={cambiosP.nameP} onChange={datosPerfNuevos} className='h-8 w-72 pl-2 border-[1px] rounded-lg  border-[#1e1e1e]' type="text" placeholder="Ingresa tu nombre"/>
                        </div>
                        <div>
                            <h3 className="text-start font-bold m-2">Apellido(s)</h3>
                            <input name='lastNameP' value={cambiosP.lastNameP} onChange={datosPerfNuevos} className='h-8 w-72 pl-2 border-[1px] rounded-lg  border-[#1e1e1e]'  type="text" placeholder="Ingresa tu apellido"/>
                        </div>
                    </form> 
                    <div className={`${notificacion? "flex flex-col justify-center items-center":"hidden"}`}>
                        <p>Se guardaron los cambios</p>
                    </div>
                    <center><button onClick={guardarCambios} className='p-2  my-8 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-rose-200'>Guardar cambios</button></center>
                </div>
                
            </div>
        </div>

        <div className={`${compra? "w-full m-0 flex flex-col items-center":"hidden"}`}>
            <div className="tituloPrincipal">
                <h2>Detalle de entrega</h2>
            </div>
            <div className="flex flex-col items-center justify-center my-8 bg-[#FFDBD6] shadow-xl ">
                    <div className="w-[430px] mt-8 flex justify-center items-center flex-wrap">
                        <img className="w-24 h-24 rounded-full shadow-lg m-3" src={aux.imagenP}/>
                        <div className="w-64 h-24 p-2 flex flex-col  bg-white border-[#1e1e1e] border-b-2 border-r-2 shadow-lg ">
                            <h3 className='text-start'>{aux.nombreP}</h3>
                            <h4 className='ml-2 my-0'>Cantidad: {contador}</h4>
                            <h4 className='ml-2 my-0'>Total: {aux.precioP*contador} bs</h4>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-left font-bold m-2">Dirección</h3>
                        <input name='direccion' value={compraP.direccion} onChange={datosCompra} className="llenadoIC" type="text" placeholder="Quillacollo"/>
                    </div>
                    <div>
                        <h3 className="text-left font-bold m-2">Indicaciones para la entrega</h3>
                        <input name='indicaciones' value={compraP.indicaciones} onChange={datosCompra} className="llenadoIC" type="text" placeholder="Cerca al stadium"/>
                    </div>
                    <div>
                        <h3 className="text-left font-bold m-2">Número de celular</h3>
                        <input name='telefono' value={compraP.telefono} onChange={datosCompra} className="llenadoIC" type="tel" placeholder="+591 76543210"/>
                    </div>
                    <button onClick={ordenarPostre} className="w-40 h-10 my-7 bg-[#1E1E1E] text-white rounded-2xl font-bold text-lg hover:text-[#1E1E1E] hover:bg-white hover:duration-200 hover:ease-in-out">
                        Enviar
                    </button>
            </div>
        </div>
        <div className={`${aviso? "w-full fixed inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-center z-10":"hidden"}`}>
            <div className='w-60 border-2 border-[#1e1e1e] flex flex-col colorNota'>
                <div className='flex justify-end'>
                    <svg onClick={cerrarAviso} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 m-1 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <h3 className='w-[80%] p-1 text-bold border-[3px] bg-white border-[#1e1e1e] border-dashed mb-2'>Tu orden está en camino</h3>
                    <p className='text-center text-sm'>Serás notificado cuando llegué el repartidor</p>
                    <p className='text-center font-semibold my-4'>Gracias por elegirnos, que tenga un buen dia!</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
