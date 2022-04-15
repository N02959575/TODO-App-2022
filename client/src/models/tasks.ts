
import { defineStore } from 'pinia'
import { api } from './myFetch';
import session from "./session"
import * as users from "./user"

//interface Task { task: string, dueDate: string, creator: string, taskee: string, checked: boolean }

export const useTasks = defineStore('tasks', {

    state:() => ({
        isClicked: false,
        currentTab: "All",
        text: "",
        date: "",
        target: "",
        allTasks : [] as Task[],
        forDates: [] as Task[]
    }),
    getters:{

        forDatesSorted: (state) => ({
          forDates : [...state.forDates].sort((a, b)=>{
            return Date.parse(a.dueDate) - Date.parse(b.dueDate);
       })

    })
    },
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
            //displats all completed tasks assign to user or created by them
            switch(this.currentTab) {
                case "Completed"://displays all completed tasks
                  return this.allTasks.filter(function (t) {
                    return t.checked && (t.taskee == session.user?.handle! || t.creator == session.user?.handle!);
                  });
                case "Current"://displays tasks assign to user if not completed
                  return this.allTasks.filter(function (t) {
                    return !t.checked && t.taskee == session.user?.handle!;
                  });
                case "Created"://displays tasks created by user
                  return this.allTasks.filter(function (t) {
                    return t.creator == session.user?.handle! && !t.checked;
                  });
                case "Upcoming"://displays tasks ordered by due date
                  this.forDates = this.allTasks.slice();
                  return this.forDatesSorted.forDates.filter(function (d) {
                     return !d.checked && (d.taskee == session.user?.handle! || d.creator == session.user?.handle!);
                });
                default:
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
        },
        //fetch tasks from server
        async fetchTasks() {
            const tasks = await api('tasks');
            this.allTasks = tasks.data
        }
    }
})

export interface Task {
    task: string,
    dueDate: string,
    creator: string,
    taskee: string,
    checked: boolean
}