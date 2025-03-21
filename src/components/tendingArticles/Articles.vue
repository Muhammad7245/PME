<template>
    <div class="container my-4">
      <div class="heading-container">
        <h1>Trending Articles</h1>
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
              <div class="content-body">
                <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text flex-grow-1">{{ card.text }}</p>
              <a :href="card.buttonLink" class="btn card-btn mt-auto">
                <span>{{ card.buttonText }} →</span>
              </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
  
      <div class="text-center mt-3">
        <router-link to="/blog">
          <button 
  class="btn btn-show-more btn-secondary" 
  @click="handleShowMore"
>
  {{ $route.path === '/blog' ? 'Load More Articles' : 'Show More' }}
</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>



  export default {
    name: 'Articles',
    components:{},
    data() {
      return {
        cards: [
          {
            image: "case1.png",
            title: "How To Grow Your Business By Planning & Hosting Events",
            text: "Event hosting is a great way of promote your business as it helps you build trust with your targeted customers. Businesses should plan...",
            buttonText: "Read More",
            buttonLink: "/case-business",
          },
          {
            image: "explore_image_1.png",
            title: "The 6 Most Effective Methods to Differentiate Your Business",
            text: "Event hosting is a great way of promote your business as it helps you build trust with your targeted customers. Businesses should plan...",
            buttonText: "Read More",
            buttonLink: "#",
          },
          {
            image: "explore_image_3.png",
            title: "The 7 Key Attributes That Your Business Needs In Its Next Salesperson",
            text: "Event hosting is a great way of promote your business as it helps you build trust with your targeted customers. Businesses should plan...",
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
    methods: {
  handleShowMore() {
    if (this.$route.path === '/blog') {
      // Custom functionality when on /blog
      alert('Different functionality on Blog Page!');
      // Example: Scroll to top or load more articles, etc.
    } else {
      // Default behavior: navigate to /blog
      this.$router.push('/blog');
    }
  },
}
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
  font-size: 2.5rem;
}

.card-body {
  padding: 0%;
}

.content-body {
  padding: 10px;
}

.content-body h5 {
  text-align: left;
  font-size: 1.2rem;
}

.content-body p {
  text-align: left;
  font-size: 0.95rem;
}

.card-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  margin: 0 auto;
}

.card-btn {
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 16px;
  color: #ea580c;
  font-weight: 500;
  background-color: white;
  border: none;
}

.card-btn span {
  position: relative;
}

.btn-show-more {
  color: white;
  background: linear-gradient(90deg, #ffc600 10%, #ff4200);
  border: none;
  padding: 8px 30px;
}

/* ---------------------- */
/* RESPONSIVE CHANGES */

/* Single Card per Row < 992px */
@media (max-width: 992px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .heading-container h1 {
    font-size: 2rem;
  }

  .content-body h5 {
    font-size: 1rem;
  }

  .content-body p {
    font-size: 0.9rem;
  }

  .card-image {
    height: 12rem;
  }

  .card-btn {
    font-size: 0.9rem;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .heading-container h1 {
    font-size: 1.8rem;
  }

  .content-body h5 {
    font-size: 0.95rem;
    text-align: center;
  }

  .content-body p {
    font-size: 0.85rem;
    text-align: center;
  }

  .card-image {
    height: 10rem;
  }

  .card-btn {
    font-size: 0.85rem;
    justify-content: center;
    width: 100%;
  }

  .btn-show-more {
    padding: 6px 20px;
    font-size: 0.9rem;
  }
}

  </style>
  
