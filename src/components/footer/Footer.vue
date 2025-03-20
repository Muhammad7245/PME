<template>
    <footer class="footer-section py-4">
      <div class="container">
        <div class="row">
  
          <!-- Left Column: Logo + Paragraph -->
          <div class="col-md-4 mb-4 left-container">
            <img src="\src\assets\logos\Untitled design.webp" alt="Logo" class="footer-logo mb-3" />
            <p>
                Prime Marketing Experts is a full-service marketing and website development agency that offers customized services that help you more effectively attract, convert, and retain customers. We scale our services to help independent consultants, small businesses, or augment an existing enterprise marketing team.
            </p>
          </div>
  
          <!-- Middle Column: Links -->
          <div class="col-md-4 mb-4">
            <h5>Services</h5>
            <ul class="footer-links list-unstyled">
              <li v-for="(service, index) in services" :key="index">
                <a href="#" class="footer-link">{{ service }}</a>
              </li>
            </ul>
          </div>
  
          <!-- Right Column: Contact + Social Icons -->
          <div class="col-md-4 mb-4">
            <h5>Contact</h5>
            <ul class="list-unstyled">
              <li><strong>Address:</strong> 74 Northeastern Blvd #12a Ste 101 Nashua, NH 03062</li>
              <li><strong>Email:</strong> <a href="mailto:hello@primemarketingexperts.com">hello@primemarketingexperts.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:617-651-1457">617-651-1457</a></li>
            </ul>
            <div class="social-icons mt-3">
              <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="me-3"><i class="bi bi-twitter"></i></a>
              <a href="#" class="me-3"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
  
        </div>
  
        <!-- Separator Line -->
        <hr class="light-blue-line my-3" />
  
        <!-- Bottom Info -->
        <div class="text-center small-text">
          <a href="#" class="footer-bottom-link">Terms of use</a> |
          <a href="#" class="footer-bottom-link">Privacy</a> |
          <a href="#" class="footer-bottom-link">Environmental Policy</a>
          <p class="mt-2">Copyright © 2024 Prime Marketing Experts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    data() {
      return {
        services: [
          "Marketing Automation",
          "Search Engine Optimization – SEO",
          "Search Engine Advertising",
          "Inbound Marketing Services",
          "Marketing Plan Services",
          "Social Media Marketing",
          "Content Marketing Services",
          "Email Marketing Services",
          "Event Management Services",
          "Text Message Marketing",
          "Chatbot Development Services"
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .footer-section {
    background-color: #172554;
    color: white;
  }
  
  .footer-logo {
    max-width: 150px;
  }
  .left-container{
    padding-right: 3rem;
  }
  .footer-links li {
    margin-bottom: 8px;

  }
  
  .footer-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s, text-decoration 0.3s;
  }
  
  .footer-link:hover {
    color: #007bff;
    text-decoration: underline;
  }
  
  .social-icons a {
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: #007bff;
  }
  
  .light-blue-line {
    border-top: 2px solid #cce5ff;
  }
  
  .footer-bottom-link {
    color: white;
    text-decoration: none;
    margin: 0 5px;
  }
  
  .footer-bottom-link:hover {
    text-decoration: underline;
    color: #007bff;
  }
  
  .small-text {
    font-size: 0.9rem;
  }
  </style>
  