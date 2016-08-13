### Varios caracteres, como el slash (/), el signo de pregunta (?) y el espacio en blanco, tienen un significado especial en un URL. Si un usuario necesita incluir estos caracteres en un URL pero sin su significado especial, investigue y explique cómo se puede hacer. Convierta el siguiente URL en uno válido:


_http://localhost/function.php?code="int d(uint n) { int i = 1; for(n /= 10; n; n /= 10) ++i; return i; }"_


#### ¿Por qué necesitamos codificar la URL?
Los URLs  solo pueden ser mandadas atravez del internet usando el set de caracteres ASCII. Los no ASCII se codifican.
En las URL, los espacios no son permitidos. Por esto mismo, se codifica la url de tal manera que se representan estos espacios en blanco  con el  "%20".

Entonces, la url codificada queda como:   
_http%3A%2F%2Flocalhost%2Ffunction.php%3Fcode%3D%22int%20d(uint%20n)%20%7B%20int%20i%20%3D%201%3B%20for(n%20%2F%3D%2010%3B%20n%3B%20n%20%2F%3D%2010)%20%20%20i%3B%20return%20i%3B%20%7D%22_
