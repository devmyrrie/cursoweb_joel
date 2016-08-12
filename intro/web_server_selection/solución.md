## Una empresa con bastantes años en el mercado pero sin presencia en internet, le contrata para crear su sitio web. ¿Qué preguntas haría al personal de la empresa con el fin de decidir cuál servidor web recomendar? Idee un par de escenarios. Los escenarios pueden tener esta estructura: "si las respuestas del personal fueran a y b, entonces el servidor recomendable sería w por esta razón: x".

Algunas de las preguntas que considero importante serían:
1. ¿Manejan muchas conecciones simultáneas? 
2. ¿En que sistema operativo lo quiere instalar?
3. ¿Requiere que sea software libre o  propietario?
4. ¿Su servidor cuenta con alta capacidad de procesamiento?
5. ¿La seguridad es un factor clave?
### Escenarios
1. Respuestas escenario 1

* Sí. 
* Cualquiera. 
* Libre (gratis) 
* No.
* Sí.
De lo anterior se puede  deducir que el personal busca un servidor que sea gratis, que consuma pocos recursos y  se pueda corren en cualquier sistema operativo. El punto importante es que no se cuenta con alta capacidad de procesamiento, por lo que necesitamos un servidor que consuma pocos recursos (principalmente memoria). Con esto, la respuesta mas certera sería usar lighthttp en un entorno linux (seguridad). De acuerdo con esta [pagina](https://help.dreamhost.com/hc/en-us/articles/215945987-Web-server-performance-comparison), lighthttp consume mucho menos memoria que apache y nginx.


2. Respuestas escenario 2

* Sí. 
* Windows o Debian 
* Libre (gratis) 
* Sí.
* Sí.

Se recomienda usar Debian, ya que cualquier distribucion linux tiende a ser más segura que Windows. La seguridad en el servidor tambien recae tambien en que tan seguro sea el sistema operativo. Al manejar muchas solicitudes simultaneamente y contar con recursos para manejar estas solicitudes, recomendaría Nginx dandole velocidad al tiempo de respuesta.
