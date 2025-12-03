// Script inline para prevenir flash de tema incorrecto
// Este script se ejecuta ANTES de que React se hidrate
export const themeScript = `
(function() {
  const STORAGE_KEY = 'site-theme';
  
  function getInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
  }
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  applyTheme(getInitialTheme());
})();
`;
