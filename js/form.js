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
    alert("03 CENÁRIO ANIMADOR");
    alert("FOCO EM DIMINUIR O NÚMERO DE B´S (APOSTILA OU VIDEOAULA)");
  }
  else if(a=="A+" && b=="B-" && c=="C+/-"){
    alert("04 MELHOR");
    alert("FOCO EM IGUALAR C´S COM B´S (APOSTILA OU VIDEOAULA) E SÓ DEPOIS DISSO FOCAR NOS B´S");
  }
  else if(a=="A+" && b=="B+/-" && c=="C+/-"){
    alert("05 MELHORANDO");
    alert("FOCO EM COLOCAR OS C´S NOS B´S (COMEÇAR A ENTENDER O QUE NÃO SEI: ESTUDE POR APOSTILA) – OU SEJA, DIMINUIR C´S AUMENTA OS B´S PARA DEPOIS AUMENTAR OS A´S");
  }
  else if(a=="A+" && b=="B+" && c=="C+/-"){
    alert("06 BOM");
    alert("PEGUE OS B´S E ESTUDE E FAÇA EXERCÍCIOS (ENTENDENDO-OS, FARÁ SEUS C´S DIMINUIREM)");
  }
  else if(a=="A+" && b=="B-" && c=="C+"){
    alert("07 PERTO DE BOM");
    alert("FOCAR EM DIMINUIR C´S (VEJA VÍDEOAULAS DOS ASSUNTOS) – PASSE A CONHECER O QUE NÃO SABE NADA");
  }
  else if(a=="A+" && b=="B+/-" && c=="C+"){
    alert("08 MAIS ACIMA DA MÉDIA");
    alert("ESTUDAR B´S E C´S (VIDEOAULA E EXERCÍCIOS DE FORMA REPETITIVA)FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDO");
  }
  else if(a=="A+" && b=="B+" && c=="C+"){
    alert("09 ACIMA DA MÉDIA");
    alert("ESTUDAR B´S E C´S (VIDEOAULA E EXERCÍCIOS DE FORMA MUITO REPETITIVA)FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A+/-" && b=="B+" && c=="C-"){
    alert("10 NA MÉDIA");
    alert("FOCO EM AUMENTAR O NÚMERO DE A´S (APOSTILA + EXERCÍCIOS)OU SEJA, VOCÊ PRECISA APRENDER MAIS (MAIS FOCO E REPETIÇÃO)");
  }
  else if(a=="A+/-" && b=="B+/-" && c=="C-"){
    alert("11 UM POUCO ABAIXO DA MÉDIA");
    alert("FOCO EM AUMENTAR A´S E B´S (APOSTILA + EXERCÍCIOS)OU SEJA, VOCÊ PRECISA APRENDER MAIS (MAIS FOCO E REPETIÇÃO)");
  }
  else if(a=="A+/-" && b=="B+" && c=="C-"){
    alert("12 MEDÍOCRE");
    alert("FOCAR EM DIMINUIR B´S (ISSO FAZ SEUS A´S AUMENTAREM: APOSTILA + EXERCÍCIOS)FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A+/-" && b=="B-" && c=="C+/-"){
    alert("13 REGULAR");
    alert("ESTUDAR OS C´S E INICIAR O PROCESSO DE ENTENDÊ-LOS (APOSTILA + EXERCÍCIOS)FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A+/-" && b=="B+/-" && c=="C+/-"){
    alert("14 ABAIXO DE REGULAR");
    alert("ESTUDAR OS B´S C´S E INICIAR O PROCESSO DE ENTENDÊ-LOS (VIDEOAULA + EXERCÍCIOS) FORMA REPETITIVA: DE 1 SEMANA A 15 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A+/-" && b=="B+" && c=="C+/-"){
    alert("15 ZONA DE INSEGURANÇA");
    alert("DIMINUIR C´S E TRANSFORMAR B´S EM A´S (VIDEOAULA + EXERCÍCIOS) FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A+/-" && b=="B-" && c=="C+"){
    alert("16 INSEGURANÇA");
    alert("FOCO EM DIMINUIR C´S (VIDEOAULA + EXERCÍCIOS)FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A+/-" && b=="B+/-" && c=="C+"){
    alert("17 NO LIMITE");
    alert("FOCO EM DIMINUIR C´S E ESTUDAR BEM OS B´S (VIDEOAULA + EXERCÍCIOS) FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A+/-" && b=="B+" && c=="C+"){
    alert("18 LIMITE PERIGOSO");
    alert("OCO EM DIMINUIR B´S E C´S (VIDEOAULA + EXERCÍCIOS)FORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A-" && b=="B-" && c=="C-"){
    alert("19 ZONA DE ALERTA");
    alert("AQUI É PRECISO REESTUDAR TODOS OS ASSUNTOS ATRAVÉS OU DE VIDEOAULA OU APOSTILAFORMA MUITO REPETITIVA: DE 1 SEMANA A 10 DIAS REVENDO CONTEÚDOS");
  }
  else if(a=="A-" && b=="B+/-" && c=="C-"){
    alert("20 RUIM");
    alert("É PRECISO PROCURAR UM CURSINHO PRÉ-VESTIBULAR DE NÍVEL MÉDIO(ALÉM DE ESTUDAR EM CASA)");
  }
  else if(a=="A-" && b=="B+" && c=="C-"){
    alert("21 BEM RUIM");
    alert("É PRECISO PROCURAR UM CURSINHO PRÉ-VESTIBULAR DE NÍVEL FORTE(ALÉM DE ESTUDAR EM CASA)");
  }
  else if(a=="A-" && b=="B-" && c=="C+/-"){
    alert("22 MUITO RUIM");
    alert("É PRECISO PROCURAR UM CURSINHO DE NÍVEL FORTE E UM GRANDE PROGRAMA DE ESTUDOS COMPLEMENTARES(ALÉM DE ESTUDAR EM CASA)");
  }
  else if(a=="A-" && b=="B+/-" && c=="C+/-"){
    alert("23 PÉSSIMO");
    alert("PROCURE UM CURSINHO PREPARATÓRIO PARA O ENSINO MÉDIO E ADOTE UM ROTINA INTENSA DE ESTUDOS(ALÉM DE ESTUDAR EM CASA)");
  }
  else if(a=="A-" && b=="B+" && c=="C+/-"){
    alert("24 RESULTADO HORRÍVEL");
    alert("CURSINHO PREPARATÓRIO PARA O ENSIO MÉDIO, ROTINA INTENSA DE ESTUDOS E MUITO EXERCÍCIO BÁSICO(ALÉM DE ESTUDAR EM CASA)");
  }
  else if(a=="A-" && b=="B-" && c=="C+"){
    alert("25 PRÓXIMO DO TRÁGICO");
    alert("É PRECISO RECOMEÇAR O ENSINO MÉDIO: REVEJA TODOS OS ASSUNTOS ATRAVÉS DE VIDEOAULAS COM ANOTAÇÕES E EXERCÍCIOS(ALÉM DE ESTUDAR EM CASA)");
  }
  else if(a=="A-" && b=="B+/-" && c=="C+"){
    alert("26 TRAGÉDIA");
    alert("É PRECISO REFORÇO ESCOLAR MÉDIO COM REVISÃO DO FUNDAMENTAL II E DO ENSINO MÉDIO(ALÉM DE ESTUDAR EM CASA)");
  }
  else if(a=="A-" && b=="B+" && c=="C+"){
    alert("27 ABAIXO DA TRAGÉDIA");
    alert("A RECOMENDAÇÃO É VOLTAR AO FUNDAMENTAL II E CORRIGIR LACUNAS DE APRENDIZADO BÁSICAS (REFORÇO ESCOLAR FORTE)(ALÉM DE ESTUDAR EM CASA)");
  }






}
