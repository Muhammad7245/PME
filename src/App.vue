<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/footer/Footer.vue';

const isMenuOpen = ref(false);
</script>

<template>
  <header>
    <div class="logo-container">
      <RouterLink to="/">
        <img alt="logo" class="logo" src="/src/assets/logos/Untitled design.webp" />
      </RouterLink>
    </div>

    <!-- Hamburger Menu Button -->
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </button>

    <!-- Navigation Links -->
    <nav :class="{ open: isMenuOpen }">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/whoweserve">Who We Serve</RouterLink>
      <RouterLink to="/business">Business</RouterLink>
      <RouterLink to="/marketing">Marketing</RouterLink>
      <RouterLink to="/technology">Technology</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <button class="strategy-btn">Free Strategy Session</button>
  </header>

  <RouterView />
  <Footer />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;
  flex-wrap: wrap;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 140px;
  height: auto;
}

/* Hamburger Menu */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: 0.4s;
  border-radius: 2px;
}

.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Nav Links */
nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.3s ease;
}

nav a {
  display: inline-flex;
  padding: 10px 15px;
  border-radius: 6px;
  color: black;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
  color: #f97316;
  background-color: #fff7ed;
}

.strategy-btn {
  background-color: #f87215;
  color: white;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.3s ease;
}

/* Hover */
.strategy-btn:hover {
  background-color: #dd650f;
}

/* Responsive Styling */
@media (max-width: 992px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
  }

  .menu-toggle {
    display: flex;
  }

  nav {
    flex-direction: column;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    margin-top: 1rem;
  }

  nav.open {
    max-height: 500px;
    opacity: 1;
  }

  nav a {
    width: 100%;
    text-align: left;
  }

  .strategy-btn {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
