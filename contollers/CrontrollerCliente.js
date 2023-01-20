import cliente from "../models/modelcliente.js";


const crearcliente = async (req,res) => {
try {
    await cliente.create(req.body)
    res.json({
        message: 'usuario creado correctamente'
    })
    }catch (error) {
    res.json({
        message: `usuario no se creo correctamente ${error}`
    });
  } 
}
const editarcliente = async (req, res) => {
    try {
     await cliente.update(req.body);
     res.json({
     message: "cliente editado correctamente"
    });
    }catch (error) { 
      res.json({message: error.message});
    }
  };

  const mostrarCliente = async (req, res) => {
    try {
     const Cliente =await Cliente.finOne({ where:{ id:req.params.id}});
     res.json(Cliente);
     
    }catch (error) { 
      res.json({
        message: error.message
    });
    }
  };

  const eliminarcliente = async (req, res) => {
    await cliente.destroy({ where:{id: req.params.id}});
    res.json({
        message: "registro eliminado correctamente",
    });
    res.json({message: error.message});

};
const mostrarClientes = async (req, res) => {
  try {
      const clientes = await clientesModel.findAll()
      res.json(clientes)
  } catch (error) {
      res.json({
          message: `La base de datos se encuentra vacia ${error}`
      })
  }
}

export {
   crearcliente,
    mostrarCliente,
    eliminarcliente,
    editarcliente,
    mostrarClientes

};
