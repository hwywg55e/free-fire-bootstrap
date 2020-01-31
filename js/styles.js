function trocaDeCapa(hora, minuto, segundos) {
  const capa = document.querySelector('#capa')
  if (hora >= 6 && hora <= 11) {
    capa.setAttribute('src', 'imagens/capa/capa1.jpg')
  }
  else if (hora >= 12 && hora <= 17) {
    capa.setAttribute('src', 'imagens/capa/download.jpeg')
  }
  else if (hora >= 18 && hora <= 23) {
    capa.setAttribute('src', 'imagens/capa/capa3.jpg')
  }
  else {
    capa.setAttribute('src', 'imagens/capa/capa4.jpg')
  }
  let res = document.querySelector('#res')
  res.innerHTML = ` Não está na hora de jogar Free Fire ? ${hora}: ${minuto}: ${segundos}`
}
setInterval(() => {
  let day = new Date()
  let hr = day.getHours()
  let min = day.getMinutes()
  let sgds = day.getSeconds()
  trocaDeCapa(hr, min, sgds)
}, 1000)

trocaDeCapa()
