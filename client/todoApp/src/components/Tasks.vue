<script setup lang="ts">
  import { useTasks } from "../models/tasks";
  import AddTask from "./AddTask.vue";

  const tasks = useTasks();

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
    <a v-for="x in tasks.displayTasks()" :key="x.task" class="panel-block">
      <input type="checkbox" v-model="x.checked" />
       {{x.creator}}
    </a>
  </nav>
</template>

<style>

</style>