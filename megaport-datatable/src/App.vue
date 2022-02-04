<template>
  <div id="app">
    <Table/>
  </div>
</template>

<script>

import Table from './components/Table.vue'
export default {
  name: 'App',
  components: {
      Table
  }
}
</script>

<style>
    body {
      height: 100vh;
      font-family: "Mukta", "sans-serif";
      font-size: 1.25rem;
      color: #4f546c;
    }
</style>
