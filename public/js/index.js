document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbarToggler');
    const navbarContent = document.getElementById('navbarContent');

    toggler.addEventListener('click', function () {
        navbarContent.classList.toggle('show');
    });
});


// Smooth scroll to the target section
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      // Scroll to the target section
      targetElement.scrollIntoView({ behavior: 'smooth' });
  
      // Highlight the target section
      targetElement.classList.add('highlight');
  
      // Remove the highlight after a few seconds
      setTimeout(() => {
        targetElement.classList.remove('highlight');
      }, 2000); // Adjust the duration as needed
    });
  });
  