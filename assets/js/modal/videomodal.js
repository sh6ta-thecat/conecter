const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.querySelector('.close');
    
    const contents = document.querySelectorAll('.imgcontent, .videocontent');
    
    contents.forEach(content => {
      content.addEventListener('click', () => {
        const dataType = content.querySelector('img, video').getAttribute('data-type');
        const dataSrc = content.querySelector('img, video').getAttribute('data-src');
        const altText = content.querySelector('img, video').getAttribute('alt');
    
        if (dataType === 'image') {
          modalImage.style.display = 'block';
          modalImage.src = dataSrc;
          modalVideo.style.display = 'none';
        } else {
          modalVideo.style.display = 'block';
          modalVideo.src = dataSrc;
          modalImage.style.display = 'none';
        }
    
        modalInfo.textContent = `Archivo: ${altText}`;
        modal.style.display = 'block';
      });
    });
    
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });