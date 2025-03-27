document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Scale up when hovering interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .image-container');
        let isHovering = false;
        
        interactiveElements.forEach(el => {
            if (el.matches(':hover')) {
                isHovering = true;
            }
        });
        
        if (isHovering) {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'rgba(255, 255, 255, 0.5)';
        } else {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    // GSAP Animations
    gsap.from('.hero-title', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1.5,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6
    });
    
    gsap.from('.hero-buttons', {
        duration: 1.5,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.9
    });
    
    gsap.from('.hero-image', {
        duration: 1.5,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // Parallax effect on mouse move
    const heroImage = document.querySelector('.image-container');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset position when mouse leaves
    document.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});