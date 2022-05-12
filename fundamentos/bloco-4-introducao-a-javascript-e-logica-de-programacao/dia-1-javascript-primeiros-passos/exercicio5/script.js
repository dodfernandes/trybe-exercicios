const a1 = 90;
const a2 = 45;
const a3 = 45;

if (a1 > 0 && a2 > 0 && a3 > 0 && a1 + a2 + a3 === 180) {
   console.log(true);
} else if (a1 > 0 && a2 > 0 && a3 > 0 && a1 + a2 + a3 != 180) {
    console.log(false);
} else {
    console.log("Erro!");
}