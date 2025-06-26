document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('open-request-modal');
  const modal = document.getElementById('request-modal');
  const closeBtn = document.getElementById('close-request-modal');
  const form = document.getElementById('package-request-form');
  const packageGrid = document.querySelector('.package-grid');
  const modalContent = modal.querySelector('.modal-content');

  // Open modal
  openBtn.addEventListener('click', function () {
    // Get package grid position
    if (packageGrid && modalContent) {
      const gridRect = packageGrid.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      // Position modal absolutely over the grid
      modal.style.position = 'absolute';
      modal.style.left = (gridRect.left + scrollLeft) + 'px';
      modal.style.top = (gridRect.top + scrollTop) + 'px';
      modal.style.width = gridRect.width + 'px';
      modal.style.height = gridRect.height + 'px';
      modalContent.style.margin = '0 auto';
      modalContent.style.position = 'absolute';
      modalContent.style.left = '50%';
      modalContent.style.top = '50%';
      modalContent.style.transform = 'translate(-50%, -50%)';
    }
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      modal.querySelector('select, textarea').focus();
    }, 100);
  });

  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Reset modal to fixed for next open
    modal.style.position = '';
    modal.style.left = '';
    modal.style.top = '';
    modal.style.width = '';
    modal.style.height = '';
    if (modalContent) {
      modalContent.style.position = '';
      modalContent.style.left = '';
      modalContent.style.top = '';
      modalContent.style.transform = '';
      modalContent.style.margin = '';
    }
  }
  closeBtn.addEventListener('click', closeModal);

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });

  // Close on click outside
  modal.addEventListener('mousedown', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Handle form submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const pkg = form.package.value;
    const email = form.email.value;
    const msg = form.message.value;
    const subject = encodeURIComponent('Event Tattoo Anfrage: ' + pkg);
    const body = encodeURIComponent('E-Mail: ' + email + '\nPaket: ' + pkg + '\n\nNachricht:\n' + msg);
    window.location.href = `mailto:pirnatattoo@gmail.com?subject=${subject}&body=${body}`;
    closeModal();
  });
});

// Modal basic styles (for fallback if not in CSS)
(function addModalStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    .modal { display: none; z-index: 9999; background: rgba(0,0,0,0.8); justify-content: center; align-items: center; }
    .modal[aria-hidden="false"] { display: flex; }
    .modal-content { background: #181818; color: #fff; padding: 2rem; border-radius: 12px; max-width: 95vw; width: 400px; position: relative; box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
    .modal-close { position: absolute; top: 10px; right: 15px; background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer; }
    .modal-content h2 { margin-top: 0; font-size: 1.5rem; }
    .modal-content label { display: block; margin: 1.2em 0 0.3em; font-size: 1rem; }
    .modal-content select, .modal-content textarea { width: 100%; padding: 0.5em; border-radius: 5px; border: 1px solid #333; background: #222; color: #fff; margin-bottom: 1em; }
    .modal-content .cta-button { width: 100%; margin-top: 1em; }
  `;
  document.head.appendChild(style);
})(); 