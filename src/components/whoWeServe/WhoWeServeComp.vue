<template>
    <div class="container my-4">
        <div class="heading-container">
        <h1 >Who We Serve</h1>
        <p>In today`s competitive business landscape, a one-size-fits-all approach to marketing is no longer sufficient. Successful marketing strategies must be tailored to the specific needs, challenges, and goals of each industry. That is why we empower diverse industries with customized, results-driven marketing solutions tailored to their unique needs and goals.</p>

    </div>
      <div class="row">
        <div class="card col-md-12 big-card w-100 mb-3 shadow-sm">
  <div class="card-body">
    <h5 class="card-title">Marketing for Small to Medium Business Owners</h5>
    <p class="card-text">PM is dedicated to helping SMBs achieve their marketing goals with top-notch, industry-specific strategies. We focus on providing exceptional service that fits within their budget.</p>
  </div>
</div>
<div
        v-for="(card, index) in cards"
        :key="index"
        class="col-md-4 mb-4"
      >
        <div class="d-flex align-items-center p-3 shadow-sm card-box"   @click="goToPage(card.route)" style="cursor: pointer;">
          <i :class="`${card.icon} card-icon me-3`"></i>
          <h5 class="mb-0 fw-bold">{{ card.title }}</h5>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script>
  export default {
    name: 'WhoWeServeComp',
    data() {
      return {
        cards: [
  { icon: 'bi bi-star-fill', title: 'Tourism', route: '/contact' },
  { icon: 'bi bi-gear-fill', title: 'Automotive', route: '/' },
  { icon: 'bi bi-heart-fill', title: 'Restaurants', route: '/' },
  { icon: 'bi bi-lightning-fill', title: 'Retail', route: '/' },
  { icon: 'bi bi-globe', title: 'Cleaning Companies', route: '/' },
  { icon: 'bi bi-bar-chart-fill', title: 'Gyms', route: '/' },
  { icon: 'bi bi-shop', title: 'Construction', route: '/' },
  { icon: 'bi bi-phone-fill', title: 'Real Estate', route: '/' },
  { icon: 'bi bi-search', title: 'Healthcare', route: '/' }
]
      };
    },
    methods: {
  goToPage(route) {
    this.$router.push(route);
  }
}
  };
  </script>
  
  <style scoped>
  .heading-container{
    text-align: center;
    margin-bottom: 3rem;
  }
  .heading-container h1{
    margin-bottom: 1.5rem;
  }
  .big-card{  
    padding: 1.5rem;
    padding-bottom: 0%;
    padding-left: 0%;
    padding-right: 0%;
    border: 1.5px solid #ddd; /* Light gray border with thicker width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  transition: transform 0.3s, border-color 0.3s;
    background-color: #fff;
  }
  .big-card h5{
    color:#ea580c;
    letter-spacing: -.025em;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    padding-left: 1rem;
   
    


  }
  .big-card p{
    font-size: 16px;
    padding-top: 0;
    padding: 1rem;
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
    padding-right: 0%;
  }
  
  .card-icon {
  font-size: 1.8rem;
  color: #ea580c;
}
.card-box {
  background-color: #fff;
  border-radius: 8px;
  border: 1.5px solid #ddd; /* Light gray border with thicker width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  transition: transform 0.3s, border-color 0.3s;
}
  
.card-box:hover {
  transform: translateY(-5px);
}
  </style>
  