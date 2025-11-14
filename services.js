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

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function () {
          navLinks.classList.remove("active");
        });
      });

      // Typewriter Effect
      const typewriterElement = document.getElementById("typewriter");
      const words = ["Luxury", "Comfort", "Nature", "Tranquility"];
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

      // Scroll to sections
      const scrollDown = document.querySelector(".scroll-down");
      scrollDown.addEventListener("click", function () {
        window.scrollTo({
          top: document.querySelector(".services-overview").offsetTop - 80,
          behavior: "smooth",
        });
      });

      // Scroll Animations
      function checkVisibility() {
        const sectionTitle = document.getElementById("sectionTitle");
        const serviceCards = [
          document.getElementById("serviceCard1"),
          document.getElementById("serviceCard2"),
          document.getElementById("serviceCard3"),
          document.getElementById("serviceCard4"),
        ];

        const sectionPosition = sectionTitle.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
          sectionTitle.classList.add("visible");

          serviceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 200);
          });
        }
      }

      window.addEventListener("scroll", checkVisibility);
      window.addEventListener("load", checkVisibility);

      // Interactive Tabs
      const tabButtons = document.querySelectorAll(".tab-button");
      const tabContents = document.querySelectorAll(".tab-content");

      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons and contents
          tabButtons.forEach((btn) => btn.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));

          // Add active class to clicked button
          button.classList.add("active");

          // Show corresponding content
          const tabId = button.getAttribute("data-tab");
          document.getElementById(`${tabId}-tab`).classList.add("active");
        });
      });

      // Ambient Sound Toggle
      const soundToggle = document.getElementById("soundToggle");
      let ambientSound = null;
      let soundEnabled = false;

      soundToggle.addEventListener("click", function () {
        soundEnabled = !soundEnabled;

        if (soundEnabled) {
          // In a real implementation, you would play ambient sounds
          // For this demo, we'll just change the icon
          soundToggle.innerHTML =
            '<i class="fas fa-volume-up"></i><div class="sound-tooltip">Ambient Sounds On</div>';
          soundToggle.style.background = "var(--accent)";

          // Here you would initialize and play ambient sounds
          // ambientSound = new Audio('ambient-nature.mp3');
          // ambientSound.loop = true;
          // ambientSound.play();
        } else {
          soundToggle.innerHTML =
            '<i class="fas fa-volume-mute"></i><div class="sound-tooltip">Ambient Sounds Off</div>';
          soundToggle.style.background = "var(--primary)";

          // Stop ambient sounds
          // if (ambientSound) {
          //     ambientSound.pause();
          //     ambientSound.currentTime = 0;
          // }
        }
      });