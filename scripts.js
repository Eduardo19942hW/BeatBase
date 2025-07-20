// Animación inicial del encabezado
gsap.from(".intro h1", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "bounce"
});

// Entrada suave del mensaje
gsap.from(".message", {
  delay: 1,
  duration: 2,
  opacity: 0,
  x: -100,
  ease: "power2.out"
});

// Aparición de la imagen
gsap.from(".photo-section img", {
  delay: 1.5,
  duration: 1.8,
  scale: 0.8,
  opacity: 0,
  ease: "elastic.out(1, 0.4)"
});