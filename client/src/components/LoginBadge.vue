<script setup lang="ts">
    import { useSession } from "../models/session";
    import { useTasks } from "../models/tasks";

    const session = useSession();
    const tasks = useTasks();
</script>

<template>
    <div class="buttons" v-if="!session.user">
        <router-link class="button is-light" to="/signup">
            <strong>Sign up</strong>
        </router-link>
        <router-link class="button is-light" to="/login">
            <strong>Log in</strong>
        </router-link>
    </div>
    <div class="buttons" v-else>
        <div class="avatar">
            <img :src="session.user.pic" />
            <div>
                <strong>{{ session.user.firstName }} {{ session.user.lastName }}</strong> <br />
                <i>{{ session.user.email }}</i>
            </div>
        </div>
        <a class="button is-light" @click="session.Logout();tasks.currentTab = 'All'">
            <strong>Log out</strong>
        </a>
    </div>
</template>

<style scoped lang="scss">
    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .5em;
        gap: .5em;
        line-height: 1em;
        img {
            width: 48px;
            height: 48px;
            max-height: max-content;
            border-radius: 10%;
            overflow: hidden;
            object-fit: cover;
        }
    }
</style>