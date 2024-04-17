document.addEventListener("DOMContentLoaded", function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');

  // Add click event listener to each navigation link
  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent default anchor behavior

          // Get the target section's ID from the href attribute
          const targetId = this.getAttribute('href').substring(1);

          // Get the target section
          const targetSection = document.getElementById(targetId);

          // Scroll to the target section smoothly
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });
});