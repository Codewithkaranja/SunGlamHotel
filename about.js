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

      // Scroll Animations
      function checkVisibility() {
        const storyImage = document.getElementById("storyImage");
        const storyContent = document.getElementById("storyContent");
        const expCards = [
          document.getElementById("expCard1"),
          document.getElementById("expCard2"),
          document.getElementById("expCard3"),
        ];

        const storyPosition = storyImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (storyPosition < screenPosition) {
          storyImage.classList.add("visible");
          storyContent.classList.add("visible");
        }

        expCards.forEach((card, index) => {
          const cardPosition = card.getBoundingClientRect().top;
          if (cardPosition < screenPosition) {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 200);
          }
        });
      }

      window.addEventListener("scroll", checkVisibility);
      window.addEventListener("load", checkVisibility);

      // Initialize Gallery Carousel
      const galleryCarousel = new Splide("#galleryCarousel", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "20px",
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        breakpoints: {
          992: {
            perPage: 2,
          },
          768: {
            perPage: 1,
          },
        },
      });

      galleryCarousel.mount();

      // Initialize Testimonials Carousel
      const testimonialCarousel = new Splide("#testimonialCarousel", {
        type: "loop",
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        pagination: true,
        arrows: true,
      });

      testimonialCarousel.mount();