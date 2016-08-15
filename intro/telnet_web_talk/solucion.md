### Indague cómo tener una sesión con un servidor web a través de telnet. Escoja un sitio que visite con frecuencia y hable HTTP con el servidor. Actúe como un navegador. Solicite al menos una página HTML, un recurso binario que sabe que existe en el servidor, y un recurso que no existe. Transcriba su sesión telnet a un documento de texto.

Telnet es el nombre de protocolo de red que nos permite conectarnos a otra maquina por la red, como si estuvieramos en frente de esta.
Se utiliza el puerto 23. El mayor problema que tiene telnet  es la seguridad, ya que la información quie viaja por internet no viene cifrada, es decir, viaja por la red como _texto plano_.
La página web a la cual vamos a hablar es la de la [ECCI](www.ecci.ucr.ac.cr).

#### Solicitud de la página principal   
Solicitamos la página principal enviandole un GET request, cuyo request header lleva el valor host, que es obligatorio.
 ```  
GET / HTTP/1.1  
Host: www.joel.com  

HTTP/1.1 200 OK  
Date: Mon, 15 Aug 2016 16:00:08 GMT  
Server: Apache/2.2.15 (CentOS)  
X-Powered-By: PHP/5.3.3  
Set-Cookie: PHPSESSID=jbjbct7stt3s9brmk10g1tbap3; expires=Wed, 07-Sep-2016   19:33:32 GMT; path=/; domain=.joel.com  
Expires: Sun, 19 Nov 1978 05:00:00 GMT  
Last-Modified: Mon, 15 Aug 2016 16:00:12 GMT  
Cache-Control: no-store, no-cache, must-revalidate  
Cache-Control: post-check=0, pre-check=0  
Connection: close  
Transfer-Encoding: chunked  
Content-Type: text/html; charset=utf-8  
  
5442  

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">  
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es">  
	<head>  
	</head>  
	<body id="home">  
	  <!--Conteniedo-->
	</body>  
</html>  
  
0  
```  
   
#### Solicitud de imágen
Se solicitará la imágen del logo de la UCR, que está en la URL: _http://www.ecci.ucr.ac.cr/system/files/UCR-Escudo-Negro.png_   
  
```  
GET www.ecci.ucr.ac.cr/system/files/UCR-Escudo-Negro.png HTTP/1.1   
Host: joel.com  
Content-Type: image/png


HTTP/1.1 200 OK
Date: Mon, 15 Aug 2016 16:19:25 GMT
Server: Apache/2.2.15 (CentOS)
X-Powered-By: PHP/5.3.3
Set-Cookie: PHPSESSID=lsgaijgbvdn6v7e7habm5ern94; expires=Wed, 07-Sep-2016 19:53:01 GMT; path=/; domain=.joel.com
Expires: Sun, 19 Nov 1978 05:00:00 GMT
Last-Modified: Mon, 15 Aug 2016 16:19:41 GMT
Cache-Control: no-store, no-cache, must-revalidate
Cache-Control: post-check=0, pre-check=0
Content-Length: 88176
Connection: close
Content-Type: image/png

101000001010100010010101000001001110010001110000101000011010
000010100000000000000000000000000000110101001001010010000100
010001010010000000000000000000000001101110000000000000000000
000000011101010000001000000000100000000000000000000000001100
011110011110101010101100010100000000000000000000000000000001
011100110101001001000111010000100000000010101110110011100001
110011101001000000000000000000000000000010010111000001001000
01011001011100110000000000000000000010110001001100000000  

    
    
```  
Cuando se solicitó una imagen, el editor de texto mostraba basura, ya que trataba de interpretar los datos binarios como texto, pero eran imagenes. Para ver su contenido, se hizo un hexdump al archivo y se convirtio en binario (el archivo era extenso, por lo que se hizo para una parte).


### Solicitud de algún recurso inexistente   
Se solicitará el recurso inexistente dado por la URL: _http://www.ecci.ucr.ac.cr/system/files/steven-universe.jpg_   
  
```  
GET www.ecci.ucr.ac.cr/inexistente.html HTTP/1.1   
Host: joel.com  

HTTP/1.1 404 Not Found
Date: Mon, 15 Aug 2016 18:35:30 GMT
Server: Apache/2.2.15 (CentOS)
X-Powered-By: PHP/5.3.3
Set-Cookie: PHPSESSID=o2tvmhn3cdmikkgn8cfg555sf7; expires=Wed, 07-Sep-2016 22:08:56 GMT; path=/; domain=.Joel.com
Expires: Sun, 19 Nov 1978 05:00:00 GMT
Last-Modified: Mon, 15 Aug 2016 18:35:36 GMT
Cache-Control: no-store, no-cache, must-revalidate
Cache-Control: post-check=0, pre-check=0
Content-Length: 4980
Connection: close
Content-Type: text/html; charset=utf-8

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">  
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es">  
	<head>  
	</head>  
	<body id="home">  
	  <!--NOT FOUND-->
	</body>  
</html>  
  
0  

```  
     
