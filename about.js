
"use strict";

// =====================================
// QRENNT ABOUT — RU / EN / UA
// =====================================

const translations = {
  ru: {
    navHome: "Главная",
    navProjects: "Проекты",
    navAbout: "О QRENNT",
    navServices: "Услуги",
    navReviews: "Отзывы",
    navContact: "Связаться",

    eyebrow: "INDEPENDENT DIGITAL STUDIO",
    heroLine1: "BEYOND",
    heroLine2: "THE ORDINARY.",
    heroText: "QRENNT — независимая digital-студия, где идеи обретают форму, характер и собственное цифровое пространство.",
    discover: "Открыть нашу философию",
    heroBottom: "DESIGN WITH A POINT OF VIEW",

    philosophyLabel: "НАША ФИЛОСОФИЯ",
    philosophyLine1: "WE DON'T FOLLOW",
    philosophyLine2: "THE DEFAULT.",
    philosophyText: "Мы верим, что цифровой проект — это не просто набор страниц. Это атмосфера, впечатление и способ рассказать о своей идее.",
    philosophyTextTwo: "Поэтому мы уделяем внимание не только внешнему виду, но и структуре, удобству, деталям и общему ощущению от продукта.",

    valuesLabel: "ЧТО ДЛЯ НАС ВАЖНО",
    valueOneTitle: "Характер",
    valueOneText: "У каждого проекта должно быть собственное лицо и узнаваемая подача.",
    valueTwoTitle: "Технологии",
    valueTwoText: "Используем современные инструменты, чтобы воплощать идеи в работающие решения.",
    valueThreeTitle: "Детали",
    valueThreeText: "Продумываем композицию, типографику, анимации и взаимодействие с сайтом.",

    directionLabel: "НАПРАВЛЕНИЯ",
    directionLine1: "IDEAS INTO",
    directionLine2: "DIGITAL FORM.",
    directionText: "Создаём цифровые решения, которые помогают представить идею и сделать её заметной.",
    directionOne: "Веб-сайты и лендинги",
    directionTwo: "Визуальные концепции",
    directionThree: "Интерактивные интерфейсы",
    directionFour: "Развитие и обновление проектов",

    processLabel: "НАШ ПОДХОД",
    processTitle: "FROM IDEA TO EXPERIENCE.",
    processOneTitle: "Понимание",
    processOneText: "Разбираемся в задаче, целях и характере будущего проекта.",
    processTwoTitle: "Концепция",
    processTwoText: "Определяем визуальное направление, структуру и основные решения.",
    processThreeTitle: "Создание",
    processThreeText: "Собираем страницы, добавляем детали, анимации и функциональность.",
    processFourTitle: "Результат",
    processFourText: "Проверяем проект и готовим его к публикации.",

    ctaLabel: "YOUR IDEA STARTS HERE",
    ctaLine1: "LET'S CREATE",
    ctaLine2: "SOMETHING REAL.",
    ctaText: "Есть идея или проект? Давайте обсудим, каким он может стать.",
    ctaButton: "Обсудить проект",
    rights: "Все права защищены."
  },

  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About QRENNT",
    navServices: "Services",
    navReviews: "Reviews",
    navContact: "Contact",

    eyebrow: "INDEPENDENT DIGITAL STUDIO",
    heroLine1: "BEYOND",
    heroLine2: "THE ORDINARY.",
    heroText: "QRENNT is an independent digital studio where ideas take shape, character and their own digital space.",
    discover: "Discover our philosophy",
    heroBottom: "DESIGN WITH A POINT OF VIEW",

    philosophyLabel: "OUR PHILOSOPHY",
    philosophyLine1: "WE DON'T FOLLOW",
    philosophyLine2: "THE DEFAULT.",
    philosophyText: "We believe a digital project is more than a collection of pages. It is an atmosphere, an impression and a way to tell your story.",
    philosophyTextTwo: "That is why we focus not only on appearance, but also on structure, usability, details and the overall experience.",

    valuesLabel: "WHAT MATTERS TO US",
    valueOneTitle: "Character",
    valueOneText: "Every project should have its own identity and recognizable presentation.",
    valueTwoTitle: "Technology",
    valueTwoText: "We use modern tools to turn ideas into working digital solutions.",
    valueThreeTitle: "Details",
    valueThreeText: "We carefully consider composition, typography, animation and interaction.",

    directionLabel: "WHAT WE DO",
    directionLine1: "IDEAS INTO",
    directionLine2: "DIGITAL FORM.",
    directionText: "We create digital solutions that help present an idea and make it stand out.",
    directionOne: "Websites and landing pages",
    directionTwo: "Visual concepts",
    directionThree: "Interactive interfaces",
    directionFour: "Project development and updates",

    processLabel: "OUR APPROACH",
    processTitle: "FROM IDEA TO EXPERIENCE.",
    processOneTitle: "Understanding",
    processOneText: "We explore the task, goals and character of the upcoming project.",
    processTwoTitle: "Concept",
    processTwoText: "We define the visual direction, structure and key decisions.",
    processThreeTitle: "Creation",
    processThreeText: "We build the pages and add details, animations and functionality.",
    processFourTitle: "Delivery",
    processFourText: "We review the project and prepare it for publication.",

    ctaLabel: "YOUR IDEA STARTS HERE",
    ctaLine1: "LET'S CREATE",
    ctaLine2: "SOMETHING REAL.",
    ctaText: "Have an idea or a project? Let's discuss what it could become.",
    ctaButton: "Discuss a project",
    rights: "All rights reserved."
  },

  ua: {
    navHome: "Головна",
    navProjects: "Проєкти",
    navAbout: "Про QRENNT",
    navServices: "Послуги",
    navReviews: "Відгуки",
    navContact: "Зв'язатися",

    eyebrow: "НЕЗАЛЕЖНА DIGITAL-СТУДІЯ",
    heroLine1: "BEYOND",
    heroLine2: "THE ORDINARY.",
    heroText: "QRENNT — незалежна digital-студія, де ідеї набувають форми, характеру та власного цифрового простору.",
    discover: "Відкрити нашу філософію",
    heroBottom: "DESIGN WITH A POINT OF VIEW",

    philosophyLabel: "НАША ФІЛОСОФІЯ",
    philosophyLine1: "WE DON'T FOLLOW",
    philosophyLine2: "THE DEFAULT.",
    philosophyText: "Ми віримо, що цифровий проєкт — це не просто набір сторінок. Це атмосфера, враження та спосіб розповісти про свою ідею.",
    philosophyTextTwo: "Тому ми приділяємо увагу не лише зовнішньому вигляду, а й структурі, зручності, деталям та загальному враженню від продукту.",

    valuesLabel: "ЩО ДЛЯ НАС ВАЖЛИВО",
    valueOneTitle: "Характер",
    valueOneText: "Кожен проєкт повинен мати власне обличчя та впізнавану подачу.",
    valueTwoTitle: "Технології",
    valueTwoText: "Використовуємо сучасні інструменти, щоб втілювати ідеї в робочі рішення.",
    valueThreeTitle: "Деталі",
    valueThreeText: "Продумуємо композицію, типографіку, анімації та взаємодію із сайтом.",

    directionLabel: "НАПРЯМИ",
    directionLine1: "IDEAS INTO",
    directionLine2: "DIGITAL FORM.",
    directionText: "Створюємо цифрові рішення, які допомагають представити ідею та зробити її помітною.",
    directionOne: "Вебсайти та лендінги",
    directionTwo: "Візуальні концепції",
    directionThree: "Інтерактивні інтерфейси",
    directionFour: "Розвиток та оновлення проєктів",

    processLabel: "НАШ ПІДХІД",
    processTitle: "FROM IDEA TO EXPERIENCE.",
    processOneTitle: "Розуміння",
    processOneText: "Розбираємося із завданням, цілями та характером майбутнього проєкту.",
    processTwoTitle: "Концепція",
    processTwoText: "Визначаємо візуальний напрям, структуру та основні рішення.",
    processThreeTitle: "Створення",
    processThreeText: "Створюємо сторінки, додаємо деталі, анімації та функціональність.",
    processFourTitle: "Результат",
    processFourText: "Перевіряємо проєкт і готуємо його до публікації.",

    ctaLabel: "YOUR IDEA STARTS HERE",
    ctaLine1: "LET'S CREATE",
    ctaLine2: "SOMETHING REAL.",
    ctaText: "Маєш ідею або проєкт? Давай обговоримо, яким він може стати.",
    ctaButton: "Обговорити проєкт",
    rights: "Усі права захищені."
  }
};

