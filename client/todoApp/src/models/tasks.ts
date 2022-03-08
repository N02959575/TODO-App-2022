
import { defineStore } from 'pinia'

export const useTasks = defineStore('tasks', {

    state:() => ({
        currentTab: "All",
        text: "",
        allTasks :[
            { task: "Make Bulma great again", checked: true },
            { task: "Add some more features", checked: false },
            { task: "Make a github account", checked: false },
            { task: " Learn how to use github", checked: false },
            { task: "add a .gitignore file", checked: false },
          ]

    }),
    actions:{
        addTask() {
            //add a task
            //check if user typed something
            if (this.text.trim().length == 0) {
             
              alert("Please add a task");
              return;
            }
        
            this.allTasks.unshift({
              task: this.text,
              checked: false,
            });
            this.text = "";
        
        },
        displayTasks()  {
            if (this.currentTab == "Completed") {
              return this.allTasks.filter(function (t) {
              return t.checked;
            });
            }
            //if current tab is active then display unchecked tasks
            if (this.currentTab == "Current") {
              return this.allTasks.filter(function (t) {
                return !t.checked;
              });
            }
            //any other tab displays all
            else {
              return this.allTasks;
            }
          }
    }


})