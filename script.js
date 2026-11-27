"use strict";

/* =========================================
   QRENNT — MAIN SCRIPT
========================================= */

const translations = {
  ru: {
    navProjects: "Проекты",
    navAbout: "Обо мне",
    navServices: "Услуги",
    navReviews: "Отзывы",
    navContact: "Контакты",

    eyebrow: "DIGITAL DESIGNER & DEVELOPER",

    heroLine1: "Создаю цифровые",
    heroLine2: "пространства.",

    heroDescription:
      "Дизайн, код и идеи, превращённые в цифровые проекты с характером.",

    explore: "Исследовать",
    discuss: "Обсудить проект",
    scroll: "SCROLL TO EXPLORE",

    philosophy: "Моя философия",

    introLine1: "Дизайн — это",
    introLine2: "не просто визуал.",
    introText:
      "Это эмоция, взаимодействие и ощущение, которое остаётся после знакомства с продуктом.",
    aboutMore: "Подробнее обо мне",

    portfolio: "Избранные проекты",
    workLine1: "Работы, в которых",
    workLine2: "есть идея.",
    workDescription:
      "Каждый проект — отдельная история, эксперимент и возможность создать нечто уникальное.",
    allProjects: "Смотреть все проекты",

    mindset: "Мой подход",

    manifestoLine1: "Меньше шаблонов.",
    manifestoLine2: "Больше характера.",
    manifestoText:
      "Я стремлюсь создавать цифровые решения, которые не просто работают, а формируют впечатление.",

    idea: "Есть идея?",
    contactLine1: "Давай создадим",
    contactLine2: "что-то особенное.",
    startProject: "Начать проект"
  },

  en: {
    navProjects: "Projects",
    navAbout: "About",
    navServices: "Services",
    navReviews: "Reviews",
    navContact: "Contact",

    eyebrow: "DIGITAL DESIGNER & DEVELOPER",

    heroLine1: "Creating digital",
    heroLine2: "spaces.",

    heroDescription:
      "Design, code and ideas transformed into digital projects with character.",

    explore: "Explore",
    discuss: "Discuss a project",
    scroll: "SCROLL TO EXPLORE",

    philosophy: "My philosophy",

    introLine1: "Design is",
    introLine2: "more than visuals.",
    introText:
      "It's emotion, interaction and the feeling that remains after experiencing a product.",
    aboutMore: "More about me",

    portfolio: "Selected projects",
    workLine1: "Projects with",
    workLine2: "a purpose.",
    workDescription:
      "Every project is a separate story, experiment and opportunity to create something unique.",
    allProjects: "View all projects",

    mindset: "My approach",

    manifestoLine1: "Less templates.",
    manifestoLine2: "More character.",
    manifestoText:
      "I aim to create digital solutions that don't just work, but leave an impression.",

    idea: "Have an idea?",
    contactLine1: "Let's create",
    contactLine2: "something special.",
    startProject: "Start a project"
  },

  ua: {
    navProjects: "Проєкти",
    navAbout: "Про мене",
    navServices: "Послуги",
    navReviews: "Відгуки",
    navContact: "Контакти",

    eyebrow: "DIGITAL DESIGNER & DEVELOPER",

    heroLine1: "Створюю цифрові",
    heroLine2: "простори.",

    heroDescription:
      "Дизайн, код та ідеї, перетворені на цифрові проєкти з характером.",

    explore: "Дослідити",
    discuss: "Обговорити проєкт",
    scroll: "SCROLL TO EXPLORE",

    philosophy: "Моя філософія",

    introLine1: "Дизайн — це",
    introLine2: "не просто візуал.",
    introText:
      "Це емоція, взаємодія та відчуття, яке залишається після знайомства з продуктом.",
    aboutMore: "Детальніше про мене",

    portfolio: "Обрані проєкти",
    workLine1: "Роботи, у яких",
    workLine2: "є ідея.",
    workDescription:
      "Кожен проєкт — окрема історія, експеримент і можливість створити щось унікальне.",
    allProjects: "Переглянути всі проєкти",

    mindset: "Мій підхід",

    manifestoLine1: "Менше шаблонів.",
    manifestoLine2: "Більше характеру.",
    manifestoText:
      "Я прагну створювати цифрові рішення, які не просто працюють, а формують враження.",

    idea: "Є ідея?",
    contactLine1: "Давай створимо",
    contactLine2: "щось особливе.",
    startProject: "Почати проєкт"
  }
};


