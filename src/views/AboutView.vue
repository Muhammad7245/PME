<template>
  <div class="about">
    <h1>About Us</h1>
    <p>Learn more about Prime Marketing Experts and our mission to help businesses grow through innovative digital marketing solutions.</p>
  </div>
  <AboutSection/>
</template>
<script>
import AboutSection from '@/components/aboutBanner/AboutSection.vue';

export default{
  components:{AboutSection}
}
</script>
<style>
.about{
text-align: center;
padding-top: 3rem;
padding-bottom: 3rem;
background-color: #fef3f1;
}
.about h1{
  font-size: 3rem;
  font-weight: bold;

}.about p{
  font-size: 1.1rem;
}

</style>