
<script setup lang="ts">
import { ref } from 'vue';
import {useSession} from "../models/session";

const session = useSession();
const email = ref('');
const password = ref('');

function login(){
    session.Login(email.value, password.value);
}

// function login1(){
//     session.Login('email@email.com', 'password')
// }

// function login2(){
//     session.Login('deborah@email.com', 'password')
// }

// function login3(){
//     session.Login('@obodoe', 'password')
// }

</script>

<template> 
   <div class="hero is-fullheight">
  <div class="hero-body has-background-light">
    <div class="container">
      For Testing: <br>
      In the email field enter: <br>
        email@email.com <br>
        deborah@email.com <br>
        or <br>
        Obo@email.com <br>
        The password for all is password
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="card has-background-primary">
            <div class="card-content">
              <h1 class="title has-text-centered has-text-primary-light	">Login To Your Account</h1>
              <form @submit.prevent="login">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Enter email" v-model="email" required/>
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
              <!-- dont have an account? -->
              Don't have an account? <a href="/signup">Sign up</a>
              </form>
              <!-- added for heroku
               <div class="buttons">
                  <button class="button is-light" @click="login1()">
                  John
                </button>
                <button class="button is-light" @click="login2()">
                  Deborah
                </button>
                <button class="button is-light" @click="login3()">
                  Obo
                </button>
               </div> -->
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