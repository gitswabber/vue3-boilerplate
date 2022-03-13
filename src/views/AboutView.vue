<template>
    <h1>This is an about page</h1>
    <div>
      <v-btn color="primary" @click="clickButton">BUTTON TEST</v-btn>
    </div>
</template>

<script setup lang="ts">
function clickButton(e) {
  console.log("button click");
  console.log(e);
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: contents;
    align-items: center;
  }
}
</style>
