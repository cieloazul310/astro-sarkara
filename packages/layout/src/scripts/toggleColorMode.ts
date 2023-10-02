document.querySelectorAll(".toggle-color-mode")?.forEach((element) => {
  element.addEventListener("click", () => {
    const colorMode = document.documentElement?.getAttribute("data-color-mode");
    document.documentElement?.setAttribute(
      "data-color-mode",
      colorMode === "dark" ? "light" : "dark",
    );
    window.localStorage.setItem(
      "astro-color-mode",
      colorMode === "dark" ? "light" : "dark",
    );
  });
});
