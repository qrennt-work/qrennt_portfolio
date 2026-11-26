
const translations = {
  ru: {
    navHome: "Главная",
    navProjects: "Проекты",
    navAbout: "Обо мне",
    navServices: "Услуги",
    navReviews: "Отзывы",
    contact: "Связаться ↗",
    eyebrow: "QRENNT / SELECTED WORKS",
    heroLine1: "Создаю",
    heroLine2: "цифровые впечатления.",
    heroDescription: "Каждый проект — отдельная идея, характер и визуальная история. Здесь собраны мои работы и эксперименты.",
    scroll: "Смотреть работы",
    collection: "КОЛЛЕКЦИЯ / 2026",
    selected: "Избранные проекты",
    count: "07 работ<br>и постоянное развитие",
    carDesc: "Атмосферный автомобильный сайт с акцентом на визуал, динамику и характер.",
    autoDesc: "Современная цифровая презентация автомобильного сервиса.",
    barberDesc: "Стильный сайт барбершопа с выразительной типографикой и атмосферой.",
    patternsTitle: "ЗАБАЙКАЛЬСКИЕ УЗОРЫ",
    patternsDesc: "Цифровой проект, вдохновлённый культурой, орнаментами и традициями.",
    cyberDesc: "Неоновая интерактивная карточка с футуристичной эстетикой.",
    runnerDesc: "Неоновый игровой эксперимент с динамичной атмосферой.",
    labDesc: "Пространство экспериментов, цифровых идей и новых визуальных решений.",
    openProject: "Открыть проект",
    nextLevel: "NEXT / YOUR IDEA",
    ctaTitle: "Следующий проект<br><span class='gradient-text'>может быть твоим.</span>",
    ctaText: "Есть идея? Давай превратим её в нечто особенное.",
    discuss: "Обсудить проект",
    rights: "Все права защищены."
  },
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    navServices: "Services",
    navReviews: "Reviews",
    contact: "Contact ↗",
    eyebrow: "QRENNT / SELECTED WORKS",
    heroLine1: "Creating",
    heroLine2: "digital experiences.",
    heroDescription: "Every project has its own idea, character and visual story. Explore my work and experiments.",
    scroll: "Explore projects",
    collection: "COLLECTION / 2026",
    selected: "Selected projects",
    count: "07 projects<br>always evolving",
    carDesc: "An atmospheric automotive website focused on visuals, motion and character.",
    autoDesc: "A modern digital presentation for an automotive service.",
    barberDesc: "A stylish barbershop website with expressive typography and atmosphere.",
    patternsTitle: "TRANSBAIKAL PATTERNS",
    patternsDesc: "A digital project inspired by culture, ornaments and traditions.",
    cyberDesc: "An interactive neon card with a futuristic aesthetic.",
    runnerDesc: "A neon gaming experiment with a dynamic atmosphere.",
    labDesc: "A space for experiments, digital ideas and new visual solutions.",
    openProject: "View project",
    nextLevel: "NEXT / YOUR IDEA",
    ctaTitle: "The next project<br><span class='gradient-text'>could be yours.</span>",
    ctaText: "Have an idea? Let's turn it into something special.",
    discuss: "Discuss a project",
    rights: "All rights reserved."
  },
  ua: {
    navHome: "Головна",
    navProjects: "Проєкти",
    navAbout: "Про мене",
    navServices: "Послуги",
    navReviews: "Відгуки",
    contact: "Зв'язатися ↗",
    eyebrow: "QRENNT / SELECTED WORKS",
    heroLine1: "Створюю",
    heroLine2: "цифрові враження.",
    heroDescription: "Кожен проєкт — окрема ідея, характер і візуальна історія. Тут зібрані мої роботи та експерименти.",
    scroll: "Переглянути роботи",
    collection: "КОЛЕКЦІЯ / 2026",
    selected: "Вибрані проєкти",
    count: "07 робіт<br>і постійний розвиток",
    carDesc: "Атмосферний автомобільний сайт з акцентом на візуал, динаміку та характер.",
    autoDesc: "Сучасна цифрова презентація автомобільного сервісу.",
    barberDesc: "Стильний сайт барбершопу з виразною типографікою та атмосферою.",
    patternsTitle: "ЗАБАЙКАЛЬСЬКІ ВІЗЕРУНКИ",
    patternsDesc: "Цифровий проєкт, натхненний культурою, орнаментами та традиціями.",
    cyberDesc: "Неонова інтерактивна картка з футуристичною естетикою.",
    runnerDesc: "Неоновий ігровий експеримент із динамічною атмосферою.",
    labDesc: "Простір експериментів, цифрових ідей та нових візуальних рішень.",
    openProject: "Відкрити проєкт",
    nextLevel: "NEXT / YOUR IDEA",
    ctaTitle: "Наступний проєкт<br><span class='gradient-text'>може бути твоїм.</span>",
    ctaText: "Маєш ідею? Давай перетворимо її на щось особливе.",
    discuss: "Обговорити проєкт",
    rights: "Усі права захищені."
  }
};

const languageButtons = document.querySelectorAll(".lang");
const languageStorageKey = "qrennt-language";

function setLanguage(language) {
  const dictionary = translations[language] || translations.ru;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  languageButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  try {
    localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    // Страница продолжит работать, даже если браузер запрещает localStorage.
  }
}

languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

let savedLanguage = "ru";

try {
  savedLanguage = localStorage.getItem(languageStorageKey) || "ru";
} catch (error) {
  savedLanguage = "ru";
}

setLanguage(savedLanguage);

// Мобильное меню
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

// Плавное появление карточек
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});

// Лёгкий 3D-наклон карточек на компьютере
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (canHover) {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 4;
      const rotateX = (0.5 - y) * 4;

      card.style.transform =
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

// Фоновая анимация частиц
const canvas = document.getElementById("particles");
const ctx = canvas?.getContext("2d");

if (canvas && ctx) {
  let particles = [];
  let width = 0;
  let height = 0;
  let animationFrame = null;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const amount = Math.min(65, Math.floor(width / 19));

    particles = Array.from({ length: amount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      speed: Math.random() * 0.25 + 0.08,
      drift: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.45 + 0.15
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

      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = `rgba(140, 255, 176, ${particle.alpha})`;
      ctx.fill();
    });

    animationFrame = requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  drawParticles();

  window.addEventListener("resize", resizeCanvas);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else {
      cancelAnimationFrame(animationFrame);
      drawParticles();
    }
  });
}
