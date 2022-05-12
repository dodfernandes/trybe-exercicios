const a = 8;
const b = 15;
const c = 10;

if (a > b && a > c) {
   console.log(a);
}  else if (b > a && b > c) {
    console.log(b);
}   else if (c > a && c > b) {
    console.log(c);
}   else {
    console.log("existem números iguais!");
}