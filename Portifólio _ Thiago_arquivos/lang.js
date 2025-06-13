const translations = {

      // Texto em portugues 
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
    introMe: "Minha <span>introdução</span>",
    aboutTitle: "Sobre mim", 
    aboutText: "Olá, me chamo Thiago Torres, gostaria de compartilhar com você alguns dos meus projetos que finalizei recentemente. Atualmente estou cursando uma faculdade e alguns cursos com algumas linguagens de programação que estão em alta no momento HTML, CSS, JavaScript e React. Estou em transição de carreira então esses projetos são apenas estudos, em meu github contém mais alguns projetos para complementar.  Estou sempre aprimorando meus conhecimentos em frameworks e bibliotecas modernas.",
    contactMe: "Fale comigo",
    favSkills: "Skills favoritas", // span não está funcionando verificar posteriormente //
    skillsTitle: "Minhas Skills",
    skillsText: "Veja minhas principais habilidades para desenvolver projetos de forma moderna e eficaz.",
    frameworksLibs: "Frameworks e \nBibliotecas",
    seproj: "Ver projetos",
    mySer: "Meus serviços", // span não está funcionando verificar posteriormente //
    servicesTitle: "O que eu faço",
    titleserv1: "Desenvolvimento Front-End",
    service1: "Desenvolvimento de páginas Web personalizadas. Utilizando as tecnologias mais recentes e bibliotecas do campo de trabalho.",
    titleserv2: "Resolução de Problemas",
    service2: "Apto a solucionar bugs, realizar testes e depurar o código para garantir o bom funcionamento das interfaces.",
    titleserv3: "Frameworks e Bibliotecas",
    service3: "Tenho conhecimento em desenvolver aplicações consumindo APIs e realizando integrações com serviços externos.",
    myWor: "Meus trabalhos", // span não está funcionando verificar posteriormente //
    projectsTitle: "Projetos recentes",
    projectsText: "Confira alguns dos meus projetos mais recentes:",
    seeLink:"Ver",
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
      // Texto em inglês
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
    introMe: "My <span>introduction</span>",
    aboutTitle: "About Me",
    aboutText: "Hello, my name is Thiago Torres. I’d like to share with you some of the projects I’ve recently completed. I’m currently attending university and taking courses in some of the most popular programming languages right now, including HTML, CSS, JavaScript, and React. I’m going through a career transition, so these projects are primarily for learning purposes. You can find additional projects on my GitHub to complement these. I’m always improving my skills in modern frameworks and libraries.",
    contactMe: "Contact Me",
    favSkills: "Favorite skills",    // span não está funcionando verificar posteriormente //
    skillsTitle: "My Skills",
    skillsText: "Check out my main skills to develop modern and efficient projects.",
    frameworksLibs: "Frameworks and \nLibraries",
    seproj: "See projects",
    mySer: "My services", // span não está funcionando verificar posteriormente //
    servicesTitle: "What I Do",
    titleserv1: "Front-End Development",
    service1: "Development of custom web pages, using the latest technologies and libraries in the field.",
    titleserv2: "Problem solving",
    service2: "Skilled in fixing bugs, performing tests, and debugging code to ensure the proper functioning of interfaces.",
    titleserv3: "Frameworks and Libraries",
    service3: "I have experience developing applications that consume APIs and integrate with external services.",
    myWor: "My Projects", // span não está funcionando verificar posteriormente //
    projectsTitle: "Recent Projects",
    projectsText: "Check out some of my latest projects:",
    seeLink:"Look",
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
      if(key === 'introMe') {
        el.innerHTML = translations[lang][key];  // usar innerHTML aqui para preservar <span>
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
    // Atualiza o titulo da aba
  document.title = translations[lang].title;
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage('pt'); // define idioma padrão ao carregar página
});