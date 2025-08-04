// Variables globales
let loadingProgress = 0
let loadingComplete = false

// Función principal que inicia la secuencia de carga
function startLoadingSequence() {
  // Simular progreso de carga durante 6 segundos
  const loadingDuration = 6000; // 6 segundos en milisegundos
  const updateInterval = 50; // Actualizar cada 50ms
  const incremento = 100 / (loadingDuration / updateInterval);
  
  const progressInterval = setInterval(() => {
    loadingProgress += incremento;

    if (loadingProgress >= 100) {
      loadingProgress = 100;
      clearInterval(progressInterval);
      completeLoading();
    }
  }, updateInterval);
}

// Función que se ejecuta cuando la carga está completa
function completeLoading() {
  loadingComplete = true

  // Pequeña pausa para mostrar el 100% completado
  setTimeout(() => {
    // Ocultar pantalla de carga
    const loadingContainer = document.getElementById("loadingContainer")
    loadingContainer.classList.add("fade-out")

    // Redirigir a la página de inicio después de la transición
    setTimeout(() => {
      window.location.href = "./paginas/inicio.html"
    }, 800)
  }, 500)
}

// Mostrar página de bienvenida
function showWelcomePage() {
  const welcomePage = document.getElementById("welcomePage")
  welcomePage.classList.add("show")
}

// Ir a la página principal
function goToMainPage() {
  // Ir directamente a la página de inicio del juego
  window.location.href = "./paginas/inicio.html"
}

// Volver al inicio
function goBack() {
  const mainPage = document.getElementById("mainPage")
  const loadingContainer = document.getElementById("loadingContainer")
  const welcomePage = document.getElementById("welcomePage")

  // Ocultar página principal
  mainPage.classList.remove("show")

  setTimeout(() => {
    // Resetear todo
    mainPage.style.display = "none"
    welcomePage.style.display = "flex"
    welcomePage.classList.remove("show")
    loadingContainer.style.display = "flex"
    loadingContainer.classList.remove("fade-out")

    // Reiniciar variables
    loadingProgress = 0
    loadingComplete = false

    // Reiniciar secuencia
    startLoadingSequence()
  }, 800)
}

// Iniciar cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
  startLoadingSequence()
})

// Efectos adicionales para mejorar la experiencia
document.addEventListener("mousemove", (e) => {
  if (!loadingComplete) {
    const wheel = document.querySelector(".wheel-3d")
    const rect = wheel.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / 10
    const deltaY = (e.clientY - centerY) / 10

    wheel.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`
  }
})
