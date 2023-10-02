document.querySelectorAll(".drawer-handler")?.forEach((element) => {
  element.addEventListener("click", () => {
    const open = Boolean(
      JSON.parse(document.body.getAttribute("data-drawer-open") ?? "false"),
    );
    document.body.setAttribute("data-drawer-open", JSON.stringify(!open));
  });
});
