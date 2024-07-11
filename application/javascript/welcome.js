document.addEventListener('DOMContentLoaded', (event) => {
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('welcomeButton');

    if (modalOverlay && closeModal) {
      // Close modal functionality
    closeModal.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

      // Prevent clicking outside the modal to close it
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          e.stopPropagation(); // Prevent the event from propagating to the overlay
        }
    });

      // Optionally, you can also prevent the user from closing the modal with the ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            e.stopPropagation();
        }
    });
    } else {
        console.error('Modal overlay or close button not found in the DOM.');
    }
});