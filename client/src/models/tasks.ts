
import { defineStore } from 'pinia'
import { api } from './myFetch';
import { useSession } from '../models/session';
import { useMessages } from './messages';
import * as users from "./user"

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

        async addTask(task: string, dueDate: string, taskee: string, creator: string){
          const messages = useMessages();
          try {
            const taskToAdd = await this.api('tasks/', {task, dueDate, creator, taskee});
            if(taskToAdd) {
              messages.notifications.push({
                type: "success",
                message: `Task added for ${taskToAdd.taskee}`,
            });
            }

          } catch (error: any) {
            messages.notifications.push({
              type: "danger",
              message: error.message,
          });
          }

        },

        //could not get it to work
        async createTask(task: Task){
          const session = useSession();
          const newTask = await session.api('tasks/', task);
          this.allTasks.push(newTask);
        },

        
        // addTask() {
        //     //add a task
        //     //check if user typed something
        //     const session = useSession();
        //     if (this.text.trim().length == 0) {
             
        //       alert("Please add a task");
        //       return;
        //     }
        //     if (this.target.trim().length == 0) {
            
        //         alert("Please add who to assign to");
        //         return;
        //     }
        //     if (this.date.trim().length == 0) {
             
        //         alert("Please add a date");
        //         return;
        //     }

        
        //     this.allTasks.unshift({
        //       task: this.text,
        //       dueDate: this.date,
        //       creator: session.user?.handle!,
        //       taskee: this.target,
        //       checked: false,
        //     });
        //     this.text = "";
        //     this.date = "";
        //     this.target = "";
        
        // },
        displayTasks()  {
            const session = useSession();
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
            const session = useSession();
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
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', headers?: any) {
          const messages = useMessages();

          try {
              const response = await api(url, data, method, headers);
              if(response.errors?.length) {
                  throw {message: response.errors.join(', ')};
              }
              return await response.data;
          } catch (error: any) {
              messages.notifications.push({
                  type: "danger",
                  message: error.message,
              });
          }
          
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