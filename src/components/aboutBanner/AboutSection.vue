<template>
    <div class="main-container">
        <div class="top">
            <div class="image-container"><img src="/public/about_banner_1.png" alt=""></div>
            <div class="top-content">
                <h1>Prime Marketing Experts was founded in 2017 by Michael Krieger, a native Bostonian.</h1>
                <blockquote>“As an entrepreneur myself, I am dedicated to helping small businesses grow their business and online presence. We have many tools to choose from to help SMBs grow, BUT one thing is for certain, the foundation of all successful online businesses is one’s website. Without a strong website that has a clear message and brand that is built to attract the targeted audience... maintaining an online presence in this ever-competitive marketplace is almost impossible.”</blockquote>
            </div>
         </div>
         <div class="bottom-content">
            <h2>Meet Michael</h2>
            <p>Prime Marketing Experts has served for over 7 years, helping hundreds of companies in the Boston area. After earning his Master of Science at the University of Massachusetts, Lowell, Michael built a company that has become a one-stop marketing shop for small to medium-sized companies and their marketing needs. PME excels at creating robust websites, social media campaigns, email campaigns, LinkedIn partnerships, Bing and Google Ads, and more.</p>
            <blockquote>“Every day, I see that what truly separates us from other marketing firms is our dedication to effectively building relationships with key potential clients over time. For us, being a relationship-driven marketing firm means always prioritizing long-term, meaningful connections over traditional transactional approaches.”</blockquote>
         </div>
        

    </div>
</template>
<script>
export default{
  name:'AboutSection',
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f3f4f6;
}

.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px;
}

.image-container {
  flex: 1;
  padding: 20px;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.top-content {
  flex: 2;
  padding: 20px;
}

.top-content h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.top-content blockquote {
  font-style: italic;
  color: #555;
  border-left: 4px solid #f50505;
  padding-left: 16px;
}

.bottom-content {
  width: 100%;
  max-width: 1160px;
  text-align: center;
}

.bottom-content h2 {
    text-align: left;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.bottom-content p {
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.bottom-content blockquote {
    text-align: left;
  font-style: italic;
  color: #555;
  border-left: 4px solid #f50505;
  padding-left: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .top {
    flex-direction: column;
  }

  .top-content {
    text-align: center;
  }
}
</style>