<script setup lang="ts">
    import { useSession } from "../models/session";
    import { useUser } from "../models/user"
  
    const session = useSession();
    const users = useUser();
    users.getUsers();
</script>

<template>
  <article class="panel is-primary">
  <p class="panel-heading">
    Users
  </p>

  <a class="panel-block" v-for="x in users.displayUsersList()" :key="x.id">
    <div class="avatar">
            <img :src="x.pic" />
            <div>
                <strong>{{ x.firstName }} {{ x.lastName }}</strong> <br />
                <i>{{ x.email }}</i>
            </div>
        </div>
  </a>
  
</article>

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