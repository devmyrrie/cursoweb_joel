### ¿Se puede tener dos servidores web instalados y activos en un mismo equipo? Si la respuesta es afirmativa ¿cómo harían para diferenciar cuáles peticiones de los clientes le pertenece a cada uno?

Claro que sí se puede. Tomemos como ejemplo el poder instalar nginx y apache en el mismo sitio. ¿Por qué?, porque apache trabaja bien cuando se le hacen solicitudes de contenido dinamico, y nginx cuando son estáticos. Apache consume mucha memoria y nginx necesita la ayuda de varios módulos para manejar contenido dinámico. Por lo tanto configuramos nginx para que maneje las solicitudes _front-end_ y apache el _back-end_. Para que corrarn en un mismo entorno, necesitamos que escuche en diferentes puertos. Nginx escuchará en el puerto 80, y apache en el 8080. Instalamos ambos servidores normalmente. Luego se configura nginx para que sirva al _front-end_ en puerto 80, y cualquier  archivo que termine en _".php"_ y que sea para manejar contenido dinamico, lo redirigimos al puerto _8080_ (el que está escuchando apache).
A este método se le llama *reverse proxy*.   
  
  
Más información en:   
1. [Reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)
2. [Apache and nginx](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-reverse-proxy-for-apache)  
3. [Proxy](http://stackoverflow.com/questions/224664/difference-between-proxy-server-and-reverse-proxy-server) 
