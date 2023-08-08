<script setup>
import useFlash from "@/composable/useFlash"
let { flash } = useFlash()
</script>

<template>
  <main>

    <p>
      <button @click="flash('Test','It work!')">Click Me</button>
    </p>

  </main>
</template>
