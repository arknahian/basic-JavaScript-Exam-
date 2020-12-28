var a = "100";
console.log(typeof a);

var b = "200";
var b2 = +b;
console.log(typeof b2);

var c = "2324.87";
var c2 = parseFloat(c);
console.log(typeof c2);

var d = "8687.97";
var d2 = parseInt(d);
console.log(typeof d2);

var e = 1.235;
var e2 = 1.6444;
var total_e = e+e2;
var f = total_e.toExponential(); //new
var g = total_e.toLocaleString(); // new
console.log(total_e.toFixed(2));
console.log(f)
console.log(typeof g)