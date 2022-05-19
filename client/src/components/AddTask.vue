<script setup lang="ts">
import { ref } from 'vue';
import { useTasks, Task } from "../models/tasks";
import {useSession} from "../models/session";
import { useUser } from "../models/user"

const session = useSession();

const users = useUser();
users.getUsers();

const tasks = useTasks();
const taskToAdd = ref('');
const date = ref('');
const taskee = ref('');
const creator = session.user?.handle!;

const input = ""
//const data: [],
const selected =  null;
const isFetching =  false;
const name = ref('');
const page =  1;
const totalPages =  1;


const isOpen = ref(false);

function addTask() {
    tasks.addTask(taskToAdd.value, date.value, taskee.value, creator);
}
function submitAndHide() {
    addTask();
    tasks.cancelAddTask();
    tasks.fetchTasks();
}


</script>

<template>

<div >
    <div class="has-text-centered">
        <button class="button is-primary" type="button" @click="tasks.showAddTask">
            Create New Task
        </button>
    </div>


    <div class="panel-block" v-show="tasks.isClicked">
    
    <!-- @submit.prevent prevents page from reloading when adding new task -->
    <form
        @submit.prevent="submitAndHide" 
        class="control has-icons-left has-icons-right is-expanded"
    >
        <div class="field">
            <p class="control has-icons-left has-icons-right">
            <input
                class="input is-primary"
                type="text"
                placeholder="New Task"
                v-model="taskToAdd"
                name="text"
                required
            />
            <span class="icon is-left">
            <i class="fas fa-calendar-plus" aria-hidden="true"></i>
            </span>
            </p>
        </div>

        <div class="field">
            Assign to.. <br>
            <div class="select is-primary">
                <select v-model="taskee">
                    <option disabled value="">Select user</option>
                    <option v-for="x in tasks.displayUsers()" :key="x">
                        {{x}}
                    </option>
                    
                </select>
            </div>
        </div>

        <!-- <div class="field"> -->
<!-- for oruga autocomplete -->
<!-- user search -->
<!-- 
            <p class="control has-icons-left has-icons-right">
            <input
                class="input has-dropdown is-primary"
                type="search"
                placeholder="Search..."
                v-model="input"
                name="text"
                required
            />
            <span class="icon is-left">
            <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            </p>
            
            <div class="select is-primary">
                <select v-model="taskee">
                    <option disabled value="">Select user</option>
                    <option v-for="x in users.getUsersAutoComplete(input)" :key="x.toString">
                        {{x}}
                    </option>
                    
                </select>
            </div>

        </div>

        <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Find a User">
      <o-autocomplete
        :data="users.list"
        placeholder="Search"
        field="title"
        :loading="isFetching"
        check-infinite-scroll
        :debounce-typing="500"
        @typing="users.getUsersAutoComplete(input)"
      >
        <template v-slot="props">
          <div class="media">
            <div class="media-left">
              <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`" />
            </div>
            <div class="media-content">
              {{ props.option.title }}
              <br />
              <small> Released at {{ props.option.release_date }}, rated <b>{{ props.option.vote_average }}</b> </small>
            </div>
          </div>
        </template>
        <template  v-slot="footer">
          <span v-show="page > totalPages" class="has-text-grey"> Thats it! No more movies found. </span>
        </template>
      </o-autocomplete>
    </o-field> -->

<!-- end user search -->        

         <div class="field">
             Due date.. <br>
             <p class="control has-icons-left has-icons-right">
            <input
                class="input is-primary"
                type="date"
                placeholder="Assign date mm/dd/yyyy"
                v-model="date"
                name="text"
                required
            />
            <span class="icon is-left">
            <i class="fa-solid fa-calendar-check" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        
              
              <div class="field">
                  <div class="buttons">
                  <button class="button is-primary" @click="submitAndHide"  type="button">
                    Add Task
                </button>
                
                <button class="button is-danger" type="button" @click="tasks.cancelAddTask">
                    Cancel
                </button>
                </div>
              </div>

              <div class="field">
                  
              </div>

              
    </form>
    </div>
</div>


</template>

<style>

</style>