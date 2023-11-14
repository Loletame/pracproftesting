
import jwt from 'jsonwebtoken';


export const loginAuthorization = (req, res, next) => {
  //extrae el token del header del request
  const token = req.header('Authorization');

  //se fija si el toke existe
  if (!token) {
    return res.status(401).json({ msg: 'Sin token, authorizacion denegada' });
  }

  try {
    //verifica el token 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token Decodificado:', decoded);
    //añade la informacion de user decodificada para luego usarlo.
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: 'El token no es valido' });
  }
};

