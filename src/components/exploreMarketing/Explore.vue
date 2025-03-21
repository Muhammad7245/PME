<template>
    <div class="container my-4">
        <div class="heading-container">
            <h1 >Explore Prime Marketing Experts</h1>
        </div>
         <!-- Navigation Menu -->
        <div class="menu menu-bar d-flex justify-content-center gap-3">
      <button
        v-for="(section, index) in sections"
        :key="index"
        @click="currentSection = section"
        class="btn"
        :class="{'btn-active': currentSection.menuTitle === section.menuTitle, 'btn-outline-secondary': currentSection.menuTitle !== section.menuTitle}"
      >
        {{ section.menuTitle }}
      </button>
    </div>
    <transition name="slide-fade" mode="out-in">
        <!-- Conditional Rendering -->
  <div class="component-container my-5" :key="currentSection.menuTitle">
    <div class="row align-items-center">
      <!-- Left Side: Text Content -->
      <div class="col-md-6 text-section">
        <h2>{{ currentSection.heading }}</h2>
        <p>{{ currentSection.paragraph }}</p>
        <button class="btn explore-comp-btn" @click="goToPage(currentSection.route)">{{ currentSection.buttonText }}</button>
      </div>
      
      <!-- Right Side: Image -->
      <div class="col-md-6 image-section">
        <img :src="currentSection.image" class="img-fluid" alt="Section Image">
      </div>
    </div>
  </div>
</transition>
    <!-- Slide Left/Right Buttons -->
    <div class="d-flex justify-content-center gap-4 mt-4 slider-container">
      <button class="btn btn-slider btn-outline-secondary" @click="slideLeft">
        ←
      </button>
      <button class="btn btn-slider btn-outline-secondary" @click="slideRight">
        →
        
      </button>
    </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "Explore",
    data() {
    return {
      sections: [
        {
          menuTitle: "Our Philosophy",
          heading: "Our Philosophy",
          paragraph: "We envision a world where every brand has the opportunity to thrive. We do not care if you are a small e-commerce store or a medium-sized real estate firm. Our solutions are based on your needs and requirements. Nor on anyone else's. We use digital marketing to connect businesses and customers, building lasting relationships based on trust and engagement.",
          buttonText: "Learn More",
          image: "banner_image_2.png"
        },
        {
          menuTitle: "Our Values",
          heading: "Our Values",
          paragraph: "We envision a world where every brand has the opportunity to thrive. We do not care if you are a small e-commerce store or a medium-sized real estate firm. Our solutions are based on your needs and requirements. Nor on anyone else's. We use digital marketing to connect businesses and customers, building lasting relationships based on trust and engagement.",
          buttonText: "Explore Values",
          image: "explore_image_1.png"
        },
        {
          menuTitle: "Our Team",
          heading: "Our Team",
          paragraph: "Our team is composed of passionate professionals with diverse backgrounds in marketing, design, and technology. Each member brings unique skills and perspectives, allowing us to craft comprehensive strategies that cater to our clients' specific needs.",
          buttonText: "Meet Us",
          image: "explore_image_3.png"
        },
        {
          menuTitle: "Careers at Prime Marketing Experts",
          heading: "Careers at PME",
          paragraph: "We're always looking for great web developers and marketers. To apply, please send your resume and work samples to hello@primemarketingexperts.com and we'll be in touch.",
          buttonText: "Apply Now",
          image: "explore_image_2.png",
          route: '/contact'
        }
      ],
      currentSection: {}
    };
  },
  created() {
    // Show first section by default
    this.currentSection = this.sections[0];
  },
    methods: {
  goToPage(route) {
    this.$router.push(route);
  },
    slideLeft() {
      const currentIndex = this.sections.indexOf(this.currentSection);
      const prevIndex = (currentIndex - 1 + this.sections.length) % this.sections.length;
      this.currentSection = this.sections[prevIndex];
    },
    slideRight() {
      const currentIndex = this.sections.indexOf(this.currentSection);
      const nextIndex = (currentIndex + 1) % this.sections.length;
      this.currentSection = this.sections[nextIndex];
    }
  }
  };
  </script>
  
  <style scoped>
 .heading-container h1 {
  margin-top: 4rem;
  text-align: center;
  font-size: 2.5rem;
}

.text-section {
  padding: 5rem;
  position: relative;
  top: -20px;
  background-color: white;
}

.text-section h2 {
  color: black;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.image-section {
  border-radius: 10px;
  overflow: hidden;
}

.image-section img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.menu button {
  margin-top: 2rem;
  border: 1.5px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, border-color 0.3s;
  color: black;
  font-weight: 500;
}

.menu button:hover {
  background-color: #e9f6fa !important;
  color: black !important;
}

.btn-active {
  background: linear-gradient(90deg, #f98b40 10%, #e1396e) !important;
  color: white !important;
  border: none !important;
}

.component-container {
  border: 1.5px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, border-color 0.3s;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
}

.explore-comp-btn {
  color: white;
  background: linear-gradient(90deg, #f98b40 10%, #e1396e);
  border: none;
  padding: 8px 30px;
}

/* Slide-fade transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.btn-slider {
  min-width: 50px;
  font-weight: 500;
}
.slider-container{
    display: none !important;
  }

/* ========== RESPONSIVENESS ========== */

/* Tablets */
@media (max-width: 992px) {
  .text-section {
    padding: 2rem;
  }
  .text-section h2 {
    font-size: 1.7rem;
  }
  .image-section img {
    height: 350px;
  }
 
}

/* Mobile Devices */
@media (max-width: 576px) {
  .row {
    flex-direction: column-reverse;
  }
  .heading-container h1 {
    font-size: 1.8rem;
  }
  .menu {
    display: none !important; /* HIDE MENU ON SMALL SCREEN */
  }
  .text-section {
    padding: 1.5rem;
    text-align: center;
  }
  .text-section h2 {
    font-size: 1.4rem;
  }
  .text-section p {
    font-size: 0.95rem;
  }
  .explore-comp-btn {
    padding: 6px 20px;
    font-size: 0.9rem;
  }
  .image-section img {
    height: 250px;
  }
  .btn-slider {
    font-size: 0.9rem;
    min-width: 40px;
  }
  .slider-container{
    display: flex !important;
  }

}

  </style>