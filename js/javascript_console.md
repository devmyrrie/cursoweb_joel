var hdd_gib = 500 * Math.pow(10, 9) / Math.pow(2, 30); // 465.661287 GiB
document.write("<br/>");
 InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable

hdd_gib + "";              // "465.66128730773926"
String(hdd_gib);           // "465.66128730773926"

hdd_gib.toString();        // "465.66128730773926"
hdd_gib.toString(2);       // "111010001.1010100101001010001"
hdd_gib.toString(16);      // "1d1.a94a2"

hdd_gib.toFixed(0);        // "466"
hdd_gib.toFixed(2);        // "465.66"

hdd_gib.toExponential(0);  // "5e+2"
hdd_gib.toExponential(3);  // "4.657e+2"

hdd_gib.toPrecision(4);    // "465.7"
hdd_gib.toPrecision(7);    // "465.6613"
