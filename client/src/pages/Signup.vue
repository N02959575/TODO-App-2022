<script setup lang="ts">
  import { ref } from 'vue';
  import {useSession} from "../models/session";

  const session = useSession();
  const firstName = ref('');
  const lastName = ref('');
  const handle = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const image = ref('');


  function signUp(){
      const username = '@' + handle.value;
      session.signUp(firstName.value, lastName.value, username, email.value, password.value, confirmPassword.value, image.value);
  }
</script>

<template>
<div class="hero is-fullheight">
  <div class="hero-body has-background-light">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child notification is-primary">
              <h1 class="title has-text-centered has-text-primary-light	">Create Your Account</h1>
              <form @submit.prevent="signUp">
              <div class="field">
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="First Name" v-model="firstName" required/>
                    <span class="icon is-small is-left">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                </p>
              </div>
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Last Name" v-model="lastName" required/>
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
                  <input class="input" type="text" placeholder="Username" v-model="handle"  required/>
                    <span class="icon is-small is-left">
                      <i class="fa-solid fa-id-badge"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email" v-model="email" required/>
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
                  <input class="input" type="password" placeholder="Password" v-model="password" required/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Confirm Password" v-model="confirmPassword" required/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Image Link" v-model="image" required/>
                    <span class="icon is-small is-left">
                      <i class="fa-solid fa-image-portrait"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                </p>
              </div>
              <div class="field has-text-centered">
                <button class="button is-light">
                  Sign Up
                </button>
              </div>
              Already have an account? <a href="/login">Login</a>
              </form>
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
