function calcular(bn, vh, ht)
{

  var select = document.getElementById('inputGroupSelect01');
	var a = select.options[select.selectedIndex].text;
 
  var select = document.getElementById('inputGroupSelect02');
	var b = select.options[select.selectedIndex].text;

  var select = document.getElementById('inputGroupSelect03');
	var c = select.options[select.selectedIndex].text;

 
  if(a == "A+" && b=="B-" && c=="C-"){
    alert("01 O MELHOR CENÁRIO POSSÍVEL:");
    alert("TRABALHO DE MANUTENÇÃO E REVISÃO ESPAÇADA DOS CONTEÚDOS REVISÃO ESPAÇADA: ENTRE 1 MÊS E 15 DIAS DE REVISÃO DO CONTEÚDO");
  }
  else
   if(a=="A+" && b=="B+/-" && c=="C-"){
    alert("02 ABAIXO DO MELHOR CENÁRIO:");
    alert("MANUTENÇÃO DOS A´S E FOCO EM ENTENDER OS B´S (APOSTILA OU VIDEOAULA)");
  }
  else if(a=="A+" && b=="B+" && c=="C-"){
    alert("3.certo");
  }
  else if(a=="A+" && b=="B-" && c=="C+/-"){
    alert("4.certo");
  }
  else if(a=="A+" && b=="B+/-" && c=="C+/-"){
    alert("5.certo");
  }
  else if(a=="A+" && b=="B+" && c=="C+/-"){
    alert("6.certo");
  }
  else if(a=="A+" && b=="B-" && c=="C+"){
    alert("7.certo");
  }
  else if(a=="A+" && b=="B+/-" && c=="C+"){
    alert("8.certo");
  }
  else if(a=="A+" && b=="B+" && c=="C+"){
    alert("9.certo");
  }
  else if(a=="A+/-" && b=="B+" && c=="C-"){
    alert("10.certo");
  }
  else if(a=="A+/-" && b=="B+/-" && c=="C-"){
    alert("11.certo");
  }
  else if(a=="A+/-" && b=="B+" && c=="C-"){
    alert("12.certo");
  }
  else if(a=="A+/-" && b=="B-" && c=="C+/-"){
    alert("13.certo");
  }
  else if(a=="A+/-" && b=="B+/-" && c=="C+/-"){
    alert("14.certo");
  }
  else if(a=="A+/-" && b=="B+" && c=="C+/-"){
    alert("15.certo");
  }
  else if(a=="A+/-" && b=="B-" && c=="C+"){
    alert("16.certo");
  }
  else if(a=="A+/-" && b=="B+/-" && c=="C+"){
    alert("17.certo");
  }
  else if(a=="A+/-" && b=="B+" && c=="C+"){
    alert("18.certo");
  }
  else if(a=="A-" && b=="B-" && c=="C-"){
    alert("19.certo");
  }
  else if(a=="A-" && b=="B+/-" && c=="C-"){
    alert("20.certo");
  }
  else if(a=="A-" && b=="B+" && c=="C-"){
    alert("21.certo");
  }
  else if(a=="A-" && b=="B-" && c=="C+/-"){
    alert("22.certo");
  }
  else if(a=="A-" && b=="B+/-" && c=="C+/-"){
    alert("23.certo");
  }
  else if(a=="A-" && b=="B+" && c=="C+/-"){
    alert("24.certo");
  }
  else if(a=="A-" && b=="B-" && c=="C+"){
    alert("25.certo");
  }
  else if(a=="A-" && b=="B+/-" && c=="C+"){
    alert("26.certo");
  }
  else if(a=="A-" && b=="B+" && c=="C+"){
    alert("27.certo");
  }






}
