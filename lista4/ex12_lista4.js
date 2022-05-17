function totalvalor(total, valor){
    total = valor[0] * valor[1] * valor[2];
  }
  
  var valor = [3], i, total, valid; 
  
  while (valid == "S") {
    for (i = 0; i < 3; i++) {
      if(i == 0){ 
        valor[0] = parseFloat(prompt("Digite um valor para A: "));
      } 
      else if(i == 1){ 
        valor[1] = parseFloat(prompt("Digite um valor para B: ")); 
      } 
      else{ 
        valor[2] = parseFloat(prompt("Digite um valor para C: ")); 
      } 
    } 
  
  console.log("(A B) * C = " + totalvalor(total, valor));
  valid = parseFloat(prompt("Deseja fazer novamente? Digite 'S' para sim e 'N' para não")); 
  }