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

      // Form Submission with Modal
      const reservationForm = document.getElementById("reservationForm");
      const confirmationModal = document.getElementById("confirmationModal");

      reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // In a real implementation, you would submit the form data here
        // For demonstration, we'll just show the modal
        confirmationModal.style.display = "flex";
        setTimeout(() => {
          confirmationModal.classList.add("active");
        }, 10);

        // Actually submit the form after showing modal
        setTimeout(() => {
          reservationForm.submit();
        }, 3000);
      });

      // Date validation
      const checkinInput = document.getElementById("checkin");
      const checkoutInput = document.getElementById("checkout");

      // Set minimum date to today
      const today = new Date().toISOString().split("T")[0];
      checkinInput.min = today;

      checkinInput.addEventListener("change", function () {
        checkoutInput.min = this.value;
      });

      // Close modal when clicking outside
      confirmationModal.addEventListener("click", function (e) {
        if (e.target === confirmationModal) {
          confirmationModal.classList.remove("active");
          setTimeout(() => {
            confirmationModal.style.display = "none";
          }, 300);
        }
      });