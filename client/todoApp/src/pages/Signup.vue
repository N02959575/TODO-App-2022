<script setup lang="ts"></script>

<template>
<div class="hero is-fullheight">
  <div class="hero-body has-background-light">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child notification is-primary">
              <h1 class="title has-text-centered has-text-primary-light	">Create Your Account</h1>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Username" required/>
                    <span class="icon is-small is-left">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email" required/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" required/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Confirm Password" required/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field has-text-centered">
                <button class="button is-light">
                  Sign Up
                </button>
              </div>
            </div>
            <div class="tile is-child notification is-primary">
              <h1 class="title has-text-centered has-text-primary-light	">Already have an account?</h1>
              <router-link to="/login">
              <div class="field has-text-centered">
                <button class="button is-light" >
                  Login
                </button>
              </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
