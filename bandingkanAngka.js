function bandingangka(angka1, angka2){
if (angka1 === angka2){
return -1;
}
return angka1 < angka2
}

  
console.log(bandingangka(5, 8)); // true
console.log(bandingangka(5, 3)); // false
console.log(bandingangka(4, 4)); // -1
console.log(bandingangka(3, 3)); // -1
console.log(bandingangka(17, 2)); // false
