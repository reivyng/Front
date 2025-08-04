// Selección de avatar
  const avatarItems = document.querySelectorAll('.avatar-item');
  const avatarPreview = document.getElementById('avatar-preview');

  avatarItems.forEach(item => {
    item.addEventListener('click', function() {
      // Quitar selección previa
      avatarItems.forEach(i => i.classList.remove('selected'));
      // Seleccionar actual
      this.classList.add('selected');
      // Cambiar preview
      const img = this.querySelector('img');
      avatarPreview.src = img.src;
      avatarPreview.alt = img.alt;
    });
  });