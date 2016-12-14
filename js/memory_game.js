//Array of objects, in which we contain  the sum expression and  result.


var arrTerms = [];
var divsValue = [];
var clicks = 0;
var  pairClicked = [];
var hashAsso = {};
createDivs();
createTerms();
assign();


function createDivs(){
  var container = document.getElementById('container');
  for(var cont = 0; cont < 12 ; ++cont){
    var div = document.createElement("DIV");
    div.setAttribute("id",cont);
    div.setAttribute("class","item");
    div.setAttribute("onClick","flipOver.call(this)");
    container.appendChild(div);
  }

}
function createTerms(){

  for(var i = 0 ; i < 6 ; ++i){
    var terms = {};
    var fTerm =  Math.floor(Math.random(25)*100);
    var sTerm =  Math.floor(Math.random(25)*100);
    var result = fTerm + sTerm;
    terms.exp = fTerm + " + " + sTerm;
    terms.result = result;
    this.arrTerms.push(terms);
  }

}

function assign(){
    var divsArray = document.getElementsByClassName('item');
    for(var i=0 ; i < 12 ; ++i){
        if(i > 5){
            this.divsValue.push(arrTerms[i - 6].exp);
            this.hashAsso[i] = i - 6;
            var value = i - 6 ;
            this.hashAsso[value] = i;
        }else{
            this.divsValue.push(arrTerms[i].result);
        }
    }
}

function flipOver(){
  var index = this.id;
  var txtH1 = document.createElement("H1");
  var txtNode = document.createTextNode(window.divsValue[index]);
  txtH1.appendChild(txtNode);
  txtH1.setAttribute("class", "title");
  this.appendChild(txtH1);
  window.pairClicked.push(this);
window.clicks++;
  if(window.clicks > 1){
    //check for equality
    var first =   window.pairClicked[0].id;
    var second =   window.pairClicked[1].id;

    if(window.hashAsso[first] != second){ // HIDE
      var div1 =window.pairClicked[0];
      var div2 = window.pairClicked[1];
      window.setTimeout(function(){window.hide(div1)}, 1000);
      window.setTimeout(function(){window.hide(div2)}, 1000);
   }
    window.clicks =0;
    window.pairClicked = [];

  }



}



function hide(div){
  div.removeChild(div.childNodes[0]);
}
