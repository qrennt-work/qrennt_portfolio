
"use strict";

// =====================================
// QRENNT — MULTILANGUAGE
// RU / EN / UA
// =====================================

const translations = {
  ru: {
    navHome: "Главная",
    navProjects: "Проекты",
    navAbout: "Обо мне",
    navServices: "Услуги",
    navReviews: "Отзывы",
    contact: "Связаться",

    eyebrow: "НЕЗАВИСИМЫЙ DIGITAL CREATOR",
    heroLine1: "Создаю сайты,",
    heroLine2: "которые запоминаются.",
    heroDescription: "Разрабатываю современные цифровые пространства, соединяя дизайн, технологии и визуальную эстетику.",
    allProjects: "Смотреть все проекты",
    projectsSubtitle: "Мои работы и цифровые эксперименты",
    clickToExplore: "ОТКРЫТЬ КОЛЛЕКЦИЮ",
    location: "DIGITAL DESIGN / WEB DEVELOPMENT",

    introTitle: "Не просто сайты. Цифровой характер.",
    introText: "QRENNT — пространство, где идеи превращаются в современные цифровые проекты. Я уделяю внимание деталям, атмосфере, удобству и визуальной подаче.",
    aboutMore: "Подробнее обо мне",

    featuredTitle: "Избранные работы.",
    featuredCar: "Автомобильный цифровой опыт",
    featuredAuto: "Современный автомобильный сервис",
    featuredBarber: "Стиль и цифровая презентация",
    featuredCyber: "Футуристичный интерактивный дизайн",

    manifestoTitle: "Большие идеи начинаются с деталей.",
    manifestoText: "Каждый элемент должен иметь смысл. Каждый экран должен создавать впечатление. Каждый проект должен отличаться.",

    servicesTitle: "От идеи до результата.",
    serviceOne: "Разработка сайтов",
    serviceOneText: "Современные сайты с индивидуальным дизайном.",
    serviceTwo: "Веб-дизайн",
    serviceTwoText: "Продуманная визуальная система и интерфейсы.",
    serviceThree: "Анимации",
    serviceThreeText: "Интерактивность и движение в деталях.",
    allServices: "Все услуги",

    contactTitle: "Есть идея? Создадим её вместе.",
    contactText: "Расскажи о своей задумке — обсудим, каким может быть твой проект.",
    contactButton: "Написать в Telegram",

    rights: "Все права защищены."
  },

  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    navServices: "Services",
    navReviews: "Reviews",
    contact: "Contact",

    eyebrow: "INDEPENDENT DIGITAL CREATOR",
    heroLine1: "I create websites,",
    heroLine2: "that people remember.",
    heroDescription: "I develop modern digital spaces combining design, technology and visual aesthetics.",
    allProjects: "View all projects",
    projectsSubtitle: "My work and digital experiments",
    clickToExplore: "EXPLORE COLLECTION",
    location: "DIGITAL DESIGN / WEB DEVELOPMENT",

    introTitle: "More than websites. Digital character.",
    introText: "QRENNT is a space where ideas become modern digital projects. I focus on details, atmosphere, usability and visual presentation.",
    aboutMore: "More about me",

    featuredTitle: "Selected works.",
    featuredCar: "Automotive digital experience",
    featuredAuto: "Modern automotive service",
    featuredBarber: "Style and digital presentation",
    featuredCyber: "Futuristic interactive design",

    manifestoTitle: "Great ideas begin with details.",
    manifestoText: "Every element should have meaning. Every screen should create an impression. Every project should stand apart.",

    servicesTitle: "From idea to result.",
    serviceOne: "Website development",
    serviceOneText: "Modern websites with individual design.",
    serviceTwo: "Web design",
    serviceTwoText: "Thoughtful visual systems and interfaces.",
    serviceThree: "Animations",
    serviceThreeText: "Interactivity and movement in every detail.",
    allServices: "All services",

    contactTitle: "Have an idea? Let's create it together.",
    contactText: "Tell me about your idea and we'll discuss your project.",
    contactButton: "Message on Telegram",

    rights: "All rights reserved."
  },

  ua: {
    navHome: "Головна",
    navProjects: "Проєкти",
    navAbout: "Про мене",
    navServices: "Послуги",
    navReviews: "Відгуки",
    contact: "Зв'язатися",

    eyebrow: "НЕЗАЛЕЖНИЙ DIGITAL CREATOR",
    heroLine1: "Створюю сайти,",
    heroLine2: "які запам'ятовуються.",
    heroDescription: "Розробляю сучасні цифрові простори, поєднуючи дизайн, технології та візуальну естетику.",
    allProjects: "Переглянути всі проєкти",
    projectsSubtitle: "Мої роботи та цифрові експерименти",
    clickToExplore: "ВІДКРИТИ КОЛЕКЦІЮ",
    location: "DIGITAL DESIGN / WEB DEVELOPMENT",

    introTitle: "Не просто сайти. Цифровий характер.",
    introText: "QRENNT — простір, де ідеї перетворюються на сучасні цифрові проєкти. Я приділяю увагу деталям, атмосфері, зручності та візуальній подачі.",
    aboutMore: "Детальніше про мене",

    featuredTitle: "Обрані роботи.",
    featuredCar: "Автомобільний цифровий досвід",
    featuredAuto: "Сучасний автомобільний сервіс",
    featuredBarber: "Стиль і цифрова презентація",
    featuredCyber: "Футуристичний інтерактивний дизайн",

    manifestoTitle: "Великі ідеї починаються з деталей.",
    manifestoText: "Кожен елемент має значення. Кожен екран створює враження. Кожен проєкт має відрізнятися.",

    servicesTitle: "Від ідеї до результату.",
    serviceOne: "Розробка сайтів",
    serviceOneText: "Сучасні сайти з індивідуальним дизайном.",
    serviceTwo: "Вебдизайн",
    serviceTwoText: "Продумана візуальна система та інтерфейси.",
    serviceThree: "Анімації",
    serviceThreeText: "Інтерактивність і рух у деталях.",
    allServices: "Усі послуги",

    contactTitle: "Є ідея? Створімо її разом.",
    contactText: "Розкажи про свою задумку — обговоримо твій проєкт.",
    contactButton: "Написати в Telegram",

    rights: "Усі права захищені."
  }
};

