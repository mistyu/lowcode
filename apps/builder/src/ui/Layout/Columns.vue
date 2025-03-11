<template>
  <div class="layout-columns">
    <div v-for="i in cols" :key="i" class="layout-columns__col">
        <slot name="col" :index="i" />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const cols = ref(2)
</script>

<style scoped>
.layout-columns {
  display: flex;
}
</style>