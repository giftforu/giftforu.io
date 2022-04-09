function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 80* i)

  });
}
const titulo = document.querySelector('.msg');
typeWrite(titulo);


const final = document.getElementById('final')

setTimeout(() => final.style.display = "block", 26000);
