# BackEnd
Repo Lolo.
.-..-.
esta entero por el momento para que puedan testear si quieren.
Insomnia: 
GET api/users
-JSON POST api/login: {
		
  
  		    "email": "correo en uso example@mplex.com",
			"password": "contra registrada"
			
			
}
(solo testing) El login otorgara un token con cierto tiempo de vida, en insomnia se agrega a un API key auth (llave: "Authorizathion" - valor: el_token_aqui)con el request GET (este caso a la lista de usuarios ) y devuelve la lista de usuarios mientras el token sea valido.


-JSON POST api/register: {
		
  
  		    "name": "nombre",
			"lastname": "apellido",
			"age": "edad(2 digitos)",
			"password": "contra a registrar ",
			"email": "correo a registrar example@mplex.com"
			
			
}
en un entorno real el .env se agrega al gitignore por obvias razones (jwt secret)
//.env


