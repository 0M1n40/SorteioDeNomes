const listaAmigos = [];
const listaAmigosElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido.');
    return;
  }

  listaAmigos.push(nome);
  input.value = '';
  atualizarLista();
  resultadoElement.innerHTML = ''; 
}

function atualizarLista() {
  listaAmigosElement.innerHTML = '';
  listaAmigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigosElement.appendChild(li);
  });
}

function sortearAmigo() {
  resultadoElement.innerHTML = '';

  if (listaAmigos.length === 0) {
    alert('Adicione pelo menos um nome para sortear.');
    return;
  }


  const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  const nomeSorteado = listaAmigos[indiceSorteado];

  const li = document.createElement('li');
  li.textContent = `O amigo sorteado foi: ${nomeSorteado}`;
  resultadoElement.appendChild(li);
}
