
var radio = document.querySelector('.manual-btn')
var contador = 1

document.getElementById('radio1').checked = true


function proximaImg(){
      contador++

      if(contador > 3){
            contador = 1
      }

      document.getElementById('radio' + contador).checked = true

}


setInterval(() => {
      proximaImg()
}, 5000)


function openCard(modalId) {
      document.getElementById(modalId).style.display = "block";
  }
  
  function closeCard(modalId) {
      document.getElementById(modalId).style.display = "none";
  }
  
  

