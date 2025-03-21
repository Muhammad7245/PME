<template>
  <main>
    <Banner/>
    <div class="spacing">
      <Solution/>
    </div>
    <div class="spacing">
      <AboutSection/>
    </div>
    <div class="spacing">
      <Services/>
    </div>
    <div class="back-color spacing " >
        <WhoWeServeComp/>
        <Explore/>
    </div>
    <div class="spacing">
      <CaseStudy/>
    </div>
    <div class="spacing">
      <Articles/>
    </div>
    <div class="spacing">
      <FAQ/>
    </div>
    <div class="spacing">
      <ContactUs/>
    </div>

 
  </main>
</template>
<script>

import AboutSection from '@/components/aboutBanner/AboutSection.vue';
import Banner from '@/components/homeBanner/Banner.vue';
import Solution from '@/components/marketingSolution/Solution.vue';
import Services from '@/components/ourServices/Services.vue';
import WhoWeServeComp from '@/components/whoWeServe/WhoWeServeComp.vue';
import Explore from '@/components/exploreMarketing/Explore.vue';
import CaseStudy from '@/components/caseStudy/CaseStudy.vue';
import Articles from '@/components/tendingArticles/Articles.vue';
import FAQ from '@/components/faqSection/FAQ.vue';
import ContactUs from '@/components/contactUs/ContactUs.vue';
import Footer from '@/components/footer/Footer.vue';
export default{
  components: {Banner,Solution,AboutSection,Services, WhoWeServeComp, Explore, CaseStudy,Articles,FAQ,ContactUs, Footer}
}
</script>
<style scoped>

.spacing{
  margin-top: 4rem;

}
.back-color{
    background-color:#f9fafb ;
}
</style>