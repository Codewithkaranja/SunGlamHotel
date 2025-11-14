// Sticky Navigation
      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        const scrollToTop = document.getElementById("scrollToTop");

        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        // Show/hide scroll to top button
        if (window.scrollY > 500) {
          scrollToTop.classList.add("active");
        } else {
          scrollToTop.classList.remove("active");
        }
      });

      // Mobile Menu Toggle
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function () {
          navLinks.classList.remove("active");
        });
      });

      // Scroll to sections
      const scrollDown = document.querySelector(".scroll-down");
      scrollDown.addEventListener("click", function () {
        window.scrollTo({
          top: document.querySelector(".contact").offsetTop - 80,
          behavior: "smooth",
        });
      });

      // Scroll to top
      const scrollToTop = document.getElementById("scrollToTop");
      scrollToTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Scroll Animations
      function checkVisibility() {
        const contactInfo = document.getElementById("contactInfo");
        const contactForm = document.getElementById("contactForm");

        const contactPosition = contactInfo.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (contactPosition < screenPosition) {
          contactInfo.classList.add("visible");
          contactForm.classList.add("visible");
        }
      }

      window.addEventListener("scroll", checkVisibility);
      window.addEventListener("load", checkVisibility);

      // Form Submission
      const messageForm = document.getElementById("messageForm");
      const successMessage = document.getElementById("successMessage");

      messageForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // In a real implementation, you would send the form data to a server
        // For demonstration, we'll just show the success message
        successMessage.classList.add("active");

        // Reset form after 5 seconds
        setTimeout(() => {
          messageForm.reset();
          successMessage.classList.remove("active");
        }, 5000);
      });