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
    role: "Desenvolvedor Full-stack",
    description: "Como Desenvolvedor Full Stack, domino tecnologias como HTML, CSS, JavaScript, Node.js, React e MongoDB, o que me permite criar soluções completas, desde a interface do usuário até a lógica de servidor e banco de dados. Tenho uma paixão por transformar ideias em produtos digitais funcionais e bem estruturados. Dedico-me a entregar projetos de alta qualidade, cuidadosamente planejados e desenvolvidos para atender às necessidades específicas de cada cliente, unindo excelência técnica, performance, escalabilidade, funcionalidade e um design moderno e atrativo.",
    letsTalk: "Vamos Conversar",
    introMe: "Minha <span>introdução</span>",
    aboutTitle: "Sobre mim", 
    aboutText: "Olá, eu sou Thiago Torres! Sou Desenvolvedor Full Stack em transição de carreira, com foco na criação de soluções completas e eficientes. Atualmente curso Análise e Desenvolvimento de Sistemas e me especializo em tecnologias modernas como HTML, CSS, JavaScript, React, Node.js e MongoDB. Além da stack web, também venho estudando Inteligência Artificial, aplicando conceitos em projetos práticos como chatbots, automações inteligentes e funcionalidades que agregam valor a aplicações web. Este portfólio reúne alguns dos meus projetos mais recentes, desenvolvidos com atenção à arquitetura, boas práticas, responsividade e performance. Outros projetos podem ser encontrados no meu GitHub, onde exploro ideias mais avançadas e estudo novas tecnologias. Estou constantemente aprimorando minhas habilidades tanto no front-end quanto no back-end, e agora também expandindo meus conhecimentos na área de IA, com o objetivo de construir aplicações cada vez mais robustas, inteligentes e inovadoras.",
    contactMe: "Fale comigo",
    favSkills: "Skills favoritas", // span não está funcionando verificar posteriormente //
    skillsTitle: "Minhas Skills",
    skillsText: "Veja minhas principais habilidades para desenvolver projetos de forma moderna e eficaz.",
    frameworksLibs: "Frameworks e \nBibliotecas",
    seproj: "Ver projetos",
    mySer: "Meus serviços", // span não está funcionando verificar posteriormente //
    servicesTitle: "O que eu faço",
    titleserv1: "Desenvolvedor Full-stack",
    service1: "Desenvolvimento completo de aplicações Web. Utilizando tecnologias modernas e bibliotecas do front-end ao back-end.",
    titleserv2: "Resolução de Problemas",
    service2: "Apto a solucionar bugs, realizar testes e depurar o código para garantir o bom funcionamento das interfaces.",
    titleserv3: "Frameworks e Bibliotecas",
    service3: "Tenho conhecimento em desenvolver aplicações consumindo APIs e realizando integrações com serviços externos.",
    myWor: "Meus trabalhos", // span não está funcionando verificar posteriormente //
    projectsTitle: "Projetos recentes",
    projectsText: "Confira alguns dos meus projetos mais recentes:",
    seeLink:"Ver",
    project0: "Site Banda de Metal",
    project1: "Réplica do Twitter",
    project2: "Site de Barbearia",
    project3: "App de Filmes",
    project4: "Loja de Bolos",
    project6: "Todos os Projetos",
    project7: "Pedra Papel Tesoura Lagarto Spock",
    contactTitle: "Contate-me",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu e-mail",
    messagePlaceholder: "Sua mensagem",
    msgSend: "Mensagem",
    sendMessage: "Enviar mensagem",
    footerRole: "Desenvolvedor Full-stack",
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
    role: "Full-stack Developer",
    description: "As a Full Stack Developer, I have expertise in technologies such as HTML, CSS, JavaScript, Node.js, React, and MongoDB, allowing me to build complete solutions — from user interfaces to server-side logic and databases. I’m passionate about turning ideas into well-structured, functional digital products. I’m committed to delivering high-quality projects, carefully planned and developed to meet each client's specific needs, combining technical excellence, performance, scalability, functionality, and a modern, attractive design.",
    letsTalk: "Let's Talk",
    introMe: "My <span>introduction</span>",
    aboutTitle: "About Me",
    aboutText: "Hi, I'm Thiago Torres! I'm a Full Stack Developer transitioning into tech, focused on building complete and efficient digital solutions. I’m currently pursuing a degree in Systems Analysis and Development, while specializing in modern technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. In addition to full stack development, I’m also studying Artificial Intelligence, and have already started creating practical projects involving chatbots, intelligent automations, and AI-powered features for web applications. This portfolio showcases some of my most recent projects, developed with attention to architecture, best practices, responsiveness, and performance. You can find more of my work on my GitHub, where I explore advanced concepts and experiment with new technologies. I’m constantly improving my skills in both front-end and back-end development, while expanding my knowledge in AI, aiming to build increasingly robust, intelligent, and innovative applications.",
    contactMe: "Contact Me",
    favSkills: "Favorite skills",    // span não está funcionando verificar posteriormente //
    skillsTitle: "My Skills",
    skillsText: "Check out my main skills to develop modern and efficient projects.",
    frameworksLibs: "Frameworks and \nLibraries",
    seproj: "See projects",
    mySer: "My services", // span não está funcionando verificar posteriormente //
    servicesTitle: "What I Do",
    titleserv1: "Full-stack Developer",
    service1: "Full development of web applications. Utilizing modern technologies and libraries from front-end to back-end.",
    titleserv2: "Problem solving",
    service2: "Skilled in fixing bugs, performing tests, and debugging code to ensure the proper functioning of interfaces.",
    titleserv3: "Frameworks and Libraries",
    service3: "I have experience developing applications that consume APIs and integrate with external services.",
    myWor: "My Projects", // span não está funcionando verificar posteriormente //
    projectsTitle: "Recent Projects",
    projectsText: "Check out some of my latest projects:",
    seeLink:"Look",
    project0: "Metal band Web Site",
    project1: "Twitter Clone",
    project2: "Barbershop Website",
    project3: "Movie App",
    project4: "Cake Shop",
    project6: "All Projects",
    project7: "Rock Paper Scissors Lizard Spock",
    contactTitle: "Get in Touch",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    msgSend: "Message",
    messagePlaceholder: "Your message",
    sendMessage: "Send Message",
    footerRole: "Full-stack Developer",
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