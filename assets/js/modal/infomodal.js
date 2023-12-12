document.querySelector("#abrir_info").addEventListener("click", function() {
    document.querySelector(".infodal").style.display = "block"; // Mostrar el infodal al hacer clic en el botón
  });
  
  document.querySelector(".cerrar").addEventListener("click", function() {
    document.querySelector(".infodal").style.display = "none"; // Ocultar el infodal al hacer clic en el botón de cerrar
  });