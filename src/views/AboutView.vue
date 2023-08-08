<script setup>
import { ref, watch } from "vue"
import  useStorage  from "@/composable/useStorage"
let food = useStorage('food', 'pizza')
let age = useStorage('age' , 21)

let obj = useStorage('obj', {a: 1, b: 2})

</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>
    <p>
      How old are you? <input type="text" v-model="age">
    </p>
  </main>
</template>