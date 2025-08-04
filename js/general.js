document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-inicio');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = 'inicio.html';
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-partida-rapida');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = '../paginas/partida_rapida.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-muerte-subita');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = '../paginas/muerte_subita.html';
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-siguiente');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = 'avatares.html';
    });
  }
});