### Escriba un documento XHTML 1.0 bien formado pero con errores. Valídelo utilizando un XML parser. ¿Intenta el XML parser acceder al DTD mediante Internet? ¿Cómo reacciona el XML parser si cambia el documento a XHTML5 válido?.

Si trata de conectarse a internet y descargar el dtd pero no sucede; sale el siguiente error:
warning: failed to load external entity "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">  

Y si lo pasamos a XHTML5 entonces nos sale que no  tiene un DTD y que hace falta.
