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
          <div class="col-md-4 mb-4 middle-container">
            <h5>Services</h5>
            <div class="service-links">
              <ul class="footer-links list-unstyled">
              <li v-for="(service, index) in services" :key="index">
                <a href="#" class="footer-link">{{ service }}</a>
              </li>
            </ul>
          </div>
            </div>
          <!-- Right Column: Contact + Social Icons -->
          <div class="col-md-4 mb-4 right-container">
            <h5>Contact</h5>
            <div class="contact-links">
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

           </div>
  
        <!-- Separator Line -->
        <hr class="light-blue-line my-3" />
  
        <!-- Bottom Info -->
        <div class="text-center small-text">
          <div class="footer-bottom">
            <div class="footer-bottom-links">
              <a href="#" class="footer-bottom-link">Terms of use</a> |
          <a href="#" class="footer-bottom-link">Privacy</a> |
          <a href="#" class="footer-bottom-link">Environmental Policy</a>
        </div>
            <div class="footer-bottom-text">
              <p class="mt-2">Copyright © 2024 Prime Marketing Experts. All Rights Reserved.</p>

            </div>
          </div>
          
          
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
    padding-top: 1rem;
    padding-right: 6rem;
  }
  .middle-container{
    padding-top: 1rem;
    padding-right: 6rem;
    padding-left: 6rem;
  }
  .right-container{
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 6rem;
  }
  .service-links{
    margin-top: 2rem;

  }
  .footer-links li {
    
    margin-bottom: 8px;

  }
  .contact-links{
    margin-top: 1.6rem;
    font-size: 18px;

  }
  .footer-section h5{
    font-size: 24px;
    font-weight: 600;
  }
  .contact-links li{
    margin-bottom: 2rem;

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
    font-size: 1.8rem;
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: #007bff;
  }
  
  .light-blue-line {
    border-top: 0.15rem solid #3b82f6;
    width: 100%;
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
  .footer-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-bottom p{
  margin-top: 0px !important;
  }

  .small-text {
    font-size: 0.9rem;
  }

  @media (max-width: 992px) {
  .left-container,
  .middle-container,
  .right-container {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }

  .footer-section h5 {
    margin-top: 1.5rem;
  }

  .social-icons a {
    margin: 0 0.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-bottom-links {
    margin-bottom: 1rem;
  }
}
@media (max-width: 768px) {
  .left-container,
  .middle-container,
  .right-container {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }

  .footer-section h5 {
    margin-top: 1.5rem;
  }

  .social-icons a {
    margin: 0 0.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-bottom-links {
    margin-bottom: 1rem;
  }
}
  </style>
  