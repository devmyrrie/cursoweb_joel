function genSpecialValue() { return Math.random() < 0.5 ? null : undefined; }
var methods = {
  'specialValue':genSpecialValue,
  'boolean': genBoolean,
  'number':genNumber,
  'string':genString,
  'function':genFunction,
  'object':genObject,
  'array': genArray
};

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
    };
}

function genObject() {
  var myObject = {};
  var n = Math.floor(Math.random()*100);

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

genObject();

function escribirEnDocumento(tipo){
  if(tipo.constructor == Object){
    imprimirObjeto(tipo);
  }else{
    imprimirEnDoc(tipo);
  }
}


function printWS(nivel){
  var string = "";
        for(var i = 0 ; i < nivel; ++i){
            string += "\t";
        }
  return string;
}
function imprimirObjecto(tipo){
  var tipo = {
      "name": "Inventory_ECCI",
      "assets": [{
          "name": "Edificio ECCI",
          "characteristics": {
              "type": "Fixed",
              "condition": "Good",
              "status": "Functioning",
              "details": ""
          }
        }]
  };
    document.write(imprimirObjetoR(tipo,0));
}
function imprimirObjetoR(obj, nivel,str){
  for(var i in obj){
    str += printWS (nivel) + i + ":";
    if(obj[i].constructor === Object){
      str += "{\n";
      str += imprimirObjetoR(obj[i],nivel+1,str);
      str += printWS (nivel) + "}\n"
    }else{
      str += obj[i].toString()+"\n";
    }
  }
}
return str;

}
function imprimirEnDoc(tipo){
  document.write(tipo.toString());
}
