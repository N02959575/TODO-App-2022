import { defineStore } from 'pinia'
import { useMessages } from './messages';
import { useSession } from '../models/session';
import { api } from './myFetch';

export const useUser = defineStore('users', {
    state: () => ({
        list: [] as User[]
    }),
    actions: {

        //oruga autocomplete
        async getUsersAutoComplete(search: string) {
            const session = useSession();
            const users = await session.api('users/search/', { search });
            this.list = users;
            return this.list.filter(option => {
                return (
                    option
                    .toString()
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) >= 0
                );
            }
            );
        },

        async getUsers() {
            const users = await this.api('users');
            this.list = users;
        },
        // display users except for session user
        displayUsersList(){
            const session = useSession();
            return this.list.filter(function (t){
                return t.handle != session.user?.handle!;
            });;   
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


export interface User{

    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    token?: string; // ? means optional property (allowed to be null or skipped)
}
