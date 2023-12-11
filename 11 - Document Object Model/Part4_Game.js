let restart = document.querySelector('#b')
let squares = document.querySelectorAll("td")


restart.addEventListener('click',() => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = ''
  }
})



function changeMarker(){
  if (this.textContent === '') { this.textContent = 'X' }
  else if (this.textContent === 'X') { this.textContent = 'O' }
  else { this.textContent = '' }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}
