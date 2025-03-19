<template>
  <main>
    <Banner/>Explore Prime Marketing Experts
    
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
export default{
  components: {Banner,Solution,AboutSection,Services, WhoWeServeComp, Explore, CaseStudy}
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