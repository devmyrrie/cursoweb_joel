startPrinting();

function genBoolean() {
    return Math.random() < 0.5 ? true : false;
}

function genNumber() {
    return Math.random() * 100;
}

function genString() {
    return (Math.random() + 1).toString(36).substring(2);
}

function genSpecialValue() {
    return Math.random() < 0.5 ? null : undefined;
}

function genFunction() {
    return function() {
        return "Soy una funcion";
    }
}

function genObject() {
    var myObject = {};
    var n = Math.floor(Math.random() * 10);
    for (var i = 0; i < n; ++i) {
        myObject[genString()] = genRandomValue();
    }
    return myObject;
}

function genArray() {
    var arr = [];
    var n = Math.floor(Math.random() * 3);
    for (var i = 0; i < n; ++i) {
        arr.push(genRandomValue());
    }
    return arr;
}

function genRandomValue() {
    var methods = {
        'specialValue': genSpecialValue,
        'boolean': genBoolean,
        'number': genNumber,
        'string': genString,
        'function': genFunction,
        'object': genObject,
        'array': genArray
    };

    var arrayMethods = ["specialValue", "boolean", "number", "string", "function", "object", "array"];
    var rdm = Math.random();
    var indice = "";

    if (rdm < 0.8) {
        indice = Math.floor(Math.random() * 5);
    } else {
        indice = Math.floor(Math.random() * 7);
    }

    var string = arrayMethods[indice];
    return methods[string]();
}

function printObj(obj, l, comma) {
    document.writeln(level(l - 1),'{\n');
    var i = 0;
    var comma2 = "";
    var length = Object.keys(obj).length - 1;
    for (var prop in obj) {
        var last = (i === length);
        i++;
        document.write(level(l+1), prop, ":");
        comma2 = last ? "" : ",";
        printValue(obj[prop], l, comma2);
    }
    document.write(level(l-2), "}", comma, "\n");
}


function printFunction(func, l, comma) {
    return level(l) + func.toString();
}

function startPrinting() {
    document.write('<pre>');
    var o = genObject();
    printObj(o, 1, "");
    document.write('</pre>');

}

function printArray() {
    document.write('<pre>');
    var o = [1, 2, [9, 8, 7], 4];
    printArrayHelper(o, "", 1);
    document.write('</pre>');

}

//imprimirValor
function printValue(val, l, comma2) {
    if (val) {
        if (val.constructor == Object) {
            printObj(val, l + 1, comma2);
        } else {
            if (val.constructor == Array) {
                printArrayHelper(val, comma2, l + 1);
            } else {
                printNormal(val, comma2);
            }
        }
    } else {
        printNormal(val, comma2);

    }

}

function printNormal(val, comma) {
    document.writeln(val, comma,"\n");
}

function printArrayHelper(arr, comma, l) {
    document.writeln("[\n");
    var i = 0;
    var comma2 = "";
    var length = arr.length;
    length--;

    for (index in arr) {
        if (arr[index]) {
            var last = (i === length);
            i++;

            comma2 = last ? "" : ",";
            var cons = arr[index].constructor;
            if (cons == Object) {
                printObj(arr[index], l + 1, comma2);
            } else {
                if (cons == Array) {
                    document.write(level(l));
                    printArrayHelper(arr[index], comma2, l + 1);
                } else {
                    document.writeln(level(l), arr[index], comma2);
                }
            }
        }else{
          document.writeln(level(l), arr[index], comma2);

        }
    }
    document.writeln(level(l - 1), "]", comma);
}

function level(l) {
  return l>0 ? "  ".repeat(l) : "  ";

}
