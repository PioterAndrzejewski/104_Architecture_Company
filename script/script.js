const colors = {
  red: {
    main: "rgb(223, 53, 53)",
    alpha: "rgba(223, 53, 53, 0.2)",
  },
  blue: {
    main: "rgb(32, 62, 192)",
    alpha: "rgba(32, 62, 192, 0.2)",
  },
  yellow: {
    main: "rgb(232, 235, 65)",
    alpha: "rgba(232, 235, 65, 0.2)",
  },
  green: {
    main: "rgb(95, 221, 116)",
    alpha: "rgba(95, 221, 116, 0.2)",
  },
  pink: {
    main: "rgb(225, 84, 230)",
    alpha: "rgba(225, 84, 230, 0.2)",
  },
};

const colorLinks = document.querySelectorAll(".nav__color-link");
colorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--color-theme-alpha",
      colors[e.target.dataset.color].alpha,
    );
    document.documentElement.style.setProperty(
      "--color-theme",
      colors[e.target.dataset.color].main,
    );
  });
});
