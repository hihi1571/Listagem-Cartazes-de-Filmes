function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".jpeg") || filmeFavorito.endsWith(".png")) {
  listarFilmesNaTela(filmeFavorito)    
} else {
  alert("Endereço inválido. Inserir somente o endereço da imagem.")
  }
campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}