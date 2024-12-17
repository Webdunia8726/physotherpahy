document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.querySelector(".header-container"); // Use `.` for class
    if (headerContainer) {
        headerContainer.innerHTML = `
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
              <a class="navbar-brand" href="">PhysioPulse Lucknow</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#about">About Us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                      <li><a class="dropdown-item" href="#pain-management">Pain Management</a></li>
                      <li><a class="dropdown-item" href="#sports-rehabilitation">Sports Rehabilitation</a></li>
                      <li><a class="dropdown-item" href="#post-surgery-recovery">Post-Surgery Recovery</a></li>
                      <li><a class="dropdown-item" href="#neurological-rehabilitation">Neurological Rehabilitation</a></li>
                      <li><a class="dropdown-item" href="#pediatric-physiotherapy">Pediatric Physiotherapy</a></li>
                      <li><a class="dropdown-item" href="#geriatric-physiotherapy">Geriatric Physiotherapy</a></li>
                      <li><a class="dropdown-item" href="#orthopedic-physiotherapy">Orthopedic Physiotherapy</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#testimonials">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#contact">Contact</a>
                  </li>
                   <li class="nav-item">
                    <a class="nav-link text-white" href="blog">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="btn btn-outline-primary text-white btn-appointment nav-link px-3" href="#appointment">Book Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `;
    }
});


document.addEventListener("DOMContentLoaded", function () {
  var headerContainer = document.querySelector(".footer-container"); // Use `.` for class
  if (headerContainer) {
      headerContainer.innerHTML = `
       <!-- Footer Section -->
<footer class="bg-dark text-light py-5">
    <div class="container">
        <div class="row">
            <!-- About Section -->
            <div class="col-md-4 mb-4">
                <h5 class="text-uppercase">About PhysioPulse Lucknow</h5>
                <p>PhysioPulse Lucknow is dedicated to providing the best physiotherapy services in Lucknow. We specialize in pain management, rehabilitation, and improving your quality of life.</p>
            </div>

            <!-- Quick Links -->
            <div class="col-md-4 mb-4">
                <h5 class="text-uppercase">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#home" class="text-light text-decoration-none">Home</a></li>
                    <li><a href="#about" class="text-light text-decoration-none">About Us</a></li>
                    <li><a href="#services" class="text-light text-decoration-none">Services</a></li>
                    <li><a href="#contact" class="text-light text-decoration-none">Contact</a></li>
                    <li><a href="#faq" class="text-light text-decoration-none">FAQs</a></li>
                </ul>
            </div>

            <!-- Contact Information -->
            <div class="col-md-4 mb-4">
                <h5 class="text-uppercase">Contact Us</h5>
                <p><i class="fas fa-map-marker-alt"></i> 123 Physio Lane, Lucknow, UP</p>
                <p><i class="fas fa-phone-alt"></i> +91 9140012929</p>
                <p><i class="fas fa-envelope"></i> info@physiocarelucknow.com</p>
                <div class="social-icons">
                    <a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-light me-3"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>

        <hr class="bg-light">

        <div class="row">
            <div class="col text-center">
                <p class="mb-0">&copy; 2024 PhysioPulse Lucknow. All Rights Reserved.</p>
                <p class="small">Designed for better health and well-being in Lucknow.</p>
            </div>
        </div>
    </div>
</footer>

      `;
  }
});
