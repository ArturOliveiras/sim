function verificarTime() {
  
    var continuarPerguntando = true;
  
    while (continuarPerguntando) {
      
      var respostaTime = prompt("Qual o melhor jogo sobre um repórter que acaba entrando em um hospital psiquiátrico para fazer uma reportagem?");
  
      
      if (respostaTime.toLowerCase() === "Outlast") {
        alert("Parabéns! Você acertou!");
        continuarPerguntando = false; // Sai do loop após a resposta correta
      } else {
        alert("Muito burro, errou.");
      }
    }
  }