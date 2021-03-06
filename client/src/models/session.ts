import router from "../router";
import { defineStore } from 'pinia';
import { useMessages } from './messages';
import * as users from "./user";
import { api } from './myFetch';

export const useSession = defineStore( 'session', {
    state: () => ({
        user: null as users.User | null,
        destinationUrl: null as string | null,
    }),
    
    actions: {
        //function for logging in
        async Login(email: string, password: string) {
    
            const messages = useMessages();
        
            try {
                const user = await this.api("users/login", { email, password });
                console.log(user);
                if(user) {

                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}`,
                    });
                
                    this.user = user;
                    router.push(this.destinationUrl ?? '/tasktracker');
                }
                
            } catch (error: any) {
                
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
            
        },

        Logout(){
            this.user = null;
            router.push('/login')
        },
        // function for signup
        async signUp(firstName: string, lastName: string, handle: string, email: string, password: string, confirmPassword: string, pic: string) {
            const messages = useMessages();
            try {
                if(password !== confirmPassword) {
                    messages.notifications.push({
                        type: "danger",
                        message: "Passwords do not match",
                    });
                } else {
                    const user = await this.api("users/", { firstName, lastName, handle, email, password, pic });
                    if(user) {
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome ${user.firstName}`,
                    });
                    this.user = user;
                    }
                    router.push(this.destinationUrl ?? '/tasktracker');
                }
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: any = {}) {//gave headers a default value
            const messages = useMessages();

            if(this.user?.token) {//if user has a token
                headers.Authorization = `Bearer ${this.user.token}`;
            }

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
    },
})

export interface ApiResult {
    data: any;
    errors?: string[];
    success: boolean;
}