/* =========================================
   LANGUAGE SWITCHER
========================================= */

function setLanguage(language) {
  if (!translations[language]) return;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[language][key] !== undefined) {
      element.textContent = translations[language][key];
    }
  });

  const languageButtons = document.querySelectorAll(
    ".language-switcher button, .language-switch button, .language-switch [data-lang]"
  );

  languageButtons.forEach((button) => {
    const buttonLanguage =
      button.dataset.lang ||
      button.getAttribute("data-language");

    const isActive = buttonLanguage === language;

    button.classList.toggle("active", isActive);

    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("qrennt-language", language);
  } catch (error) {
    // Storage may be unavailable.
  }
}


/* =========================================
   LANGUAGE BUTTON EVENTS
========================================= */

const languageButtons = document.querySelectorAll(
  ".language-switcher button, .language-switch button, .language-switch [data-lang]"
);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language =
      button.dataset.lang ||
      button.getAttribute("data-language");

    if (language) {
      setLanguage(language);
    }
  });
});


/* =========================================
   INITIAL LANGUAGE
========================================= */

let savedLanguage = "ru";

try {
  savedLanguage = localStorage.getItem("qrennt-language") || "ru";
} catch (error) {
  savedLanguage = "ru";
}

if (!translations[savedLanguage]) {
  savedLanguage = "ru";
}

setLanguage(savedLanguage);


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");

const nav =
  document.getElementById("nav") ||
  document.getElementById("mainNav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      nav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


/* =========================================
   PARTICLES
========================================= */

const canvas = document.getElementById("particles");

if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    let particles = [];

    let width = 0;
    let height = 0;

    let mouse = {
      x: null,
      y: null
    };

    const maxParticles = 85;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    }

    function createParticles() {
      particles = [];

      const count = Math.min(
        maxParticles,
        Math.floor((width * height) / 15000)
      );

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          size: Math.random() * 1.5 + 0.4,

          speedX: (Math.random() - 0.5) * 0.25,
          speedY: (Math.random() - 0.5) * 0.25,

          opacity: Math.random() * 0.5 + 0.15
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;

        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100 && distance > 0) {
            const force = (100 - distance) / 100;

            particle.x += (dx / distance) * force * 0.6;
            particle.y += (dy / distance) * force * 0.6;
          }
        }

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(112,230,160,${particle.opacity})`;

        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.12;

            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(112,230,160,${opacity})`;

            ctx.lineWidth = 0.5;

            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawParticles);
    }

    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener("touchstart", () => {
      mouse.x = null;
      mouse.y = null;
    }, { passive: true });

    resizeCanvas();

    drawParticles();
  }
}


/* =========================================
   ORB INTERACTION
========================================= */

const orb = document.querySelector(".orb-core");

if (orb && !prefersReducedMotion) {
  let targetX = 0;
  let targetY = 0;

  let currentX = 0;
  let currentY = 0;

  orb.addEventListener("mousemove", (event) => {
    const rect = orb.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    targetX = (event.clientX - centerX) / rect.width;
    targetY = (event.clientY - centerY) / rect.height;
  });

  orb.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
  });

  function animateOrb() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    orb.style.transform =
      `translate3d(${currentX * 18}px, ${currentY * 18}px, 0)`;

    requestAnimationFrame(animateOrb);
  }

  animateOrb();
}


/* =========================================
   PROJECT HOVER EFFECT
========================================= */

document.querySelectorAll(".project-row").forEach((row) => {
  row.addEventListener("mouseenter", () => {
    row.classList.add("hovered");
  });

  row.addEventListener("mouseleave", () => {
    row.classList.remove("hovered");
  });
});


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  });
});


/* =========================================
   YEAR
========================================= */

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});


/* =========================================
   QRENNT — END
========================================= */
