window.addEventListener('DOMContentLoaded', () => {
  // Anima o título
  gsap.to(".titulo", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out"
  });

  // Anima os cards
  const cards = document.querySelectorAll(".project-card");
  const totalCards = cards.length;
  const delayEntreCards = 0.2;

  gsap.fromTo(".project-card",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: delayEntreCards,
      ease: "power2.out"
    }
  );

  // Calcula quando o botão deve aparecer
  const delayBotao = totalCards * delayEntreCards;

  // Anima o botão de voltar depois dos cards
  gsap.fromTo(".voltar-btn",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay: delayBotao,
      duration: 1,
      ease: "power2.out"
    }
  );

  // Função do botão para redirecionar
  const voltarBtn = document.getElementById("voltarBtn");
  voltarBtn.addEventListener("click", () => {
    window.location.href = "../index.html"; // altere para o caminho desejado
  });
});
