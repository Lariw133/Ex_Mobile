function mediaid(idade, ttidade, media){
    for(var i = 0; i < 7; i++){
      ttidade = ttidade + idade[i];
    }
    media = ttidade / 7;
    return media
  }
  
  function pesomaior(peso, total){
    for(var i=0; i<7; i++){
      if(peso[i] > 90){
        total++
      }
    }
    return total
  }
  
  var idade=[7], peso=[7], ttidade=0, media, total=0;
  
  for(var i =0; i < 7; i++){
    idade[i] = parseInt(prompt("Digite sua idade: "));
    peso[i] = parseFloat(prompt("Digite seu peso: "));
  }
  
  console.log(mediaid(idade, ttidade, media));
  console.log(pesomaior(peso, total));