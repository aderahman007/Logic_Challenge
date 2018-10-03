function katabalik(kata){
  var balikKata = kata.split('').reverse().join('');
  return balikKata;
}

console.log(katabalik('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(katabalik('John Doe')); // eoD nhoJ
console.log(katabalik('I am a bookworm')); // mrowkoob a ma I
console.log(katabalik('Coding is my hobby')); // ybboh ym si gnidoC
console.log(katabalik('Super')); // repuS
