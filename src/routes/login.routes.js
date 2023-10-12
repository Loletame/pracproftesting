import { Router } from "express";
import { loginUser,createUser, getAllUsers } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";
import { authenticateLogin } from "../middlewares/authenticateLogin.js";
import { verifySignUp } from  "../middlewares/verifySignup.js";


const router = Router();


router.get('/login', loginUser);
router.get('/users', getAllUsers);


router.post('/register' , [
    check('name', 'debe contener nombre, ').isLength({min: 5}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos, verifySignUp, 
], createUser)



router.post('/login', [
    check('email', 'El Email es requerido.').isEmail(),
    check('password', 'La contraseña es requerida.').not().isEmpty(),
    validarCampos, 
    authenticateLogin,
    loginUser,
], async (req, res) => {
    loginUser (req, res);
    
});
    




export default router