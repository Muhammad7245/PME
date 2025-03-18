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

 
  </main>
</template>
<script>

import AboutSection from '@/components/aboutBanner/AboutSection.vue';
import Banner from '@/components/homeBanner/Banner.vue';
import Solution from '@/components/marketingSolution/Solution.vue';
import Services from '@/components/ourServices/Services.vue';
export default{
  components: {Banner,Solution,AboutSection,Services}
}
</script>
<style scoped>

.spacing{
  margin-top: 4rem;
}
</style>