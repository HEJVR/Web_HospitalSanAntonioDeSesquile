// Obtener la terminación de la URL
const path = window.location.pathname;
const nombreURL = path.substring(path.lastIndexOf("/") + 1);

// Buscar en la "base de datos"
const persona = personas.find(p => p.nombreCompleto === nombreURL);

// Mostrar datos si se encuentra
if (persona) {
  document.getElementById("nombre").textContent = persona.nombre;
  document.getElementById("cargo").textContent = persona.cargo;
  document.getElementById("documento").textContent = persona.documento;
  document.getElementById("sangre").textContent = persona.tipoSangre;
  document.getElementById("foto").src = persona.foto;
} else {
  document.getElementById("nombre").textContent = "Perfil no encontrado";
  document.querySelector("ul").style.display = "none";
  document.getElementById("foto").style.display = "none";
}
