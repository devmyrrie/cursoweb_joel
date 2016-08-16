### Un usuario tiene cargada una página web y presiona el botón de refrescar. ¿Cómo debería el navegador web implementar esta operación? ¿Existe algún mecanismo eficiente para reducir el tráfico de red?


La solicitud se vuelve a hacer. Se vuelve a enviar un mensaje HTTP para obtener determinado recurso. Incluso, si no se ha cargado la página, y se oprime refresh, la primera solicitud no se cancela, se ejecuta y se hace paralelamente la solicitud neuva. Podría ser bueno tener recursos pesados como imágenes, en caché. 
