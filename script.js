// Espera a que todo el contenido del HTML se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    const pregunta = document.getElementById('pregunta');
    const heartContainer = document.querySelector('.heart-container');

    // Array con las preguntas en secuencia y puntuación
    const preguntas = [
        "Segura que me amas y no me engañas con un gringo  🤨 ?",
        "Pero tais muy segura de verdad, Yo sé que me pegais cacho con un gringo  🤨 , sí me amais?",
        "Segura que me amas 100% y no me pegais cacho  🤨 ?",
        "Yo tambien te amo negra. Te amo mil vidas, sapa."
    ];

    let clickCount = 0;
    let sizeMultiplier = 1;

    siBtn.addEventListener('click', () => {
        if (clickCount < preguntas.length - 1) {
            pregunta.textContent = preguntas[clickCount];
            clickCount++;
            sizeMultiplier += 0.5;
            
            // Aumenta el tamaño del botón 'Sí'
            siBtn.style.transform = `scale(${1 + sizeMultiplier * 0.2})`;
            
            // Disminuye el tamaño del botón 'No'
            const newNoSize = Math.max(15, 30 - clickCount * 5);
            noBtn.style.padding = `${newNoSize}px`;
            noBtn.style.fontSize = `${newNoSize * 0.5}px`;

        } else {
            pregunta.textContent = preguntas[preguntas.length - 1];
            // Añadir la clase para el estilo final con corazones
            pregunta.classList.add('final-message');
            
            // Ocultar los botones al final
            siBtn.style.display = 'none';
            noBtn.style.display = 'none';
        }
    });

    noBtn.addEventListener('click', () => {
        pregunta.textContent = "ya sabia, desde que no me diste viagra en el bus lo sospeche,no te preocupeis sapa 🙂";
        siBtn.style.display = 'none';
        noBtn.style.display = 'none';
    });
    
    // Función para crear corazones flotantes
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Crea un nuevo corazón cada 300ms
    setInterval(createHeart, 300);
});