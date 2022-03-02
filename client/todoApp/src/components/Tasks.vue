<script setup lang="ts">
  import { ref, reactive, onMounted, computed } from "vue";


  const message = ref ("Hello Vue!");
  const currentTab = ref ("All");
  const text = ref ("");
  const allTasks = reactive([
    { task: "Make Bulma great again", checked: true },
    { task: "Add some more features", checked: false },
    { task: "Make a github account", checked: false },
    { task: " Learn how to use github", checked: false },
    { task: "add a .gitignore file", checked: false },
  ]);
        
  function addTask() {
    //add a task
    //check if user typed something
    if (text.value.trim().length == 0) {
     
      alert("Please add a task");
      return;
    }

    allTasks.unshift({
      task: text.value,
      checked: false,
    });

    text.value = "";
  };

  function displayTasks()  {
      if (currentTab.value == "Completed") {
        return allTasks.filter(function (t) {
        return t.checked;
      });
      }
      //if current tab is active then display unchecked tasks
      if (currentTab.value == "Current") {
        return allTasks.filter(function (t) {
          return !t.checked;
        });
      }
      //any other tab displays all
      else {
        return allTasks;
      }
    }
        
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
                    @submit="addTask()"
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
                        <button class="button is-primary" @click="addTask()" type="button">
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <a v-for="x in displayTasks()" :key="x.task" class="panel-block">
                  <input type="checkbox" v-model="x.checked" />
                  {{x.task}}
                </a>
  </nav>
</template>

<style>

</style>