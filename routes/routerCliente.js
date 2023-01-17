import express from 'express'
import { crearcliente, editarcliente, eliminarcliente, mostrarCliente } from '../contollers/CrontrollerCliente.js';

const clienteRouter = express.Router();

clienteRouter.post('/',crearcliente)
clienteRouter.put('/:id',editarcliente)
clienteRouter.get('/:id',mostrarCliente)
clienteRouter.delete('/',eliminarcliente)
//clienteRouter.all(mostrarCliente)

export default clienteRouter