function aFunction() {
    var result = arguments.length ? arguments.length : undefined;
    if (result != null) {
        result = 0;
        for (var i = 0; i < arguments.length; ++i) {
            result += arguments[i];
        }
        result /= arguments.length;
    }
    return result;
}

aFunction(1,2,3,4,5);
