function mediaid (ttidade, idade, media, ttpessoas){
    ttpessoas = ttpessoas + 1;
    ttidade = ttidade + idade;
    media = ttidade / ttpessoas;
    return media
  }
  
  function pesoaltura (ttpessoaspa){
    if (peso > 90 || altura < 150){
      ttpessoaspa = ttpessoaspa + 1;
    }
    return ttpessoaspa
  }
  
  function porcentagem (idade, altura, ttpessoasporc, porc){
    if (idade >= 10 && idade <= 30 && altura > 190){
      ttpessoasporc = ttpessoasporc + 1;
      porc = ttpessoasporc/10;
    }
    return porc
  }
  
  var idade = [10], altura = [10], peso = [10];
  var ttidade = 0, ttpessoas = 0, ttpessoaspa = 0, ttpessoasporc = 0;
  var media, porc;
  
  for(var i=0; i<10; i++){
    idade[i] = parseInt(prompt("Digite a idade " + (i + 1) +": "));
    peso[i] = parseInt(prompt("Digite o peso " + (i + 1) +": "));
    altura[i] = parseInt(prompt("Digite a altura " + (i + 1) + " em cenímetros: "));
  }
    console.log("A média de idade das 10 pessoas é: " + mediaid(ttidade, idade, media, ttpessoas));
    console.log("A quantidade de pessoas com peso superior a 90 quilos e altura inferior a 1.50 é de: " + pesoaltura(ttpessoaspa) + " pessoas.");
  console.log("A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 190 é de: " + porcentagem(idade, altura, ttpessoasporc, porc) + " pessoas.");