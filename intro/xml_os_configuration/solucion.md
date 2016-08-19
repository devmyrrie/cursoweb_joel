 ### En los sistemas operativos basados en Unix, es común que los programas guarden su configuración en archivos de texto. 
 Por ejemplo, la configuración de dispositivos y particiones se configura en /etc/fstab, los programas a ejecutar de forma periódica en /etc/crontab; el intérprete de comandos Bash guarda su configuración en un archivo oculto .bashrc en la carpeta del usuario, el servidor web Apache en varios archivos de texto en la carpeta /etc/apache2, el servidor de SSH en /etc/ssh/; entre muchos otros. Cada uno de estos programas utilizan una notación diferente para representar su configuración. Liste ventajas y desventajas si todos estos programas utilizaran notación XML para representar sus configuraciones.

| Ventajas      | Desventajas   | 
| ------------- |:-------------:| 
|XML es más facil de leer | Es muy verboso (mucha info) | 
|La sintaxis es muy  fácil, por lo que entender que hace alguna parte del documento de configuración es fácil   |   | 
|Soporta Unicode   | Puede ocupar más espacio en disco| 
