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


const isOpen = ref(false);

function addTask() {
    tasks.addTask(taskToAdd.value, date.value, taskee.value, creator);
}
function submitAndHide() {
    addTask();
    tasks.cancelAddTask();
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