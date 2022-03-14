<template>
  <h1>This is an about page</h1>
  <div class="about">
    <h3>counter by ref : {{ counterRef }}</h3>
    <h3>counter by store : {{ counter.count }}</h3>
    <v-btn color="primary" @click="clickIncrementButton">INCREMENT TEST</v-btn>
    <div class="ma-5"></div>
    <v-card elevation="1">
      <v-card-text>{{ message ? message : "NO_MESSAGE" }}</v-card-text>
    </v-card>
    <v-btn color="success" @click="clickHelloButton">CLICK ME</v-btn>
  </div>
</template>

<script setup lang="ts">
import "@/styles/views/about.scss";
import { ref, inject } from "vue";
import { useCounterStore } from "@/stores/counter";
import todoApi from "@/script/api/hello-api";

const counterRef = ref(0);
const counter = useCounterStore();
const message = ref();

function clickIncrementButton(e: any) {
  counterRef.value--;
  counter.increment();
  console.log("button click");
  console.log(e);
}

async function clickHelloButton() {
  message.value = await todoApi.sayHello();
  console.log("result");
  console.log(message);
}
</script>
