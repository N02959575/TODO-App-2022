
<script setup lang="ts">
import { Login } from '../models/session';


function badlogin(){
    Login('Andres Mena', 'meme')
}

function login1(){
    Login('@deborahdoe', 'password')
}

const username = ""
const password = ""

</script>

<template> 
   <div class="hero is-fullheight">
  <div class="hero-body has-background-light">
    <div class="container">
      For Testing: <br>
      In the user name field enter: <br>
        @johndoe <br>
        @deborahdoe <br>
        or <br>
        @obodoe <br>
        The password for all is password
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="card has-background-primary">
            <div class="card-content">
              <h1 class="title has-text-centered has-text-primary-light	">Login To Your Account</h1>
              <form @submit="Login(username, password)" >
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Enter username or email" v-model="username" required/>
                    <span class="icon is-small is-left">
                      <i class="fa-solid fa-id-card"></i>
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
              <div class="field has-text-centered">
                
                <button class="button is-light">
                  Login
                </button>
              
              </div>
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
    .background {
        background-image: url('../assets/loginBackground.jpg');
        background-size: 100% auto;
}
</style>