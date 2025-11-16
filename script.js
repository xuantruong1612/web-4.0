
document.addEventListener('DOMContentLoaded', () => {

  // Toggle nav
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle?.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Dark mode
  const toggleTheme = document.getElementById('toggleTheme');
  const current = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', current);

  toggleTheme.addEventListener('click', () => {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  });

  // Form validation
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = "Vui lòng điền đúng thông tin.";
      form.reportValidity();
      return;
    }
    status.textContent = "Gửi thành công! (giả lập)";
    form.reset();
  });
});

