// Variable für das Intervall, damit wir es steuern können
let autoSlide = setInterval(() => {
    slideImage('right');
}, 5000);

function slideImage(direction) {
    const img = document.getElementById("mainImage");
    
    // Timer zurücksetzen, wenn der User manuell klickt (verhindert Doppel-Slides)
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        slideImage('right');
    }, 5000);

    const moveOut = direction === 'right' ? '-120%' : '120%';
    const moveIn = direction === 'right' ? '120%' : '-120%';

    // 1. Raus-Sliden & Opacity runter
    img.style.opacity = "0";
    img.style.transform = `translateX(${moveOut})`;

    setTimeout(() => {
        // 2. Transition kurz ausschalten & Bildquelle tauschen
        img.style.transition = "none";
        
        if (img.src.includes("sampleimg.png")) {
            img.src = "workstation.jpeg";
        } else {
            img.src = "sampleimg.png";
        }

        // 3. Bild auf die Startposition der Gegenseite setzen
        img.style.transform = `translateX(${moveIn})`;

        // 4. Transition wieder an & Reinsliden
        setTimeout(() => {
            img.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
            img.style.opacity = "1";
            img.style.transform = "translateX(0)";
        }, 50);

    }, 400); 
}