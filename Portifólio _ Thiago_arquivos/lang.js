const translations = {
  pt: {
    title: "Portifólio | Thiago",
    inicio: "Início",
    sobre: "Sobre",
    servicos: "Serviços",
    projetos: "Projetos",
    contato: "Contato",
    hello: "Olá, Eu sou o",
    role: "Desenvolvedor Front-End",
    description: "Com um sólido conhecimento em desenvolvimento web e uma paixão por criar soluções digitais inovadoras, dedico-me a entregar projetos de alta qualidade, cuidadosamente planejados e executados para atender às necessidades e expectativas de cada cliente, garantindo resultados que combinam excelência técnica, funcionalidade e design atrativo.",
    letsTalk: "Vamos Conversar",
    aboutTitle: "Sobre mim",
    aboutText: "Olá, me chamo Thiago Torres. Estou cursando Análise e Desenvolvimento de Sistemas, estudando tecnologias como HTML, CSS, JavaScript e React. Estou em transição de carreira, então meus projetos são estudos práticos publicados no GitHub. Estou sempre aprendendo e evoluindo com novas ferramentas e frameworks.",
    contactMe: "Fale comigo",
    skillsTitle: "Minhas Skills",
    skillsText: "Veja minhas principais habilidades para desenvolver projetos de forma moderna e eficaz.",
    frameworksLibs: "Frameworks e Bibliotecas",
    servicesTitle: "O que eu faço",
    service1: "Desenvolvimento de páginas web modernas e responsivas.",
    service2: "Resolução de problemas, correção de bugs e testes.",
    service3: "Integrações com APIs e bibliotecas modernas.",
    projectsTitle: "Projetos recentes",
    projectsText: "Confira alguns dos meus projetos mais recentes:",
    project1: "Réplica do Twitter",
    project2: "Site de Barbearia",
    project3: "App de Filmes",
    project4: "Loja de Bolos",
    project5: "Jogo com IA",
    project6: "Todos os Projetos",
    contactTitle: "Contate-me",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu e-mail",
    messagePlaceholder: "Sua mensagem",
    sendMessage: "Enviar mensagem",
    footerRole: "Desenvolvedor Front-End",
    rights: "Todos os direitos reservados © 2025"
  },
  en: {
    title: "Portfolio | Thiago",
    inicio: "Home",
    sobre: "About",
    servicos: "Services",
    projetos: "Projects",
    contato: "Contact",
    hello: "Hello, I am",
    role: "Front-End Developer",
    description: "With a solid knowledge of web development and a passion for creating innovative digital solutions, I am dedicated to delivering high-quality projects that are carefully planned and executed to meet each client's needs and expectations, ensuring results that combine technical excellence, functionality, and attractive design.",
    letsTalk: "Let's Talk",
    aboutTitle: "About Me",
    aboutText: "Hi, my name is Thiago Torres. I'm studying Systems Analysis and Development, learning technologies like HTML, CSS, JavaScript and React. I'm transitioning careers, so my projects are practical studies published on GitHub. I'm always learning and evolving with new tools and frameworks.",
    contactMe: "Contact Me",
    skillsTitle: "My Skills",
    skillsText: "Check out my main skills to develop modern and efficient projects.",
    frameworksLibs: "Frameworks and Libraries",
    servicesTitle: "What I Do",
    service1: "Modern and responsive web development.",
    service2: "Problem-solving, bug fixing and testing.",
    service3: "Integrations with APIs and modern libraries.",
    projectsTitle: "Recent Projects",
    projectsText: "Check out some of my latest projects:",
    project1: "Twitter Clone",
    project2: "Barbershop Website",
    project3: "Movie App",
    project4: "Cake Shop",
    project5: "AI Game",
    project6: "All Projects",
    contactTitle: "Get in Touch",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    sendMessage: "Send Message",
    footerRole: "Front-End Developer",
    rights: "All rights reserved © 2025"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Atualiza o título da aba também
  document.title = translations[lang].title;
}
