let campoIdade;
let campoFiccaoCientifica;
let campoFantasia;

function setup() {
  createCanvas(900, 600);
  createElement("h2", "Recomendador de Livros");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFiccaoCientifica = createCheckbox("Gosta de ficcao cientifica?");
  campoFantasia = createCheckbox("Gosta de fantasia?");
}

function draw() {
  background("#9C27B0");
  let idade = campoIdade.value();
  let gostaDeFiccaoCientifica = campoFiccaoCientifica.checked();
  let gostaDeFantasia = campoFantasia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFiccaoCientifica, gostaDeFantasia);

  fill(color(78, 0, 116));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFiccaoCientifica, gostaDeFantaia) {
  if (idade >= 14) {
    if (idade >= 18) {
      return "desenfreados ou Devils night";
    } else {
      if (idade >= 14) {
        if(gostaDeFiccaoCientifica || gostaDeFantasia) {
          return "o verao que mudou minha vida";          
        } else{
         return "diario de um vampiro";
        }
      } else {
        if (gostaDeFantaia) {
          return "crepusculo";
        } else {
          return "anne";
        }
      }
    }
  } else {
    if (gostaDeFiccaoCientifica) {
      return "manual de assasinato para boas garotas";
    } else {
      return "Harry potter";
    }
  }
}