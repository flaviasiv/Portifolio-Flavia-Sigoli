//navlinks menu mobile
let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

// scroll behavior
// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 100;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// Language System
const translations = {
  'pt': {
    title: 'Flavia Sigoli Moreira - Front End Developer',
    metaDescription: 'Desenvolvedora front-end júnior com 1 ano e meio de experiência em HTML, CSS, JavaScript e ReactJS. Portfólio de projetos e landing pages.',
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Skills',
      portfolio: 'Portifólio',
      contact: 'Contato'
    },
    hero: {
      title: 'Front-End Web Developer'
    },
    about: {
      title: 'Sobre mim',
      text: 'Desenvolvedora web júnior com 1 ano e meio de experiência como freelancer. Desde abril de 2022, tenho me especializado em HTML, CSS, Git, GitHub e JavaScript, com foco crescente em ReactJS desde fevereiro de 2024.<br><br>Além da minha formação técnica, tenho habilidades em gerenciamento de crises e longa experiência em atendimento ao cliente. Busco oportunidades para aplicar e expandir meu conhecimento.'
    },
    skills: {
      title: 'Minhas Skills',
      englishLevel: 'Nivel de Inglês:',
      certificate: 'Certificado EF SET'
    },
    portfolio: {
      title: 'Portifólio',
      static: 'ESTÁTICO',
      react: 'REACT',
      github: 'GITHUB',
      visitSite: 'VISITAR SITE',
      lucas: 'Projeto de portfólio desenvolvido em React para Lucas Moraes, Creative Designer & Art Director. O site foi migrado de uma versão estática HTML/CSS/JavaScript para uma aplicação React moderna, implementando navegação SPA (Single Page Application) com React Router DOM. Desenvolvido com Vite para otimização de build e performance, o projeto apresenta um menu responsivo mobile, carrosséis interativos usando Swiper, e CSS Modules para estilização componentizada e isolada.<br><br>O portfólio exibe diversos projetos como Supernova Entertainment, Botteghe Del Caffè, Buddy Nutrition, Lata 05, Clicks & Corres e Estadio 97. A arquitetura do projeto é organizada com componentes reutilizáveis (Header, Footer), páginas individuais para cada projeto, e assets otimizados. O site conta com scroll automático ao topo em mudanças de rota e navegação fluida entre as páginas, proporcionando uma experiência moderna e profissional para apresentação dos trabalhos de design e direção de arte.',
      paloma: 'O projeto consiste na criação de um site de portifólio para a arquiteta Paloma Siqueira, com um design informativo e visual minimalista. Desenvolvido em colaboração com um web designer e diretor de arte, o código foi implementado com base nos layouts criados no Webflow e Figma. O site apresenta carrosséis de imagens para exibir os projetos fotografados, incluindo a inserção de múltiplos sliders em uma única página. Além disso, possui um header responsivo com menu toggle, utilizando JavaScript para controlar a visibilidade do menu. A funcionalidade "Ler mais"/"Ler menos" foi incorporada para proporcionar uma experiência de navegação fluida, especialmente em projetos que requerem descrições mais detalhadas.<br><br>Esse projeto visa destacar os trabalhos da arquiteta de maneira intuitiva e esteticamente agradável, garantindo que os visitantes possam explorar facilmente os projetos através de uma interface simplificada e responsiva.',
      special: 'O projeto consiste na criação de uma Landing Page estática para a empresa Special Concrete. Foi desenvolvido em colaboração com web designer, com base no layout inicial do Figma. A página é estruturada com um header responsivo que inclui um menu toggle em JavaScript. Abaixo, são apresentados carrosséis de serviços e portifólio, onde cada item pode abrir uma galeria de imagens. Além disso, há a integração de uma página de rede social via iframe e um formulário de contato simples, sem backend, que utiliza uma API para enviar diretamente as informações para o cliente.',
      orlandis: 'Projeto de Landing Page para a empresa de limpeza Orlandi\'s Cleaning foi desenvolvido com foco em simplicidade e funcionalidade, o site inclui um chat de autoatendimento que aparece após alguns segundos de carregamento, facilitando a interação com os clientes. Além disso, conta com um menu responsivo e toggle navigation, garantindo uma boa experiência em diferentes dispositivos. Carrosséis de serviços oferecem detalhes sobre cada oferta, enquanto uma animação discreta enriquece a navegação ao rolar a página. Avaliações de clientes e um portifólio de fotografias são exibidos em sliders, complementando um formulário de contato simples que utiliza uma API backend para envio direto das mensagens.<br><br>O projeto foi realizado em parceria com web designer, com base em um design desenvolvido no Figma. Destaca-se ainda um efeito de Count Up implementado em JavaScript, ativado ao rolar a página, proporcionando uma experiência interativa adicional aos visitantes.',
      mmk: 'A Landing Page estática para a empresa MMK Concrete foi desenvolvida focada em simplicidade e clareza. O projeto inclui um formulário de contato funcional e um portfólio de projetos, e foi realizado em colaboração com web designer, baseado em um design inicial do Figma. O site apresenta um header responsivo com menu toggle, um banner em vídeo explicativo, animações simples que aparecem ao scrollar ou passar o mouse, carrosséis de imagens para o portfólio e reviews de clientes, além de um formulário de contato que utiliza uma API backend para envio direto das informações.',
      avenue: 'O projeto da empresa de limpeza 6th Avenue Cleaning foi desenvolvido com foco na simplicidade e eficácia, o site oferece um design estático e informativo, incluindo um formulário de contato e um portfólio. Em colaboração com web designer, o código foi implementado com base em um projeto inicial criado no Figma.<br><br>Entre as funcionalidades, destaca-se um header responsivo com menu e toggle navigation, adaptando-se dinamicamente ao tamanho da tela através de JavaScript. Um banner de vídeo logo abaixo proporciona uma breve apresentação visual e animações sutis ao rolar a página e ao passar o mouse sobre elementos adicionam interatividade.'
    },
    contact: {
      title: 'Me mande um:',
      email: 'e-mail'
    },
    footer: {
      follow: 'Me siga',
      rights: '© 2026 Flavia Sigoli. All rights reserved.'
    }
  },
  'en': {
    title: 'Flavia Sigoli Moreira - Front End Developer',
    metaDescription: 'Junior front-end developer with 1.5 years of experience in HTML, CSS, JavaScript and ReactJS. Portfolio of projects and landing pages.',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    hero: {
      title: 'Front-End Web Developer'
    },
    about: {
      title: 'About me',
      text: 'I am a Front-End Web Developer with 1 and a half years of freelancing experience. Since April 2022, I have been specializing in HTML, CSS, Git, GitHub and JavaScript, with an increasing focus on ReactJS since February 2024.<br><br>In addition to my technical training, I have crisis management skills and extensive experience in customer service. I look for opportunities to apply and expand my knowledge.'
    },
    skills: {
      title: 'My Skills',
      englishLevel: 'English level:',
      certificate: 'EF SET Certificate'
    },
    portfolio: {
      title: 'Portfolio',
      static: 'STATIC',
      react: 'REACT',
      github: 'GITHUB',
      visitSite: 'VISIT THE WEBSITE',
      lucas: 'Portfolio project developed in React for Lucas Moraes, Creative Designer & Art Director. The site was migrated from a static HTML/CSS/JavaScript version to a modern React application, implementing SPA (Single Page Application) navigation with React Router DOM. Built with Vite for build optimization and performance, the project features a responsive mobile menu, interactive carousels using Swiper, and CSS Modules for componentized and isolated styling.<br><br>The portfolio showcases various projects such as Supernova Entertainment, Botteghe Del Caffè, Buddy Nutrition, Lata 05, Clicks & Corres, and Estadio 97. The project architecture is organized with reusable components (Header, Footer), individual pages for each project, and optimized assets. The site features automatic scroll to top on route changes and smooth navigation between pages, providing a modern and professional experience for presenting design and art direction work.',
      paloma: 'The project consists of creating a portfolio website for architect Paloma Siqueira, with an informative design and minimalist look. Developed in collaboration with a web designer and art director, the code was implemented based on layouts created in Webflow and Figma. The site features image carousels to display photographed projects, including the insertion of multiple sliders on a single page. Furthermore, it has a responsive header with menu toggle, using JavaScript to control the visibility of the menu. "Read more"/"Read less" functionality has been incorporated to provide a fluid navigation experience, especially in projects that require more detailed descriptions.<br><br>This project aims to highlight the architect\'s work in an intuitive and aesthetically pleasing way, ensuring that visitors can easily explore the projects through a simplified and responsive interface.',
      special: 'The project consists of creating a static Landing Page for the company Special Concrete. It was developed in collaboration with a web designer and art director, based on the initial Figma layout. The page is structured with a responsive header that includes a JavaScript toggle menu. Below, carousels of services and portfolios are presented, where each item can open an image gallery. Additionally, there is the integration of a social media page via iframe and a simple contact form, without a backend, that uses an API to directly send information to the customer.',
      orlandis: 'Landing Page project for the cleaning company Orlandi\'s Cleaning was developed with a focus on simplicity and functionality. Using technologies such as HTML, CSS and JavaScript, the site includes a self-service chat that appears after a few seconds of loading, facilitating interaction with customers. Furthermore, it has a responsive menu and toggle navigation, ensuring a good experience on different devices. Service carousels offer details about each offering, while unobtrusive animation enriches scrolling navigation. Customer reviews and a portfolio of photographs are displayed in sliders, complementing a simple contact form that uses a backend API to send messages directly.<br><br>The project was carried out in partnership with a web designer, based on a design developed in Figma. Also noteworthy is a Count Up effect implemented in JavaScript, activated when scrolling the page, providing an additional interactive experience for visitors.',
      mmk: 'A static Landing Page for MMK Concrete company was developed with a focus on simplicity and clarity. The project includes a functional contact form and a portfolio of projects, and was executed in collaboration with a web designer based on an initial design from Figma. The site features a responsive header with a toggle menu, an explanatory video banner, simple animations that appear on scroll or mouse hover, image carousels for the portfolio and client reviews, as well as a contact form that utilizes a backend API for direct submission of information.',
      avenue: 'The design of the cleaning company 6th Avenue Cleaning was developed with a focus on simplicity and effectiveness, the website offers a static and informative design, including a contact form and a portfolio. In collaboration with a web designer, the code was implemented based on an initial project created in Figma.<br><br>Among the features, a responsive header with menu and toggle navigation stands out, dynamically adapting to the screen size through JavaScript. A video banner below provides a brief visual presentation, and subtle animations when scrolling and hovering over elements add interactivity.'
    },
    contact: {
      title: 'Send me an',
      email: 'e-mail'
    },
    footer: {
      follow: 'Follow Me',
      rights: '© 2026 Flavia Sigoli. All rights reserved.'
    }
  }
};

function getLanguageFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
  return lang === 'en' ? 'en' : 'pt';
}

function updateContent(lang) {
  const t = translations[lang];

  // Update document title and meta
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute('content', t.metaDescription);
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';

  // Update Open Graph tags
  document.querySelector('meta[property="og:title"]').setAttribute('content', t.title);
  document.querySelector('meta[property="og:description"]').setAttribute('content', t.metaDescription);
  document.querySelector('meta[property="og:locale"]').setAttribute('content', lang === 'en' ? 'en_US' : 'pt_BR');
  document.querySelector('meta[property="og:url"]').setAttribute('content', `https://flaviasiv.github.io/Portifolio-Flavia-Sigoli/${lang === 'en' ? '?lang=en' : ''}`);

  // Update Twitter tags
  document.querySelector('meta[name="twitter:title"]').setAttribute('content', t.title);
  document.querySelector('meta[name="twitter:description"]').setAttribute('content', t.metaDescription);
  document.querySelector('meta[name="twitter:url"]').setAttribute('content', `https://flaviasiv.github.io/Portifolio-Flavia-Sigoli/${lang === 'en' ? '?lang=en' : ''}`);

  // Update navigation
  const navLinks = document.querySelectorAll('.menu-linksbtn ul li a');
  navLinks[0].textContent = ' ' + t.nav.home + ' ';
  navLinks[1].textContent = ' ' + t.nav.about + ' ';
  navLinks[2].textContent = ' ' + t.nav.skills + ' ';
  navLinks[3].textContent = ' ' + t.nav.portfolio + ' ';
  navLinks[4].textContent = ' ' + t.nav.contact + ' ';

  // Update footer navigation
  const footerLinks = document.querySelectorAll('.footermenu1 ul li a');
  footerLinks[0].textContent = ' ' + t.nav.home + ' ';
  footerLinks[1].textContent = ' ' + t.nav.about + ' ';
  footerLinks[2].textContent = ' ' + t.nav.skills + ' ';
  footerLinks[3].textContent = ' ' + t.nav.portfolio + ' ';
  footerLinks[4].textContent = ' ' + t.nav.contact + ' ';

  // Update hero
  document.querySelector('.introinfo h2').textContent = t.hero.title;

  // Update about section
  document.querySelector('.abouttext h2').textContent = t.about.title;
  document.querySelector('.abouttext p').innerHTML = t.about.text;

  // Update skills section
  document.querySelector('.skillstext h2').textContent = t.skills.title;
  document.querySelector('.skillen-set h3').innerHTML = `${t.skills.englishLevel} <span style="color: #A442DC;">C2 PROFICIENT (${lang === 'en' ? 'Advanced' : 'Avançado'}).</span>`;
  document.querySelector('.skillen-set a').innerHTML = `<img src="./assets/etset-img-certificado.png" alt="">${t.skills.certificate}`;

  // Update portfolio section
  const portfolioTitle = document.querySelector('.portifoliocontainer .abouttext h2');
  if (portfolioTitle) portfolioTitle.textContent = t.portfolio.title;

  const portfolioItems = document.querySelectorAll('.work');
  const portfolioDescriptions = [t.portfolio.lucas, t.portfolio.paloma, t.portfolio.special, t.portfolio.orlandis, t.portfolio.mmk, t.portfolio.avenue];

  portfolioItems.forEach((item, index) => {
    const staticSpan = item.querySelector('.portifoliohead h2 span');
    if (staticSpan) {
      // Check if it's a React project or static project
      const isReact = staticSpan.textContent.includes('REACT');
      staticSpan.textContent = isReact ? t.portfolio.react : t.portfolio.static;
    }

    const buttons = item.querySelectorAll('.btn1 a');
    if (buttons[0]) buttons[0].innerHTML = `<img src="./assets/seta-roxa.svg" alt="">${t.portfolio.github}`;
    if (buttons[1]) buttons[1].innerHTML = `<img src="./assets/seta-verde.svg" alt="">${t.portfolio.visitSite}`;

    const description = item.querySelector('.portifolioinfop p');
    if (description && portfolioDescriptions[index]) {
      description.innerHTML = portfolioDescriptions[index];
    }
  });

  // Update contact section
  const contactH2 = document.querySelector('.contactcontainer h2');
  if (lang === 'en') {
    contactH2.innerHTML = 'Send me an <a href="mailto:flaviasigdev@gmail.com">e-mail</a>.';
  } else {
    contactH2.innerHTML = 'Me mande um:';
    if (!document.querySelector('.contactcontainer ul')) {
      contactH2.insertAdjacentHTML('afterend', '<ul><li><a href="mailto:flaviasigdev@gmail.com">e-mail</a></li></ul>');
    }
  }

  // Update footer
  document.querySelector('.footersocials p').textContent = t.footer.follow;
  document.querySelector('.rights p').textContent = t.footer.rights;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getLanguageFromURL();
  updateContent(currentLang);
});
