<template>
    <div class="banner-container">
      <div
        class="slide"
        :style="{ backgroundImage: `url(${images[currentIndex]})` }"
      >
        <div class="overlay">
          <div class="content">
            <h1>Driving Excellence With Superior Marketing Solutions</h1>
            <p>We are a full service relationship-driven marketing firm. We craft connections, to drive results with integrated, customized solutions that maximize ROI for our clients. We are focused on serving Small and Medium size businesses that need quality and affordable marketing solutions to help them grow and compete effectively in today`s complex digital landscape..</p>
            <button @click="navigate">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Banner',
    data() {
      return {
        images: [
          'banner_image_1.png',
          'banner_image_2.png',
          'Banner_image_3.png',
        ],
        currentIndex: 0,
        interval: null
      };
    },
    mounted() {
      this.startSlide();
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
    methods: {
      startSlide() {
        this.interval = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 6000);
      },
      navigate() {
        this.$router.push('/contact'); // Change to any route you prefer
      }
    }
  };
  </script>
  
  <style scoped>
  .banner-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: background-image 1s ease-in-out;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.4); /* Semi-transparent dark overlay */
    backdrop-filter: blur(4px); /* Blur effect */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;
  }
  
  .content {
    color: white;
    max-width: 500px;
  }
  
  .content h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .content p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .content button {
    padding: 0.8rem 1.5rem;
    background: linear-gradient(90deg, #ffc600 10%, #ff4200);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  }
  
  .content button:hover {
    .content button:hover {
        background: linear-gradient(90deg, #ffc600 10%, #ff4200); /* Slightly darker shades */
}
  }
  
  @media (max-width: 768px) {
    .overlay {
      padding-left: 20px;
    }
    .content h1 {
      font-size: 1.8rem;
    }
    .content p {
      font-size: 1rem;
    }
  }
  </style>
  