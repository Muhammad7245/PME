<template>
    

    <div class="container my-4">
        <div class="heading-container">
        <h1 >Our Services</h1>
        <p>Prime Marketing Experts is a digital marketing and website services company focused on helping small and medium-sized businesses in the Boston area prosper. Since 2017, we’ve served hundreds of companies and thousands of clients, offering a wide range of marketing, branding, and advertising solutions.</p>

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
                <i :class="`${card.icon} card-icon`"></i>
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
        <button class="btn btn-show-more btn-secondary" @click="toggleShowMore">
          {{ showMore ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services',
    data() {
      return {
        showMore: false,
        cards: [
          { icon: 'bi bi-emoji-smile', title: 'Website Development', text: 'Our full-service website development services fit the unique needs of each business and is planned to maximize your results of other marketing initiatives.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-gear', title: 'Marketing Automation', text: 'We increase your sales productivity by using an integrated technology platform with synergistic marketing initiatives to spark your sales growth.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-lightning', title: 'Google Shopping Campaign Services', text: 'We deploy ROI-maximizing processes to strategically implement and manage your Search Engine Advertising Campaigns.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-heart', title: 'SEO Services', text: 'We deploy an integrated, comprehensive strategy to help you raise your search engine rankings for your targeted keywords.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-star', title: 'Social Media Marketing', text: 'We provide social media posting and sponsored ad management services. Our AI-assisted system ensures that we post the right content at the right time!', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-music-note', title: 'Text Message Marketing', text: 'Our full-service text message marketing solution efficiently reaches your customers, as an average of 98% of them are read.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-phone', title: 'Email Marketing', text: 'Engage your customers with customized email campaigns designed to boost engagement and conversions.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-globe', title: 'Content Marketing', text: 'We craft high-quality content to attract and retain a clearly defined audience, driving profitable customer actions.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-bar-chart', title: 'Analytics & Reporting', text: 'Detailed analytics and reports to measure and optimize the performance of your marketing strategies.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-shop', title: 'E-commerce Solutions', text: 'Custom e-commerce solutions to help you sell your products online efficiently and effectively.', buttonText: 'Read More', buttonLink: '#' },
          { icon: 'bi bi-search', title: 'PPC Advertising', text: 'Expert PPC campaign management to drive targeted traffic and maximize your ROI.', buttonText: 'Read More', buttonLink: '#' }
        ]
      };
    },
    computed: {
      displayedCards() {
        return this.showMore ? this.cards : this.cards.slice(0, 6);
      }
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore;
      }
    }
  };
  </script>
  
  <style scoped>
  .service-card{
    border: 1.5px solid #ddd; /* Light gray border with thicker width */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
    transition: transform 0.3s, border-color 0.3s;
    
  }
  .heading-container{
    text-align: center;
    margin-bottom: 3rem;
  }
  .heading-container h1{
    margin-bottom: 1.5rem;
  }
  .card-icon {
    font-size: 2rem;
    color: #ea580c;
    font-weight: bold;
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

  .btn-show-more{
    color:white ;
    background: linear-gradient(90deg, #ffc600 10%, #ff4200);
    border: none;
    padding: 8px 30px;
  }
  </style>
  