<template>
    <div class="contact-container py-5">
      <!-- Heading & Paragraph -->
      <div class="text-center mb-4">
        <h1>Get in Touch</h1>
        <p>Prime Marketing Experts is looking forward to sparking growth in your business!</p>
      </div>
  
      <!-- Main Container -->
      <div class="container">
        <div class="row">
          <!-- Left: Contact Information -->
          <div class="col-md-6 mb-4 contact-info text-center text-md-start">
            <h3>Contact Information</h3>
            <p><i class="bi bi-geo-alt"></i> 74 Northeastern Blvd Bldg 12a Ste 101 Nashua, NH 03062</p>
            <p><i class="bi bi-envelope"></i> hello@primemarketingexperts.com</p>
            <p><i class="bi bi-telephone"></i> Phone Us:(617) 651-1457</p>
          </div>
  
          <!-- Right: Contact Form -->
          <div class="col-md-6 main-right-container">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="row">
                <div class="mb-3">
                 <h5>Contact Us Now</h5>
                </div>
                <div class="mb-3">
                  <label for="firstName">First Name*</label>
                  <input type="text" id="firstName" v-model="form.firstName" class="form-control" required />
                </div>
                <div class=" mb-3">
                  <label for="lastName">Last Name*</label>
                  <input type="text" id="lastName" v-model="form.lastName" class="form-control" required />
                </div>
              </div>
              <div class="mb-3">
                <label for="email">Email*</label>
                <input type="email" id="email" v-model="form.email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="phone">Phone Number*</label>
                <div class="input-group">
                  <span class="input-group-text">
                    🇵🇰 +92
                  </span>
                  <input type="tel" id="phone" v-model="form.phone" class="form-control" required />
                </div>
              </div>
              <div class="mb-3">
                <label for="company">Company Name*</label>
                <input type="text" id="company" v-model="form.company" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="2" class="form-control" required></textarea>
              </div>
              <div class="text-left">
                <button type="submit" class="btn btn-primary px-4">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        }
      };
    },
    methods: {
      submitForm() {
        alert("Form submitted!");
        // You can process or send the form data here
        console.log(this.form);
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  .contact-container {
    background-color: #f5f6ff;
    
  }
  
  .contact-info i {
    color: #ff8000;
    margin-right: 10px;
    font-size: 2rem;
  }
  .contact-info p {
    color: #ff8000;
    margin-right: 10px;
    font-size: 1rem;
  }
  .contact-form{
    background-color: white;
    padding: 8px 32px;
    padding-top: 2rem;
    padding-bottom: 3rem;
    width: 500px;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: transform 0.3s, border-color 0.3s;
    margin-top: 2rem;
  }
  .main-right-container{
    display: flex;
    justify-content: right;

  }
  
  .contact-form label {
    font-weight: 400 ;
  }
  
  .contact-form input,
  .contact-form textarea {
    border-radius: 0.1rem;
  }
  
  .contact-form .btn {
    border-radius: 2.5px;
    height: 3rem;
    background-color:#ff8000 ;
    border: #ff8000;

  }
  

  @media (max-width: 768px) {
  .contact-info {
    text-align: center;
  }

  .contact-form {
    padding: 1.5rem;
    box-shadow: none;
  }
}

@media (max-width: 576px) {
  .contact-form {
    padding: 1rem;
  }

  .contact-form .btn {
    width: 100%;
  }
}
</style>
  