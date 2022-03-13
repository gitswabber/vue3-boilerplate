<template>
  <h1>This is an about page</h1>
  <div class="about">
    <h3>counter by ref : {{ counterRef }}</h3>
    <h3>counter by store : {{ counter.count }}</h3>
    <input v-model="message" placeholder="edit me" />
    <v-btn color="primary" @click="clickButton">BUTTON TEST</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { useCounterStore } from "@/stores/counter";

const counterRef = ref(0);
const counter = useCounterStore();

const axios: any = inject("axios");

function clickButton(e) {
  counterRef.value--;
  counter.increment();
  console.log("button click");
  console.log(e);

  axios.get("http://localhost:8080/todos").then((response: { data: any }) => {
    console.log(response.data);
  });
}
</script>

<style lang="scss">
@import "../styles/views/about.css";
</style>
