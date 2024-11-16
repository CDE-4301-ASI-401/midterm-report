
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach((section) => {
        section.style.display = 'none'; // Hide all sections
    });

    // Show the clicked section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }

    // Highlight the active link
    document.querySelectorAll('.sidenav a').forEach((link) => {
        link.classList.remove('active'); // Remove active state from all links
    });

    const activeLink = document.querySelector(`.sidenav a[onclick="showSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active'); // Highlight the clicked link
    }
}

// Default section on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show both title and acknowledgements by default
    document.getElementById('title').style.display = 'block';
    document.getElementById('acknowledgements').style.display = 'block';
});