// =====================================
// LANGUAGE SWITCHER
// =====================================

function setLanguage(language) {
  if (!translations[language]) return;

  const dictionary = translations[language];

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll(".language-switcher button").forEach(button => {
    const active = button.dataset.lang === language;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("qrennt-language", language);
  } catch (error) {
    // Перевод продолжает работать без localStorage.
  }
}

document.querySelectorAll(".language-switcher button").forEach(button => {
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
const nav = document.getElementById("nav");

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
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
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
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  });

  revealElements.forEach(element => observer.observe(element));
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
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(85, Math.max(25, Math.floor(width / 15)));

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.4,
      speed: Math.random() * 0.3 + 0.08,
      drift: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.45 + 0.12
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
        particle.x -= (dx / distance) * 0.3;
        particle.y -= (dy / distance) * 0.3;
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

    targetY = (event.clientX / window.innerWidth - 0.5) * 18;
    targetX = (event.clientY / window.innerHeight - 0.5) * -18;
  }, { passive: true });

  function animateOrb() {
    currentX += (targetX - currentX) * 0.045;
    currentY += (targetY - currentY) * 0.045;

    orbCore.style.rotate = `${currentY}deg`;
    orbCore.style.filter = `brightness(${1 + Math.abs(currentX) / 100})`;

    requestAnimationFrame(animateOrb);
  }

  animateOrb();
}
