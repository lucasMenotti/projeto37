class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
  this.title.hide();
  this.input1.hide();
  this.button.hide();
  this.input2.hide();

    // escreva o código aqui para mudar a cor de fundo
    background("LightBlue");

    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    var titulo = createElement('h2');
    titulo.html("Car Racing Game");
    titulo.position(100, 0); 

    // chame getContestantInfo () aqui
    getContestantInfo();

    // escreva a condição para verificar se contestantInfor não é indefinido
    if(allcontestants !== undefined){
      fill("Blue");
      textSize(20);
      TextTrack("jogador que respondeu correta é destacado na cor verde", 130,230);
  
  
      }
      
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      fill("Green")
      else
      fill("red");
    }
    
  }

}
