import { Router } from "express";
import { loginUser,createUser, getAllUsers } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";
import { loginAuthentication } from "../middlewares/loginAuthentication.js";
import { verifySignUp } from  "../middlewares/verifySignup.js";
import { loginAuthorization } from "../middlewares/loginAuthorization.js";


const router = Router();


router.get('/login', loginUser);
//ruta protegida con jwt, con finalidad de testeo.
router.get('/users',loginAuthorization, getAllUsers);


router.post('/register' , [
    check('name', 'debe contener nombre, ').isLength({min: 5}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos, verifySignUp, 
], createUser)


//peticion POST login verificacion credenciales
router.post('/login', [
    check('email', 'El Email es requerido.').isEmail(),
    check('password', 'La contraseña es requerida.').not().isEmpty(),
    validarCampos, 
    loginAuthentication,
    loginAuthorization,
    loginUser,
], async (req, res) => {
    loginUser (req, res);
    
});
    




export default router