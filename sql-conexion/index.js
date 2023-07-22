const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

app.use(cors())

const bd={
	host:'localhost',
	user: 'root',
	password: '',
	database: 'reposteriasc',
    port:'3306'
} 

app.get('/', (req, res)=>{
	res.send('')
})

app.post('/base',(req,res)=>{
	const {email,password} = req.body
	const valores = [email, password]
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM cliente WHERE email = ? AND password = ?", valores, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{
			if(resultado.length>0){
				res.status(200).send({
					"correo": resultado[0].email,
					"contraseña": resultado[0].password
			})
			}else{
				res.status(400).send('Cliente no existe')
			}
		}
	})
	conexion.end() 
})

app.post('/registro',(req,res)=>{
	const {name,lastname,email,password,avatar} = req.body
	const valores = [[name,lastname,email, password,avatar]]
	var conexion = mysql.createConnection(bd)
	conexion.query("INSERT cliente (name,lastname,email,password,avatar) values ? ", [valores], (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{
			if(req.body.name!="" && req.body.lastname!="" && req.body.email!="" && req.body.password!="" && req.body.avatar!=""){
				res.status(200).send("Usuario creado")
			}else{
				res.status(404).send("Llenar todos los campos")
			}
		}
	})
	conexion.end() 
})

app.get('/login/:email',(req,res)=>{
	const correo = req.params.email
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM cliente WHERE email = ?", correo, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{
			if (resultado.length > 0) {
				res.setHeader('Content-Type', 'application/json');
				res.status(200).send(JSON.stringify(resultado[0]));
			  } else {
				res.status(404).send('Cliente no encontrado');
			  }
		}
	})
	
	
})

app.get('/producto',(req,res)=>{
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM producto", (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})

app.get('/pastel/:tipoPt',(req,res)=>{
	const tipo = req.params.tipoPt
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM producto WHERE tipoP = ?",tipo, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})

app.get('/pay/:tipoPy',(req,res)=>{
	const tipo = req.params.tipoPy
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM producto WHERE tipoP = ?",tipo, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})

app.get('/cupcake/:tipoCk',(req,res)=>{
	const tipo = req.params.tipoCk
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM producto WHERE tipoP = ?",tipo, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})

app.get('/donaC/:tipoDc',(req,res)=>{
	const tipo = req.params.tipoDc
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM producto WHERE tipoP = ?",tipo, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})

app.get('/donaE/:tipoDe',(req,res)=>{
	const tipo = req.params.tipoDe
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM producto WHERE tipoP = ?",tipo, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})

app.get('/donaR/:tipoDr',(req,res)=>{
	const tipo = req.params.tipoDr
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM producto WHERE tipoP = ?",tipo, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})

app.post('/pedido',(req,res)=>{
	const {emailP,productoPedido,saborPedido,tematicaPedido,cantidadPedido,fechaPedido,descripcionPedido} = req.body
	const valores = [[emailP,productoPedido,saborPedido,tematicaPedido, cantidadPedido, fechaPedido, descripcionPedido]]
	var conexion = mysql.createConnection(bd)
	conexion.query("INSERT pedido (correoCliente,productoP,saborP,tematicaP,cantidadP,fechaP,descrP) values ? ", [valores], (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{
			if(req.body.productoPedido!="" && req.body.saborPedido!="" && req.body.tematicaPedido!=""  && req.body.cantidadPedido!="" && req.body.fechaPedido!="" && req.body.descripcionPedido!=""){
				res.status(200).send("Pedido enviado exitosamente")
			}else{
				res.status(404).send("Llenar todos los campos")
			}
		}
	})
	conexion.end() 
})

app.post('/opinion',(req,res)=>{
	const {emailC,opinionC} = req.body
	const valor = [opinionC,emailC]
	var conexion = mysql.createConnection(bd)
	conexion.query("UPDATE cliente SET opinion = ? WHERE email = ?", valor, (error,resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{
			if(req.body.opinionC!=""){
				res.status(200).send("Opinion guardada exitosamente")
			}else{
				res.status(404).send("Llenar el campo")
			}
		}
	})
	conexion.end() 
})

app.get('/opiniones',(req,res)=>{
	var conexion = mysql.createConnection(bd)
	conexion.query("SELECT * FROM cliente WHERE opinion != '' ", (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{			
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(resultado));
		}
	})
})


app.post('/perfilNuevo',(req,res)=>{
	const {nameP,lastNameP,emailP} = req.body
	const valores = [nameP,lastNameP,emailP]
	var conexion = mysql.createConnection(bd)
	conexion.query("UPDATE cliente SET name = ? , lastName = ? WHERE email = ?", valores, (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{
			if(req.body.nameP!="" && req.body.lastNameP!="" ){
				res.status(200).send("Perfil actualizado")
			}else{
				res.status(404).send("No se lleno los todos campos")
			}
		}
	})
	conexion.end() 
})

app.post('/compra',(req,res)=>{
	const {emailComp,telefono,direccion,indicaciones,producto,precio,cantidad} = req.body
	const valores = [[emailComp,telefono,direccion,indicaciones,producto,precio,cantidad]]
	var conexion = mysql.createConnection(bd)
	conexion.query("INSERT compra (correoCompra,telefonoCompra,direccion,indicaciones,producto,precio,cantidad) values ? ", [valores], (error, resultado)=>{
		if (error) {
			res.status(500).send(error)
		}else{
			if(req.body.emailComp!="" && req.body.telefono!="" && req.body.direccion!=""  && req.body.indicaciones!="" && req.body.producto!="" && req.body.precio!="" && req.body.cantidad!=""){
				res.status(200).send("Orden enviado exitosamente")
			}else{
				res.status(404).send("Llenar todos los campos")
			}
		}
	})
	conexion.end() 
})





app.listen(3579, () => console.log('Conectado al servidor'))

