
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
            { task: "Make Bulma great again", dueDate:"2022-4-19", creator: "@johndoe", taskee: "@Obodoe", checked: true },
            { task: "Add some more features", dueDate:"2022-4-8", creator: "@deborahdoe", taskee: "@johndoe", checked: false },
            { task: "Make a github account", dueDate:"2022-4-3", creator: "@Obodoe", taskee: "@deborahdoe", checked: false },
            { task: " Learn how to use github", dueDate:"2022-4-10", creator: "@deborahdoe", taskee: "@johndoe", checked: false },
            { task: "add a .gitignore file", dueDate:"2022-4-1", creator: "@Obodoe", taskee: "@deborahdoe", checked: false },
          ],
        forDates: [{}]
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
                        return t.checked && (t.taskee == session.user?.handle! || t.creator == session.user?.handle!);
                    
                    });
                
            }
            //displays tasks assign to user if not completed
            if (this.currentTab == "Current") {
              return this.allTasks.filter(function (t) {
                return !t.checked && t.taskee == session.user?.handle!;
              });
            }
            //displays all tasks created by user
            if (this.currentTab == "Created") {
                return this.allTasks.filter(function (t) {
                  return t.creator == session.user?.handle! && !t.checked;
                });
              }
            //displays tasks ordered by date
            if (this.currentTab == "Upcoming") {
                this.forDates = this.allTasks.slice();
                 this.forDates.sort((a, b)=>{
                     //error here but once the code runs it works cause it is no longer empty
                     return Date.parse(a.dueDate) - Date.parse(b.dueDate);
                })
                return this.forDates.filter(function (t) {
                     return !t.checked && (t.taskee == session.user?.handle! || t.creator == session.user?.handle!);
                
                 });;
            }
            //any other tab displays all tasks created by user or assigned to user, completed or not 
            else {
              //return this.allTasks;
              return this.allTasks.filter(function (t){
                return t.taskee == session.user?.handle! || t.creator == session.user?.handle!;
            });
            }
          },
        filterTasksByTaskee(){
            return this.allTasks.filter(function (t){
                return t.taskee == session.user?.handle! && t.checked;
            });
            
        },
        showAddTask() {
            this.isClicked = true
        },
        cancelAddTask() {
            this.isClicked = false
        },
        displayUsers(){
            return users.list.map(function(u){
                return u.handle
            })
        }
    }


})