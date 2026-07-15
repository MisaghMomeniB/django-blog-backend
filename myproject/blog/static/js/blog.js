(function () {
  const STORAGE_KEY = "theme";

  const toggleBtn = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  const root = document.documentElement;

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }

  applyTheme(getInitialTheme());

  toggleBtn.addEventListener("click", function () {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();
