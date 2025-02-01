document.addEventListener('mousemove', function(event) {
    const greeting = document.querySelector('.greeting');
    const speed = greeting.getAttribute('data-speed');
    const xPos = (window.innerWidth - event.clientX * speed) / 100;
    const yPos = (window.innerHeight - event.clientY * speed) / 100;
    greeting.style.transform = `translate(${xPos}px, ${yPos}px)`;
});

document.getElementById('down').addEventListener('change', function() {
    const isChecked = this.checked;
    const navbar = document.querySelector('.navbar');
    const arrow = document.getElementById('arrow');
    const sections = document.querySelectorAll('.section');
    const html = document.documentElement;

    if (isChecked) {
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
        arrow.classList.add('hidden');
        arrow.classList.remove('visible');
        sections.forEach(section => {
            section.classList.add('visible');
            section.classList.remove('hidden');
        });
        html.style.overflow = 'auto'; 
    } else {
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
        arrow.classList.add('visible');
        arrow.classList.remove('hidden');
        sections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('visible');
        });
        html.style.overflow = 'hidden'; 
    }
});
