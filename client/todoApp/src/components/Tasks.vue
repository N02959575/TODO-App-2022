<script setup lang="ts">
  import { useTasks } from "../models/tasks";

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
    <div class="panel-block" name="newtaskbar">
      <!-- @submit.prevent prevents page from reloading when adding new task -->
      <form
        @submit="tasks.addTask()"
        @submit.prevent 
        class="control has-icons-left has-icons-right is-expanded"
      >
        <div class="field has-addons is-flex-grow-1">
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

          <div class="control">
            <button class="button is-primary" @click="tasks.addTask()" type="button">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
    <a v-for="x in tasks.displayTasks()" :key="x.task" class="panel-block">
      <input type="checkbox" v-model="x.checked" />
      {{x.task}}
    </a>
  </nav>
</template>

<style>

</style>