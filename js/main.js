let clear = document.getElementById('clear-text');
clear.addEventListener('click', function(){
    document.getElementById('input').value ="";
})


function on() {
    document.getElementById("overlay-container").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay-container").style.display = "none";
  }