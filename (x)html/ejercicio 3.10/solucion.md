### ¿Qué pasa si dentro de un elemento <pre> coloca código (X)HTML que usted quiere mostrar como ejemplo literal?
El tag <pre> define texto preformateado, solo preserva cambios de linea y espacios. Si quiero mostrar un ejemplo literal que contenga código, se debe usar el CDATA. Por lo tanto, el navegador lo interpreta como código (X)HTML y el usuario no puede ver el código original sino el resultado de interpretarlo.