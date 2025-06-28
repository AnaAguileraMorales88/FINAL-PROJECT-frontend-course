  // Menú hamburguesa
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Modo noche
  const toggleBtn = document.getElementById("toggle-mode");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });


  //BOTÓN CONTABILIZADOR
  let contador = 0;

function sumarLike() {
  contador++;
  document.getElementById("contar").innerText = contador;
}

function resetear() {
  contador = 0;
  document.getElementById("contar").innerText = contador;
}

//JUEGOS
 // Juego 1 - Adivina el número secreto
 let numeroSecreto = Math.floor(Math.random() * 100) + 1;
 let intentos = 0;
 let tiempoRestante = 60;
 let tiempo;

 function iniciarTemporizador() {
   tiempo = setInterval(() => {
     tiempoRestante--;
     document.getElementById("temporizador").innerText = "Tiempo restante: " + tiempoRestante + " segundos";
     if (tiempoRestante <= 0) {
       clearInterval(tiempo);
       document.getElementById("resultado").innerText = "Se acabó el tiempo!!!";
       document.getElementById("resetBoton").style.display = "inline-block";
     }
   }, 1000);
 }

 function adivinar() {
   const input = document.getElementById("adivinaInput");
   const intento = parseInt(input.value);
   intentos++;
   let mensaje = "";

   if (isNaN(intento)) {
     mensaje = "¡Primero introduce un número!";
   } else if (intento < numeroSecreto) {
     mensaje = "El número es mayor.";
   } else if (intento > numeroSecreto) {
     mensaje = "El número es menor.";
   } else {
     mensaje = `¡Felicidades! Adivinaste el número correcto en ${intentos} intentos.`;
     clearInterval(tiempo);
     document.getElementById("resetBoton").style.display = "inline-block";
   }

   document.getElementById("resultado").innerText = mensaje;
   input.value = "";
 }

 function reiniciar() {
   numeroSecreto = Math.floor(Math.random() * 100) + 1;
   intentos = 0;
   tiempoRestante = 60;
   document.getElementById("adivinaInput").value = "";
   document.getElementById("resultado").innerText = "";
   document.getElementById("temporizador").innerText = "Tiempo restante: " + tiempoRestante + " segundos";
   document.getElementById("resetBoton").style.display = "none";
   iniciarTemporizador();
 }

 window.onload = iniciarTemporizador;

 // Juego 2 - Botón escapista
 const btnEscapista = document.getElementById('escapista');
 btnEscapista.onmouseenter = () => {
   const x = Math.random() * (window.innerWidth - btnEscapista.offsetWidth);
   const y = Math.random() * (window.innerHeight - btnEscapista.offsetHeight);
   btnEscapista.style.left = `${x}px`;
   btnEscapista.style.top = `${y}px`;
 };


 





