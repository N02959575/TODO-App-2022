<script setup lang="ts">
  import { ref } from 'vue';
  import LoginBadge from './LoginBadge.vue';
import Messages from './Messages.vue';

    
  const isOpen = ref(false);
</script>

<template>
         <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" >
          <img
            src="../assets/dragonball.png"
            alt="random logo"
            
          />
        </a>
        <a role="button" 
          class="navbar-burger"
          aria-label="menu" 
          aria-expanded="false" 
          :class="{ 'is-active': isOpen }" 
          @click="isOpen = !isOpen">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div class="navbar-menu"  :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
          <router-link class="navbar-item" to="/tasktracker">
            Task Tracker
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/about">
                About
              </router-link>
              <a class="navbar-item">
                Jobs
              </a>
              <router-link class="navbar-item" to="/contact">
                Contact
              </router-link>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <login-badge />
          </div>

          <messages/>

          <div class="navbar-item">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped>
img {
            width: 48px;
            height: 48px;
            max-height: max-content;
            border-radius: 10%;
            overflow: hidden;
            object-fit: cover;
        }
</style>