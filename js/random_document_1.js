function Document(){
    this.header = new Header();
    this.body_ = new Body();
}


Document.prototype.print = function () {
      this.body_.print();
};
Document.prototype.printHeader = function () {
      this.header.print();
};

function Header(){
   this.style_ = new Style();
}

Header.prototype.print = function () {
    this.style_.print();
};

function Style(){
  this.styles = ["<style> * { color : blue} </style>",
                "<style> * { color : pink} </style>",
                "<style> * { font-size : 1.3em} </style>",
                "<style> * { weight : 1em} </style>"];
                
  this.style_ = this.styles[Math.floor(Math.random()*4)];
}
Style.prototype.print = function () {
   document.write(this.style_);
};

function Body(){
  this.children = [];
  var rdn = Math.floor(Math.random()*10)+1;
  for(var i = 0 ; i < rdn; ++i ){
      var cant = Math.floor (Math.random()*3);
      this.children[i] =  new this.possibleObjs[cant]();
  }
}
Body.prototype.print= function(){
  for (var i in this.children){
      this.children[i].print();
  }
};
Body.prototype.possibleObjs = [Paragraph,Heading,List] ;


function Paragraph (){
  this.paragraph= "<p>This is a generic paragraph</p>";
}

Paragraph.prototype.print =  function () {
  document.write(this.paragraph);
}


function Heading(){
    this.heading = ["<h1> This is heading 1 </h1>","<h2>This is heading 2 </h2>",
      "<h3>This is heading 3 </h3>","<h4>This is heading 4 </h4>"];
}


Heading.prototype.print = function () {
      document.write(this.heading[Math.floor(Math.random()*4)]);
};

function List(){
  var rdn = Math.floor (Math.random()*3)+1;
  this.listItems = [];

  for(var i = 0 ; i < rdn; ++i){
      this.listItems[i]= new ListItem();
  }

}

List.prototype.print = function (){
  document.write("<ol>");

   for(var i in this.listItems){
      this.listItems[i].print();
   }
   document.write("</ol>");


};

function ListItem(){
  var cant = Math.floor (Math.random()*3);
  this.item = 0;
  this.item = new this.possibleObjs[cant]();
}

ListItem.prototype.possibleObjs = [Text_,Paragraph,List] ;

ListItem.prototype.print = function () {
  document.write("<li>");
  this.item.print();
  document.write("</li>");

};
function Text_(){
    this.text_ ="This is a simple text_";
}
Text_.prototype.print = function () {
  document.write(this.text_);
};
