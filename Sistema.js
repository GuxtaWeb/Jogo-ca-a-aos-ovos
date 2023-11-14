//Boas vindas
alert ("✨SEJA BEM VINDO AO JOGO CAÇA AOS OVOS!🐣✨");

var nome= prompt("Qual é o seu nome?");

alert("Olá " + nome + " prazer em te conhecer!\n\n" + "Você tem 12 tentativas pra adivinhar quantos ovos a galinha Clotilde colocou 🥚 😉👍 \n\n" + "Se acertar vai ganhar um prêmio surpresa 🎁");

alert("🐔 BOA SORTE!");


//Número secreto de ovos
var numeroSecreto = parseInt(Math.random() * 1000)+1;

//iniciar contador
var contador = 0;

//número de tentativas
var tentativas = 12;

//descubrir o número de ovos
while (chute != numeroSecreto) {

  var chute = prompt("Quantos ovos a Clotilde colocou? 🥚\n\n" + "Escolha entre 1 e 1000");
  
//incrementar contador
contador++;
  
  alert(chute + " ovos?");
  
  if (contador >= tentativas) {
      
      alert("Que pena "+ nome +" quem sabe na próxima\n\n" + "Mas não desista o prêmio surpresa espera por você! 🎁😁");
      alert("Até a próxima 👋😙");
      
      break; //Para o loop
      }
      
      else if (contador == 9){
          alert("Você tem apenas 3 tentativas restantes!")
      }
      else if (contador == 11){
          alert("Você tem apenas uma única tentativa restante 😱")
      }
 
  if (chute == numeroSecreto) {

    alert("Acertou!😁\n\n" + "Parabéns você ganhou um prêmio surpresa, que é... 🥁🥁");
    
    alert(numeroSecreto + " Omelettes 🍳\n\n" + nome +" até outro dia 👋😙")

  }

  else if (chute > numeroSecreto) {

    alert("Errou.. ela colocou menos\n\n" + "Nesse dia ela tava muito cansada 😪")

  }

  else if (chute < numeroSecreto) {

    alert("Errou.. ela colocou mais!\n\n" + "Eita galinha pra botar ovo ✨🐔✨")

  }

}