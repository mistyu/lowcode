<template>
  <div class="layout-columns">
    <div v-for="i in cols" :key="i" class="layout-columns__col">
        asdasd
        <slot :name="i" :index="i" />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const cols = ref(2)
</script>

<style scoped>
.layout-columns {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed #b1b1b1;
}
.layout-columns__col {
  height: 100%;
  flex: 1;
  border: 1px dashed #b1b1b1;
}
</style>