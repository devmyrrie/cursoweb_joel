### Su empresa un dominio web registrado y un sitio web en producción, digamos en http://suempresa.com. Su empresa quiere abrir un portal privado para los empleados, por lo que tienen que usar contraseñas. Se quiere que haya una versión segura del sitio en https://suempresa.com. ¿Debe su empresa registrar un nuevo dominio para servir su sitio web en https?


   
Se sabe que HTTP es el protocolo de comunicación que permite la transferencia de información por internet. Estos mensajes viajan sin ninguna forma de cifrado. Opera en la capa más alta de OSI, la de aplicación. HTTPS es un protocolo basado en HTTP, donde se le agrega un cifrado basado en TLS. HTTP utiliza el puerto 80 y HTTPS el 443. 
No se tiene que registrar un dominio, pues no tiene nada que ver con el protocolo TLS. Lo que tienen que hacer es configurar  el servidor web acepte conexiones. Para esto, se tiene que crear un certificado de llave publica (certificado digital) y  debe estar firmado por autoridad de certificación.
