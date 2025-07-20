// Animación del título
gsap.from(".intro h1", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "bounce"
});

// Animación del párrafo
gsap.from(".intro p", {
  delay: 0.5,
  duration: 1.5,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

// Animación del botón
gsap.from(".btn", {
  delay: 1,
  duration: 1.2,
  y: 30,
  opacity: 0,
  ease: "power1.out"
});

// Animación de la imagen
gsap.from(".photo-section img", {
  delay: 1.8,
  duration: 2,
  scale: 0.8,
  opacity: 0,
  ease: "elastic.out(1, 0.3)"
});

// Animación del mensaje
gsap.from(".message", {
  delay: 2.4,
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power1.inOut"
});

// Animación de la galería
gsap.from(".gallery", {
  delay: 3,
  duration: 1.5,
  opacity: 0,
  y: 30,
  ease: "power2.out"
});