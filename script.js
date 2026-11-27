
"use strict";

// =====================================
// QRENNT — MULTILANGUAGE
// RU / EN / UA
// =====================================

const translations = {
  ru: {
    navProjects: "Проекты",
    navAbout: "О нас",
    navServices: "Услуги",
    navReviews: "Отзывы",
    navContact: "Связаться",

    eyebrow: "НЕЗАВИСИМАЯ DIGITAL-СТУДИЯ",
    heroLine1: "WE CREATE",
    heroLine2: "DIGITAL WORLDS",
    heroDescription: "Создаём сайты, визуальные системы и цифровые впечатления, которые невозможно спутать с другими.",
    explore: "Исследовать проекты",
    discuss: "Обсудить проект",
    scroll: "ЛИСТАЙТЕ ВНИЗ",

    philosophy: "НАША ФИЛОСОФИЯ",
    introLine1: "WE DON'T JUST",
    introLine2: "BUILD WEBSITES.",
    introText: "Мы превращаем идеи в выразительные цифровые пространства. Внимание к деталям, характерный стиль и технологии — основа каждого проекта.",
    aboutMore: "Больше о QRENNT",

    portfolio: "ПОРТФОЛИО — 2026",
    workLine1: "SELECTED",
    workLine2: "PROJECTS.",
    workDescription: "Каждый проект — отдельная история. Посмотри, что мы создаём.",
    allProjects: "Смотреть все проекты",

    mindset: "НАШЕ МЫШЛЕНИЕ",
    manifestoLine1: "MAKE IT",
    manifestoLine2: "MATTER.",
    manifestoText: "Не следовать шаблонам. Не бояться экспериментов. Создавать то, что запоминается.",

    idea: "ЕСТЬ ИДЕЯ?",
    contactLine1: "LET'S MAKE",
    contactLine2: "IT REAL.",
    startProject: "Начать проект"
  },

  en: {
    navProjects: "Projects",
    navAbout: "About",
    navServices: "Services",
    navReviews: "Reviews",
    navContact: "Contact",

    eyebrow: "INDEPENDENT DIGITAL STUDIO",
    heroLine1: "WE CREATE",
    heroLine2: "DIGITAL WORLDS",
    heroDescription: "We create websites, visual systems and digital experiences that stand apart.",
    explore: "Explore projects",
    discuss: "Discuss a project",
    scroll: "SCROLL TO EXPLORE",

    philosophy: "OUR PHILOSOPHY",
    introLine1: "WE DON'T JUST",
    introLine2: "BUILD WEBSITES.",
    introText: "We turn ideas into expressive digital spaces. Attention to detail, distinctive style and technology are the foundation of every project.",
    aboutMore: "More about QRENNT",

    portfolio: "PORTFOLIO — 2026",
    workLine1: "SELECTED",
    workLine2: "PROJECTS.",
    workDescription: "Every project tells a different story. Discover what we create.",
    allProjects: "View all projects",

    mindset: "OUR MINDSET",
    manifestoLine1: "MAKE IT",
    manifestoLine2: "MATTER.",
    manifestoText: "No templates. No fear of experimentation. Create something memorable.",

    idea: "HAVE AN IDEA?",
    contactLine1: "LET'S MAKE",
    contactLine2: "IT REAL.",
    startProject: "Start a project"
  },

  ua: {
    navProjects: "Проєкти",
    navAbout: "Про нас",
    navServices: "Послуги",
    navReviews: "Відгуки",
    navContact: "Зв'язатися",

    eyebrow: "НЕЗАЛЕЖНА DIGITAL-СТУДІЯ",
    heroLine1: "WE CREATE",
    heroLine2: "DIGITAL WORLDS",
    heroDescription: "Створюємо сайти, візуальні системи та цифрові враження, які неможливо сплутати з іншими.",
    explore: "Переглянути проєкти",
    discuss: "Обговорити проєкт",
    scroll: "ГОТУЙСЯ ДО ПОДОРОЖІ",

    philosophy: "НАША ФІЛОСОФІЯ",
    introLine1: "WE DON'T JUST",
    introLine2: "BUILD WEBSITES.",
    introText: "Ми перетворюємо ідеї на виразні цифрові простори. Увага до деталей, особливий стиль і технології — основа кожного проєкту.",
    aboutMore: "Більше про QRENNT",

    portfolio: "ПОРТФОЛІО — 2026",
    workLine1: "ОБРАНІ",
    workLine2: "ПРОЄКТИ.",
    workDescription: "Кожен проєкт — окрема історія. Подивись, що ми створюємо.",
    allProjects: "Переглянути всі проєкти",

    mindset: "НАШЕ БАЧЕННЯ",
    manifestoLine1: "СТВОРЮЙ",
    manifestoLine2: "ВАЖЛИВЕ.",
    manifestoText: "Не слідувати шаблонам. Не боятися експериментів. Створювати те, що запам'ятовується.",

    idea: "МАЄШ ІДЕЮ?",
    contactLine1: "ДАВАЙТЕ ЗРОБИМО",
    contactLine2: "ЦЕ РЕАЛЬНІСТЮ.",
    startProject: "Почати проєкт"
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
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll(".language-switcher button").forEach(button => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("qrennt-language", language);
  } catch (error) {
    // Language switching still works without local storage.
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

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
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

  const pointer = {
    x: -1000,
    y: -1000
  };

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(
      85,
      Math.max(25, Math.floor(width / 15))
    );

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
      ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

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
  row.addEventListener("pointerenter", () => {
    row.classList.add("hovered");
  });

  row.addEventListener("pointerleave", () => {
    row.classList.remove("hovered");
  });
});
