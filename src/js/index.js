let idDoConselho = document.querySelector(".conselho-id");
let descricaoConselho = document.querySelector(".conselho-descricao");

async function geradorConselhos() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    return await resposta.json();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("API aplicada com sucesso.");
  }
}

async function atualizarConselhos() {
    const novoConselho = await geradorConselhos();
    const novoIdConselho = novoConselho.slip.id
    const novaDescricaoConselho = novoConselho.slip.advice

    idDoConselho.innerText = `ADVICE #${novoIdConselho}`
    descricaoConselho.innerText = `"${novaDescricaoConselho}"`
}
atualizarConselhos()

document.querySelector(".conselho-atualizar").addEventListener('click',atualizarConselhos);