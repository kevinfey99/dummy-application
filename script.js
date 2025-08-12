/* Theme toggle and simple interactivity for Work Zone dummy pages */
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.theme-toggle');
  // Initialize theme from localStorage
  const storedTheme = localStorage.getItem('dummyTheme');
  if (storedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    if (toggleButton) toggleButton.textContent = '🌙';
  } else {
    if (toggleButton) toggleButton.textContent = '☀️';
  }

  // Toggle theme on button click
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      document.documentElement.classList.toggle('light-theme');
      const isLight = document.documentElement.classList.contains('light-theme');
      localStorage.setItem('dummyTheme', isLight ? 'light' : 'dark');
      this.textContent = isLight ? '🌙' : '☀️';
    });
  }

  // Handle clickable elements with data-click attribute: show alert or toggle extra content
  document.querySelectorAll('[data-click]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const message = this.getAttribute('data-click');
      alert(message);
    });
  });

  // Toggle details sections if present (for FAQ-like behaviour)
  document.querySelectorAll('.toggle-section').forEach(function (section) {
    const header = section.querySelector('.toggle-header');
    const content = section.querySelector('.toggle-content');
    if (header && content) {
      header.addEventListener('click', function () {
        content.classList.toggle('open');
      });
    }
  });
});