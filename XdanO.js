function xo(str){
  var x = ''
  var o = ''
  for (var i = 0; i < str.length; i++){
    if (str[i] === 'x'){
      x++
    }else{
      o++
    }
  }
  if (x === o){
    return true
  }else{
    return false
  }
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
