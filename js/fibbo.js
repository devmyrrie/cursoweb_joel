alert("asdf");

var memo = {
    "0": 0,
    "1": 1
};
var array = [];
var calcularFibonnacci = function(num) {
    if (num > 1 && memo[num] == null) {
        if (memo.hasOwnProperty(num - 1) && memo.hasOwnProperty(num - 2)) {
            memo[num] = memo[num - 1] + memo[num - 2];
        } else {
            memo[num] = calcularFibonnacci(num - 1) + calcularFibonnacci(num - 2);
        }
        return memo[num];

    } else {
        return memo[num];
    }
};

var fib = function(n) {
    calcularFibonnacci(n);
    array = [];
    for (var property in memo) {
        array.push(memo[property]);
    }
    return memo[n];
};

var crearArreglo = function() {
    var str = "<ol>";
    for (var i = 0; i < 40; ++i) {
        str += "<li>" + fib(i) + "</li>";
    }
    str += "</ol>";
    document.write(str);

};
crearArreglo();
