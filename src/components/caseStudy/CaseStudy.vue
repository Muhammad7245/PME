<template>
    <div class="container my-4">
      <div class="heading-container">
        <h1>Our Services</h1>
        <p>
          Prime Marketing Experts is a digital marketing and website services company focused on helping small and medium-sized businesses in the Boston area prosper.
        </p>
      </div>
  
      <div class="row">
        <div
          v-for="(card, index) in displayedCards"
          :key="index"
          class="col-md-4 mb-4 d-flex align-items-stretch"
        >
          <div class="card service-card text-center h-100 shadow-sm card-hover">
            <div class="card-body d-flex flex-column">
              <div class="mb-3">
                <img :src="card.image" alt="Card Image" class="card-image" />
              </div>
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text flex-grow-1">{{ card.text }}</p>
              <a :href="card.buttonLink" class="btn card-btn mt-auto">
                <span>{{ card.buttonText }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="text-center mt-3">
        <router-link to="/all-services">
          <button class="btn btn-show-more btn-secondary">
            Show More
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CaseStudy',
    data() {
      return {
        cards: [
          {
            image: "explore_image_2.png",
            title: "Website Development",
            text: "Our full-service website development services fit the unique needs of each business.",
            buttonText: "Read More",
            buttonLink: "#",
          },
          {
            image: "explore_image_1.png",
            title: "Marketing Automation",
            text: "We increase your sales productivity by using an integrated technology platform.",
            buttonText: "Read More",
            buttonLink: "#",
          },
          {
            image: "explore_image_3.png",
            title: "Google Shopping Campaign",
            text: "ROI-maximizing processes to strategically implement and manage campaigns.",
            buttonText: "Read More",
            buttonLink: "#",
          },
          {
            image: "image4.png",
            title: "SEO Services",
            text: "We deploy an integrated strategy to help you raise search engine rankings.",
            buttonText: "Read More",
            buttonLink: "#",
          },
          {
            image: "image5.png",
            title: "Social Media Marketing",
            text: "AI-assisted system ensures we post the right content at the right time!",
            buttonText: "Read More",
            buttonLink: "#",
          },
          {
            image: "image6.png",
            title: "Text Message Marketing",
            text: "Full-service text marketing solution efficiently reaches your customers.",
            buttonText: "Read More",
            buttonLink: "#",
          },
        ],
      };
    },
    computed: {
      displayedCards() {
        return this.cards;
      },
    },
  };
  </script>
  
  <style scoped>
  .service-card {
    border: 1.5px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, border-color 0.3s;
  }
  
  .heading-container {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .heading-container h1 {
    margin-bottom: 1.5rem;
  }
  
  .card-image {
    width: 100%;
    object-fit: contain;
    margin: 0 auto;
  }
  
  .card-hover:hover {
    transform: scale(1.06);
    transition: transform 0.6s;
  }
  
  .card-btn {
    width: 10vw;
    margin: 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    color: #ea580c;
    font-weight: 500;
    background-color: white;
    border: none;
    overflow: hidden;
  }
  
  .card-btn span {
    position: relative;
  }
  
  .card-btn::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    height: 2px;
    background-color: #ea580c;
    transform: translateX(-50%);
    transition: all 0.6s ease;
  }
  
  .card-btn:hover::before {
    width: 100%;
    left: 0;
    transform: translateX(0);
  }
  
  .card-btn:not(:hover)::before {
    width: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .btn-show-more {
    color: white;
    background: linear-gradient(90deg, #ffc600 10%, #ff4200);
    border: none;
    padding: 8px 30px;
  }
  </style>
  
