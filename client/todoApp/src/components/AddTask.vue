<script setup lang="ts">
import { ref } from 'vue';
import { useTasks } from "../models/tasks";

const tasks = useTasks();
const isOpen = ref(false);
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
        @submit="tasks.addTask()"
        @submit.prevent 
        class="control has-icons-left has-icons-right is-expanded"
    >
        <div class="field">
            <p class="control has-icons-left has-icons-right">
            <input
                class="input is-primary"
                type="text"
                placeholder="New Task"
                v-model="tasks.text"
                name="text"
            />
            <span class="icon is-left">
            <i class="fas fa-calendar-plus" aria-hidden="true"></i>
            </span>
            </p>
        </div>

        <div class="field">
            Assign to.. <br>
            <div class="select is-primary">
                <select v-model="tasks.target">
                    <option disabled value="">Select user</option>
                    <option v-for="x in tasks.displayUsers()" :key="x">
                        {{x}}
                    </option>
                    
                </select>
            </div>
        </div>

         <div class="field">
             <p class="control has-icons-left has-icons-right">
            <input
                class="input is-primary"
                type="text"
                placeholder="Assign date mm/dd/yyyy"
                v-model="tasks.date"
                name="text"
            />
            <span class="icon is-left">
            <i class="fa-solid fa-calendar-check" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        
              
              <div class="field">
                  <div class="buttons">
                  <button class="button is-primary" @click="tasks.addTask()" type="button">
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