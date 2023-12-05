// Función para abrir el modal específico según el número
function openModal(modalNumber) {
    const modal = document.getElementById(`myModal${modalNumber}`);
    modal.style.display = 'block';

    // Obtener el video y su duración correspondiente
    const video = document.getElementById(`videoPlayer${modalNumber}`);
    const durationDisplay = document.getElementById(`duration${modalNumber}`);

    video.onloadedmetadata = function() {
        let duration = video.duration;
        let minutes = Math.floor(duration / 60);
        let seconds = Math.floor(duration % 60);
        let formattedDuration = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        
        durationDisplay.textContent = formattedDuration;
    };
}

// Función para cerrar el modal específico según el número
function closeModal(modalNumber) {
    const modal = document.getElementById(`myModal${modalNumber}`);
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del área del video
window.onclick = function(event) {
    // Verificar si se hizo clic fuera de algún modal
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

// Ejecutar al cargar la página para obtener las duraciones de los videos
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    videos.forEach(function(video, index) {
        video.onloadedmetadata = function() {
            const durationDisplay = document.getElementById(`duration${index + 1}`);
            let duration = video.duration;
            let minutes = Math.floor(duration / 60);
            let seconds = Math.floor(duration % 60);
            let formattedDuration = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        
            durationDisplay.textContent = formattedDuration;
        };
    });
});
