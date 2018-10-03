function xo(string){
  var x = 0;
  var o = 0;
  for (i = 0; i <= string.length; i++){
    if (string[i] === 'x')x++;
    else if (string[i] === 'o')o++;
  }
  return x === o;
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
