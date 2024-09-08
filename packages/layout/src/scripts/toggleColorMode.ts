function setDarkModeHandler() {
  document.querySelectorAll(".color-mode-handler")?.forEach((element) => {
    element.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
}

setDarkModeHandler();
document.addEventListener("astro:after-swap", setDarkModeHandler);
