var findComments = function(el) {
    var arr = [];
    for(var i = 0; i < el.childNodes.length; i++) {
        var node = el.childNodes[i];
        if(node.nodeType === 8) {
            arr.push(node);
        } else {
            arr.push.apply(arr, findComments(node));
        }
    }
    return arr;
};

var commentNodes = findComments(document);

var x = document.createElement("PRE");
var txt= "";

for(var i = 0 ; i < commentNodes.length; ++i){
    txt +=commentNodes[i].nodeValue;
}

txt += " ";
var elementTxt = document.createTextNode(txt);
x.appendChild(elementTxt);
 document.body.appendChild(x);
