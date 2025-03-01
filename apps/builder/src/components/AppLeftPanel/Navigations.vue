<template>
  <div class="app-left-panel-split tiny-scrollbar">
    <div class="drawer-header">
      <h3 class="drawer-title">NAVIGATIONS</h3>
      <button
        class="drawer-component-adder"
        @click="addNavigation"
      >
        <Plus size="18" />
      </button>
    </div>
    <div class="drawer-content">
      <ul class="navigation-list">
        <li
          v-for="(page, index) in pages"
          :key="page.type"
          :class="['navigation-item', activatedPageIndex === index && 'active']"
          @click="onNavigation(index)"
        >
          <span class="navigation-item-name">
            {{ page.label }}
          </span>
          <CloseSmall theme="outline" size="18" @click="onDeleteNavigation(index)"/>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { CloseSmall, Plus } from '@icon-park/vue-next'
import { ref } from 'vue'

const pages = ref<{
    type: string;
    label: string;
    value: string;
}[]>([
  {
    type: 'page',
    label: '页面1',
    value: 'page1'
  }
])
const onDeleteNavigation = (index: number) => {
  pages.value.splice(index, 1)
  onNavigation(0)
}

const activatedPageIndex = ref(0)
const onNavigation = (index: number) => {
  activatedPageIndex.value = index
}

const addNavigation = () => {
  pages.value.push({
    type: 'page',
    label: `页面${pages.value.length + 1}`,
    value: `page${pages.value.length + 1}`
  })
}
</script>

<style scoped>
.app-left-panel-split {
  max-height: 200px;
}
.navigation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  margin-bottom: 4px;
  color: var(--color-text);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background-color: var(--color-gray-100);
  }

  &:hover {
    background-color: var(--color-gray-100);
    transition: all 0.3s ease;
  }
}

.navigation-item-icon {
  color: var(--color-gray-800);
}

.navigation-item-name {
  margin-left: 8px;
  font-size: var(--font-size-normal);
  color: var(--color-gray-900);
}

.navigation-item-title {
  flex: 1;
  margin-left: 8px;
  font-size: var(--font-size-small);
  color: var(--color-gray-700);
}
</style>
