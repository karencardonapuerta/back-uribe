import {Sequelize} from 'sequelize'

const dataBase = new Sequelize('formulario', 'root','', {
    host:'localhost',
    dialect: 'mysql'
})

export default dataBase
