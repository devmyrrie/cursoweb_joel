### Investigue la diferencia entre un conjunto de caracteres (character set) y la codificación del texto (text enconding). ¿Cómo esto afecta a los documentos XML?

Es importante mencionar que _character set_ y _text enconding_ son términos distintos. El _character set_ es un conjunto de caracteres que se pueden usar, es una colección fija de simbolos. Ejemplo: ASCII, UNICODE, LATIN.
Todo archivo deber ser codificado/descodificado para que sea guardado en memoria (en 1's y 0's). Cuando esto sucede, entra en juego el  _character enconding_, que nos dice la manera en que cada caracter es guardado en memoria. Ejemplos: UTF-8, ASCII, UTF-16.

Unicode es un superset de ASCII.

En resumen, la codificación  es una manera estandarizada de transformar una secuencia de caracteres (del charset) en secuencias de 1's y 0's.

Esto afecta, ya que si por ejemplo el servidor utiliza UTF-8 y UNICODE; y el cliente  utiliza ASCII, entonces puede que algunos caracteres que si se pueden ver usando UNICODE(con utf-8) no se vean bien del lado del cliente, por usar ASCII.  



#### Duda:
* Puedo usar ANSII (el char set) con UTF-8 ?
* Puedo usar UNICODE (el charset) con ANSII (codificación) ?
