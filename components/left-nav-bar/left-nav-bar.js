const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const mainContent = document.querySelector('.main-content');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  mainContent.classList.toggle('collapsed');
});
