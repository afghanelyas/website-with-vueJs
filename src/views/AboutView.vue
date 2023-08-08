<script setup>
import useFlash from "@/composable/useFlash"
let { flash } = useFlash()
</script>

<template>
  <main>

    <p>
      <button @click="flash('hey','It work on about page')">Click Me</button>
    </p>

  </main>
</template>