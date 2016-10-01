document.write('<h1>Potencias</h1>');
document.write('<table >');
 for ( var n=0; n <= 20; ++n ){
     document.write('<tr>');

    for(var j=0; j <= 10; ++j){

 if( n == 0 && j == 0 ){
   document.write('<th > ^ </th>\n');
 }else{
 if(j==0){
   document.write('<th>', n,'</th>');
 }else{//n==0 j != 0
   if(n!=0 && j !=0){
     document.write('<td>', Math.pow(n, j),'</td>');
   }else{ //n == 0
     document.write('<th>', j,'</th>');
   }
 }

 }

}
 document.write('</tr>');

}
document.write('</table>');
document.write('<h1>Tablas de multiplicar</h1>');
 document.write('<table >');
 for ( var n=0; n <= 20; ++n ){
     document.write('<tr>');

    for(var j=0; j <= 20; ++j){

 if( n == 0 && j == 0 ){
   document.write('<th > X </th>\n');
 }else{
 if(j==0){
   document.write('<th>', n,'</th>');
 }else{//n==0 j != 0
   if(n!=0 && j !=0){
     document.write('<td>', j*n,'</td>');
   }else{ //n == 0
     document.write('<th>', j,'</th>');
   }
 }

 }

}
 document.write('</tr>');

}
 document.write('</table>');
