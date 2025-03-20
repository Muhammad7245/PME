<template>
    <div class="main-heading text-center mb-4">
      <h1>FAQ</h1>
      <p>Prime Marketing Experts solves your digital marketing and website bottlenecks.</p>
    </div>
  
    <div class="container">
      <div class="row align-items-center">
        
        <!-- Left: Image -->
        <div class="col-md-6 text-center">
          <img 
            src="C:\Users\DELL\Desktop\Merketing_Web\public\Banner_image_3.png" 
            alt="FAQ Image" 
            class="img-fluid faq-image"
          />
        </div>
  
        <!-- Right: Collapsible FAQ -->
        <div class="col-md-6">
          <div class="accordion" id="faqAccordion">
            <div 
              class="accordion-item" 
              v-for="(faq, index) in faqs" 
              :key="index"
            >
              <h2 class="accordion-header">
                <button 
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button" 
                  :data-bs-toggle="'collapse'"
                  :data-bs-target="'#collapse'+index"
                  aria-expanded="false"
                  :aria-controls="'collapse'+index"
                >
                  {{ faq.question }}
                  <span class="ms-auto">
                    <i class="bi bi-chevron-down"></i> <!-- Bootstrap Icon -->
                  </span>
                </button>
              </h2>
              <div 
                :id="'collapse'+index" 
                class="accordion-collapse collapse" 
                :data-bs-parent="'#faqAccordion'"
              >
                <div class="accordion-body">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "FAQ",
    data() {
      return {
        faqs: [
          { question: "How can we generate more sales-qualified leads and revenue?", answer: "Are you looking to generate more leads and drive more revenue? We perform customized revenue marketing tactics to generate more high-quality sales opportunities." },
          { question: "Why is my website not attracting enough potential customers?", answer: "Does your business find getting qualified leads into your pipeline to be a challenge? Boost your lead generation potential with our tailored digital marketing strategies and website development services designed to meet your specific business requirements" },
          { question: "Why is our marketing and sales data not interconnected?", answer: "We use marketing automation and CRM technology to align sales and marketing, maximizing ROI for each sales qualified lead (SQL). This will help you organize your data, so salespeople can analyze efforts for better results and reports." },
          { question: "Why does our website get very little traffic?", answer: "When your website has low traffic, you're missing out on potential business opportunities. offer customizable SEO services, social media management, and PPC advertising to improve your website's visibility and attract more visitors" },
          { question: "Why does managing digital campaigns take so much time?", answer: "We help your company use the latest advertising strategies and technology to make the most of your advertising budget. Our experts will optimize your advertising budget by targeting ads, creating engaging graphics, and distributing your budget effectively across platforms." },
        ],
      };
    },
  };
  </script>
  <style scoped>
  .container{
    padding: 2rem;
    border-radius: 2rem;
    border: 1.5px solid #ddd; /* Light gray border with thicker width */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
    transition: transform 0.3s, border-color 0.3s;
    margin-bottom: 2rem;
  }
  .faq-image {
    border-radius: 10px;
  }
  
  .accordion-button {
    background-color: white;
    font-weight: bold;
    border-radius: 0.8rem;
    border: 1.5px solid #ddd; /* Light gray border with thicker width */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
    transition: transform 0.3s, border-color 0.3s;
    margin-bottom: 1rem;
    margin-top: 10px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem

  }
  
  .accordion-button::after {
  display: none !important; /* Force hide */
}
  
  .accordion-button i {
    transition: transform 0.3s ease;
  }
  
  .accordion-button.collapsed i {
    transform: rotate(0deg);
  }
  
  .accordion-button:not(.collapsed) i {
    transform: rotate(180deg); /* rotate arrow when open */
  }
  .accordion-header{
  }
  .accordion-body{
    border: 1.5px solid #ddd; /* Light gray border with thicker width */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
    transition: transform 0.3s, border-color 0.3s;
}

  .accordion-item{
    border: none;
  }
  
  </style>
  