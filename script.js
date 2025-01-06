document.addEventListener("DOMContentLoaded", () => {
  const phoneLink = document.querySelector(".phone-link");

  if (phoneLink) {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (!isMobile) {
      phoneLink.removeAttribute("href");
      phoneLink.style.cursor = "default";
    }
  }

  function addClassOnIntersect(className, targetClass, threshold = 0.5) {
    function onEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add(className);
        }
      });
    }

    const options = {
      threshold: [threshold],
    };

    const observer = new IntersectionObserver(onEntry, options);
    const elements = document.querySelectorAll(targetClass);

    for (let elm of elements) {
      observer.observe(elm);
    }
  }

  addClassOnIntersect("images__background", ".hero__body");
  addClassOnIntersect("hero_title", ".description__container");
  addClassOnIntersect("description__header", ".achievements__items");
  addClassOnIntersect("items", ".social__body");
});

document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openMenuButton");
  const closeButton = document.getElementById("closeMenuButton");
  const dialog = document.getElementById("mobileOverlay");

  const openMenu = () => dialog.showModal();
  const closeMenu = () => dialog.close();

  openButton.addEventListener("click", openMenu);
  dialog.addEventListener("click", closeMenu);
  closeButton.addEventListener("click", closeButton);
});
const links = document.querySelectorAll('.menu-overlay__link'); // Ссылки меню
const pages = document.querySelectorAll('.page'); // Вкладки

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Отменяем стандартное действие по ссылке

    const target = link.getAttribute('data-target'); // Получаем data-target
    const targetElement = document.getElementById(target); // Ищем нужный элемент

    if (!targetElement) { // Если элемент не найден
      console.error(`Элемент с id="${target}" не найден!`);
      return; // Выходим из функции
    }

    // Скрываем все вкладки
    pages.forEach(page => page.classList.remove('active'));

    // Показываем нужную вкладку
    targetElement.classList.add('active');
  });
});

