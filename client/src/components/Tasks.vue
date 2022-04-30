<script setup lang="ts">
  import { useTasks } from "../models/tasks";
  import AddTask from "./AddTask.vue";

  const tasks = useTasks();
  tasks.fetchTasks();

</script>

<template>
  <nav class="panel">
    <div class="tabs is-boxed">
      <ul>
        <li
          :class="{'is-active': tasks.currentTab == 'Current'}"
          @click="tasks.currentTab = 'Current' "
        >
          <a>
            <span class="icon is-small"
              ><i
                class="fas fa-clipboard-list"
                aria-hidden="true"
              ></i
            ></span>
            <span>Current</span>
          </a>
        </li>
         <li
          :class="{'is-active': tasks.currentTab == 'Created'}"
          @click="tasks.currentTab = 'Created' "
        >
          <a>
            <span class="icon is-small"
              >
              <i
                class="fa-solid fa-pen-clip"
                aria-hidden="true"
              ></i
            ></span>
            <span>Created</span>
          </a>
        </li>
        <li
          :class="{'is-active': tasks.currentTab == 'Completed'}"
          @click="tasks.currentTab = 'Completed' "
        >
          <a>
            <span class="icon is-small"
              ><i
                class="fas fa-calendar-times"
                aria-hidden="true"
              ></i
            ></span>
            <span>Completed</span>
          </a>
        </li>
        <li
          :class="{'is-active': tasks.currentTab == 'Upcoming'}"
          @click="tasks.currentTab = 'Upcoming' "
        >
          <a>
            <span class="icon is-small"
              ><i class="fas fa-calendar-day" aria-hidden="true"></i
            ></span>
            <span>Upcoming</span>
          </a>
        </li>
        <li
          :class="{'is-active': tasks.currentTab == 'All'}"
          @click="tasks.currentTab = 'All' "
        >
          <a>
            <span class="icon is-small"
              ><i class="fas fa-calendar" aria-hidden="true"></i
            ></span>
            <span>All</span>
          </a>
        </li>
      </ul>
    </div>
     <AddTask/>
    <a v-for="x in tasks.displayTasks()" :key="x.task" class="panel-block" >
      <p class="control">
      <input type="checkbox" v-model="x.checked" />
      <span v-if="tasks.currentTab == 'Current'">
        {{x.task}} <br> Due date: {{x.dueDate}} <br> Created by: {{x.creator}}  
      </span>
      <span v-else-if="tasks.currentTab == 'Created'">
        {{x.task}} <br> Due date: {{x.dueDate}} <br> Assign to: {{x.taskee}}  
      </span>
      <span v-else-if="tasks.currentTab == 'Completed'">
        {{x.task}} <br> Due date: {{x.dueDate}} <br> Completed by: {{x.taskee}}  
      </span>
      <span v-else>
        {{x.task}} <br> Due date: {{x.dueDate}} <br> Created by {{x.creator}} <br> Assign to: {{x.taskee}}
      </span>
      </p>
      
      <p class="field is-grouped is-grouped-right">
        <button class="button is-danger is-rounded" @click="tasks.deleteTask(x)">Delete Task</button>
      </p>
      
      
       
    </a>
  </nav>
</template>

<style>

</style>