// =====================================
// LANGUAGE FUNCTIONS
// =====================================

function setLanguage(language) {
  if (!translations[language]) return;

  const dictionary = translations[language];

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      // Меняем текст, сохраняя вложенные иконки и HTML-разметку.
      const textNode = Array.from(element.childNodes).find(
        node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
      );

      if (textNode) {
        textNode.textContent = dictionary[key];
      } else if (!element.children.length) {
        element.textContent = dictionary[key];
      }
    }
  });

  document.querySelectorAll(".language-switch button").forEach(button => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("qrennt-language", language);
  } catch (error) {
    // Работа без localStorage.
  }
}

document.querySelectorAll(".language-switch button").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

let initialLanguage = "ru";

try {
  const savedLanguage = localStorage.getItem("qrennt-language");

  if (savedLanguage && translations[savedLanguage]) {
    initialLanguage = savedLanguage;
  }
} catch (error) {
  initialLanguage = "ru";
}

setLanguage(initialLanguage);

// =====================================
// MOBILE MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", event => {
    if (
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// =====================================
// REVEAL ON SCROLL
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  });

  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

// =====================================
// PARTICLE FIELD
// =====================================

const canvas = document.getElementById("particles");
const ctx = canvas?.getContext("2d");

if (canvas && ctx && !prefersReducedMotion) {
  let width = 0;
  let height = 0;
  let particles = [];

  const pointer = { x: -1000, y: -1000 };

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(85, Math.max(25, Math.floor(width / 15)));

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(particle => {
      particle.y -= particle.speed;
      particle.x += particle.drift;

      if (particle.y < -5) {
        particle.y = height + 5;
        particle.x = Math.random() * width;
      }

      if (particle.x < -5) particle.x = width + 5;
      if (particle.x > width + 5) particle.x = -5;

      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 110 && distance > 0) {
        particle.x -= (dx / distance) * 0.35;
        particle.y -= (dy / distance) * 0.35;
      }

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(125, 240, 165, ${particle.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("pointermove", event => {
    if (event.pointerType === "touch") return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    pointer.x = -1000;
    pointer.y = -1000;
  });

  resizeCanvas();
  drawParticles();
}

// =====================================
// INTERACTIVE ORB
// =====================================

const orbCore = document.querySelector(".orb-core");

if (orbCore && !prefersReducedMotion) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener("pointermove", event => {
    if (event.pointerType === "touch") return;

    targetY = ((event.clientX / window.innerWidth) - 0.5) * 22;
    targetX = ((event.clientY / window.innerHeight) - 0.5) * -22;
  }, { passive: true });

  function animateOrb() {
    currentX += (targetX - currentX) * 0.045;
    currentY += (targetY - currentY) * 0.045;

    orbCore.style.transform =
      `perspective(700px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;

    requestAnimationFrame(animateOrb);
  }

  animateOrb();
}

// =====================================
// PROJECT ROW INTERACTION
// =====================================

document.querySelectorAll(".project-row").forEach(row => {
  row.addEventListener("pointerenter", () => row.classList.add("hovered"));
  row.addEventListener("pointerleave", () => row.classList.remove("hovered"));
});
