import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//metodo para traer los usuarios en lista 
export const getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll();
        res.status(200).json({
            users,
            ok: true
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener los usuarios',
        })
    }
}

//metodo login de usuario, con JWT 
export const loginUser = (req, res) => {
    //genera un JsonWebToken (JWT) con determinado tiempo de vida (modificable a gusto)
    const token = jwt.sign ({ user: req.user}, process.env.JWT_SECRET, { expiresIn: '5m' });
    console.log('Generated Token:', token);
    res.status(200).json({
        msg: 'logueado con exito',
        token
    })


}
//metodo creacion de usuario con hasheo "salado" a la contraseña 
export const createUser = async (req,res) => {

    const {name,lastname,age, password,email} = req.body;

    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);
    const nuevoUsuario = {
        name,
        lastname,
        age,
        password: hashPassword,
        email
    };

    if(!hashPassword){
        res.status(400).json({msg: 'error al encriptar contraseña'})
    }
    else{
        res.status(201).json({
            msg: 'creado correctamente',
            name,
            lastname,
            age,
            password,
            email,
            hashPassword
        })
    }
    const user = await User.create(nuevoUsuario);
    
}