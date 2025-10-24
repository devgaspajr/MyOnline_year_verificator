function verificar() {
  let date = new Date();
  let restitle = document.getElementById("restitle");
  let anoatual = date.getFullYear();
  let ano = document.getElementById("anoAtual");
  let genero = document.querySelectorAll('input[name="sexo"]');
  let verify = document.getElementById("verificar");
  let aviso = document.getElementById("alerta");
  let imagem = document.getElementById("imagem");

  if (ano.value.length == 0) {
    aviso.innerHTML = "Preencha as informações nescessarias";
  } else if (ano.value > anoatual || ano.value < 1850) {
    aviso.innerHTML = "Coloque uma data valida";
  } else {
    let idade = anoatual - Number(ano.value);

    switch (true) {
      case idade >= 0 && idade <= 40 && genero[0].checked:
        aviso.innerHTML = `Você tem ${idade} anos`;
        imagem.src = "../imagens/homem20.webp";
        imagem.alt = "Homem de 20 anos";
        break;

      case idade > 40 && idade <= 60 && genero[0].checked:
        aviso.innerHTML = `Você tem ${idade} anos`;
        imagem.src = "../imagens/homem40.webp";
        imagem.alt = "Homem de 40 anos";
        break;

      case idade > 60 && genero[0].checked:
        aviso.innerHTML = `Você tem ${idade} anos`;
        imagem.src = "../imagens/homem80.webp";
        imagem.alt = "Homem de 80 anos";
        break;

      case idade >= 0 && idade <= 40 && genero[1].checked:
        aviso.innerHTML = `Você tem ${idade} anos`;
        imagem.src = "../imagens/mulher20.webp";
        imagem.alt = "Mulher de 20 anos";
        break;

      case idade > 40 && idade <= 60 && genero[1].checked:
        aviso.innerHTML = `Você tem ${idade} anos`;
        imagem.src = "../imagens/mulher40.webp";
        imagem.alt = "Mulher de 40 anos";
        break;

      case idade > 60 && genero[1].checked:
        aviso.innerHTML = `Você tem ${idade} anos`;
        imagem.src = "../imagens/mulher80.webp";
        imagem.alt = "Mulher de 80 anos";
        break;
    }
  }
}
