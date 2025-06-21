// Animações com GSAP
window.addEventListener('DOMContentLoaded', () => {
  // Anima o título
  gsap.to(".titulo", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out"
  });

  // Anima os cards em sequência
  gsap.to(".project-card", {
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Anima o botão de voltar
  gsap.to(".voltar-btn", {
    delay: 1.5,
    duration: 1,
    opacity: 1,
    ease: "power2.out"
  });
});
