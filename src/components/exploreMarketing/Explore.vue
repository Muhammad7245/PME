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
    <div class="d-flex justify-content-center gap-4 mt-4">
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
  .heading-container h1{
    margin-top: 4rem;
    text-align: center;
  }
  .text-section{
   padding: 5rem;
   position: relative;
    top: -20px;
   background-color:white ;
  }
  .text-section h2 {
    color: black;
    margin-bottom: 1rem;
  }
  .image-section {
 border-radius: 10px;
 overflow: hidden;
 
}
  .image-section img
  {
  width: 100%;
  height: 450px;

  }

  .menu button {
    margin-top: 2rem;
  }
  .component-container{
    border: 1.5px solid #ddd; /* Light gray border with thicker width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  transition: transform 0.3s, border-color 0.3s;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  }
  .explore-comp-btn{
    color:white ;
    background: linear-gradient(90deg, #f98b40 10%, #e1396e);
    border: none;
    padding: 8px 30px;
  }
  .menu button {
    margin-top: 2rem;
    border: 1.5px solid #ddd; /* Light gray border with thicker width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  transition: transform 0.3s, border-color 0.3s;
  color: black;
  font-weight: 500;
}
.menu button:hover {
  background-color: #e9f6fa !important; /* Light blue */
  color: black !important; /* Optional: Adjust text color if needed */

}

.btn-active {
    background: linear-gradient(90deg, #f98b40 10%, #e1396e) !important;
  color: white !important;
  border: none !important;
}
/* Slide-fade transition */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter {
  transform: translateX(100%); /* Start from right */
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%); /* Exit to left */
  opacity: 0;
}
.btn-slider {
  min-width: 50px;
  font-weight: 500;
}
  </style>