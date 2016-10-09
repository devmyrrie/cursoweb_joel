~~~
var a = 0/0 == NaN;	true -- false.
var b = a == false;	true -- false
var c = Number(a); NaN -- NaN
var d = Number(b); NaN -- NaN		
var e = String(a); "NaN" -- "NaN"		
var f = String(b);	"NaN" -- "NaN"			
var g = Boolean('true'); true -- true		
var h = Boolean(' True ');		true -- true
var i = Boolean('false');		false -- true
var j = Boolean('0');		true --true
var k = Boolean(0);		false -- false
var l = Boolean(-1);	true -- false
var m = Boolean(null);		false -- false
var n = Boolean('');		false -- false
var o = Boolean(' ');	 true -- true
~~~
