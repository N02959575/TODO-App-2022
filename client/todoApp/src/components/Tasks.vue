<script setup lang="ts">

</script>

<template>
  <nav class="panel">
                <div class="tabs is-boxed">
                  <ul>
                    <li
                      :class="{'is-active': currentTab == 'Current'}"
                      @click="currentTab = 'Current' "
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
                      :class="{'is-active': currentTab == 'Completed'}"
                      @click="currentTab = 'Completed' "
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
                      :class="{'is-active': currentTab == 'Upcoming'}"
                      @click="currentTab = 'Upcoming' "
                    >
                      <a>
                        <span class="icon is-small"
                          ><i class="fas fa-calendar-day" aria-hidden="true"></i
                        ></span>
                        <span>Upcoming</span>
                      </a>
                    </li>
                    <li
                      :class="{'is-active': currentTab == 'All'}"
                      @click="currentTab = 'All' "
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
                  <form
                    @submit="addTask"
                    class="control has-icons-left has-icons-right is-expanded"
                  >
                    <div class="field has-addons is-flex-grow-1">
                      <input
                        class="input is-primary"
                        type="text"
                        placeholder="New Task"
                        v-model="text"
                        name="text"
                      />
                      <span class="icon is-left">
                        <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                      </span>

                      <div class="control">
                        <button class="button is-primary" @click="addTask()">
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <a v-for="x in displayTasks" :key="x.task" class="panel-block">
                  <input type="checkbox" v-model="x.checked" />
                  {{x.task}}
                </a>
              </nav>
</template>

<style>

</style>