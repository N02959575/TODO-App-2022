<script setup lang="ts">
import Nav from './components/Nav.vue';
import Social from './components/Social.vue';
import Tasks from './components/Tasks.vue';
import Table from './components/Table.vue';

</script>

<template>
<Nav/>
<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="card">
          <Social/>
        </div>
      </div>
      <div class="column">
        <Tasks/>
      </div>
      <div class="column">
        <Table/>
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>
