import { DataTypes } from "sequelize";
import dataBase from "../database/conexionDatabase.js";

const cliente = dataBase.define('registro', {
    tipoDocumento: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    fechaNacimiento: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    }
})

export default cliente