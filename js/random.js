function genSpecialValue() { return Math.random() < 0.5 ? null : undefined; }
function genRandomValue() {
    var arrayMethods = ["specialValue","boolean","number","string","function","object","array"];
    var indice =Math.floor (Math.random() * 7);
    var string = arrayMethods[indice];
    return methods[string]();
}

function genBoolean() {return Math.random() < 0.5 ? true : false; }
function genNumber() {return Math.random()*100 ; }
function genString() {return (Math.random()+1).toString(36).substring(2); }

function genFunction() {
  return function(){
      return "Soy una funcion";
    }.toString();
}

function genObject() {
  var myObject = {};
  var n = 100;//Math.floor(Math.random()*100);

  for(var i = 0; i < n ; ++i){
    myObject[genString()] = genRandomValue();
  }
return myObject;
 }



function genArray() {
  var arr = [];
  var n = Math.floor(Math.random()*100);
  for(var i = 0; i < n ; ++i){
    arr.push(genRandomValue());
  }
  return arr;
 }


var methods = {
  'specialValue':genSpecialValue,
  'boolean': genBoolean,
  'number':genNumber,
  'string':genString,
  'function':genFunction,
  'object':genObject,
  'array': genArray
};

genObject();

function escribir(tipo){

}
