<template>
  <h1>This is an about page</h1>
  <div>
    <h3>counter by ref : {{ counterRef }}</h3>
    <h3>counter by store : {{ counter.count }}</h3>
    <v-btn color="primary" @click="clickButton">BUTTON TEST</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const counterRef = ref(0);
const counter = useCounterStore();

function clickButton(e) {
  counterRef.value--;
  counter.increment();
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
