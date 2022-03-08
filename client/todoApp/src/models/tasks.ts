
import { defineStore } from 'pinia'

import session from "../models/session"

import * as users from "../models/user"


export const useTasks = defineStore('tasks', {

    state:() => ({
        isClicked: false,
        currentTab: "All",
        text: "",
        date: "",
        target: "",
        allTasks :[
            { task: "Make Bulma great again", dueDate:"4/1/2022", creator: " ", taskee: "@Obodoe", checked: true },
            { task: "Add some more features", dueDate:"4/2/2022", creator: "", taskee: "@johndoe", checked: false },
            { task: "Make a github account", dueDate:"4/3/2022", creator: "users", taskee: "@joannadoe", checked: false },
            { task: " Learn how to use github", dueDate:"4/4/2022", creator: "users", taskee: "@johndoe", checked: false },
            { task: "add a .gitignore file", dueDate:"4/5/2022", creator: "", taskee: "@joannadoe", checked: false },
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
            if (this.target.trim().length == 0) {
            
                alert("Please add who to assign to");
                return;
            }
            if (this.date.trim().length == 0) {
             
                alert("Please add a date");
                return;
            }

        
            this.allTasks.unshift({
              task: this.text,
              dueDate: this.date,
              creator: session.user?.handle!,
              taskee: this.target,
              checked: false,
            });
            this.text = "";
            this.date = "";
            this.target = "";
        
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
          },
        showAddTask() {
            this.isClicked = true
        },
        cancelAddTask() {
            this.isClicked = false
        }
    }


})