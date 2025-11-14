// Sticky Navigation
      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Mobile Menu Toggle
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });

      // Image Slideshow
      let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");
      const slideCount = slides.length;

      function showSlide(n) {
        slides.forEach((slide) => slide.classList.remove("active"));
        currentSlide = (n + slideCount) % slideCount;
        slides[currentSlide].classList.add("active");
      }

      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      // Change slide every 5 seconds
      setInterval(nextSlide, 5000);

      // Scroll Down Arrow
      const scrollDown = document.querySelector(".scroll-down");
      scrollDown.addEventListener("click", function () {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      });

      // Smooth Scrolling for Navigation Links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            navLinks.classList.remove("active");
          }
        });
      });
        // Typewriter Effect
      const typewriterElement = document.getElementById("typewriter");
      const words = ["Sun Glam Hotel", "Serenity", "Elegance", "Tranquility"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;

      function typeWriter() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          typewriterElement.textContent = currentWord.substring(
            0,
            charIndex - 1
          );
          charIndex--;
          typeSpeed = 50;
        } else {
          typewriterElement.textContent = currentWord.substring(
            0,
            charIndex + 1
          );
          charIndex++;
          typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 1000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 500; // Pause before starting next word
        }

        setTimeout(typeWriter, typeSpeed);
      }

      // Start typewriter effect
      setTimeout(typeWriter, 1000);
