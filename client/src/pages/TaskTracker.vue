<script setup lang="ts">
import Social from '../components/Social.vue';
import Tasks from '../components/Tasks.vue';
import Table from '../components/Table.vue';

</script>

<template>
<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="card">
          <Social/>
        </div>
      </div>
      <div class="column is-6">
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
