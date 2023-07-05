const colors = {
  red: {
    main: "rgb(223, 53, 53)",
    alpha: "rgba(223, 53, 53, 0.15)",
    alpha2: "rgba(223, 53, 53, 0.4)",
  },
  blue: {
    main: "rgb(32, 62, 192)",
    alpha: "rgba(32, 62, 192, 0.15)",
    alpha2: "rgba(32, 62, 192, 0.4)",
  },
  yellow: {
    main: "rgb(232, 235, 65)",
    alpha: "rgba(232, 235, 65, 0.15)",
    alpha2: "rgba(232, 235, 65, 0.4)",
  },
  green: {
    main: "rgb(95, 221, 116)",
    alpha: "rgba(95, 221, 116, 0.15)",
    alpha2: "rgba(95, 221, 116, 0.4)",
  },
  pink: {
    main: "rgb(225, 84, 230)",
    alpha: "rgba(225, 84, 230, 0.15)",
    alpha2: "rgba(225, 84, 230, 0.4)",
  },
};

const setThemeColors = (color) => {
  for (const varName in colors[color]) {
    document.documentElement.style.setProperty(
      `--color-theme-${varName}`,
      colors[color][varName],
    );
  }
};

const setColorFromLocalStorage = () => {
  const favColor = window.localStorage.getItem("favColor");
  if (favColor) {
    setThemeColors(favColor);
  }
};

const toggleNavbar = () => {
  nav.classList.toggle("nav__links--active");
  navIcons.forEach((icon) => icon.classList.toggle("nav__icon--active-anim"));
  setTimeout(() => {
    navIcons.forEach((icon) => icon.classList.toggle("nav__icon--active"));
  }, 200);
};

const nav = document.querySelector(".nav__links");
const navIcons = document.querySelectorAll(".nav__icon");
const colorLinks = document.querySelectorAll(".nav__color-link");

colorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    setThemeColors(e.target.dataset.color);
    window.localStorage.setItem("favColor", e.target.dataset.color);
  });
});
setColorFromLocalStorage();
