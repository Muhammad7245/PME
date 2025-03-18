<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <RouterLink to="/"><img alt="logo" class="logo" src="\src\assets\logos\Untitled design.webp" width="125" height="125" /></RouterLink>
    

    <nav>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/whoweserve">Who We Serve</RouterLink>
        <RouterLink to="/business">Business</RouterLink>
        <RouterLink to="/marketing">Marketing</RouterLink>
        <RouterLink to="/technology">Technology</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
       

      </nav>
      <button>Free Strategy Session</button>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 10rem;
  background-color: #ffffff; /* White background */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  flex-wrap: wrap; /* For smaller screens */
}

.logo {
  width: 180px;
  height: 56px;

}


nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
nav a {
  display: inline-flex;
  height: 40px;
  width: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 8px;
  background-color: transparent;
  color: black;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
}

nav a:hover {
  color: #f97316; /* orange */
  background-color: #fff7ed; /* light orange bg */
}

nav a:focus {
  background-color: #f3f4f6; /* subtle grey focus bg */
  color: #1f2937; /* dark text on focus */
  outline: none;
}

nav a:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Optional: Active and Open State (if you are using data attributes) */
nav a[data-active="true"],
nav a[data-state="open"] {
  background-color: rgba(255, 165, 0, 0.1); /* light accent bg */
}

button {
  background-color: #f87215;
  color: white;
  padding: 0.6rem 2rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0rem;
  font-size: 15px;
}

button:hover {
  background-color: #dd650f ;

}

/* Responsive for mobile */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }

  nav {
    margin-top: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    margin-top: 1rem;
  }
}

</style>
