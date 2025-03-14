<template>
  <ul class="outline-list">
    <li v-for="component in componentsTypes" :key="component.type" :class="['outline-item', activeType === component.type && 'active']" @click="onToggle(component.type)">
      <component :is="componentsTypesMeta[component.type].icon" class="outline-item-icon" />
      <span class="outline-item-name">
        {{ componentsTypesMeta[component.type]?.label }}
      </span>
      <span class="outline-item-title">
        {{ component.label }}组件
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { componentsTypes, componentsTypesMeta } from '@/constants/blocksBaseMeta'

import type { ComponentsProps } from './types';

const activeType = ref<string>('')
const {toggle} = defineProps<ComponentsProps>()

const onToggle = (type: string) => {
  toggle(type)
  if (activeType.value === type) {
    activeType.value = ''
    return
  }
  activeType.value = type;
}

</script>

<style scoped>
.outline-item {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  margin-bottom: 4px;
  color: var(--color-text);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-gray-100);
    transition: all 0.3s ease;
  }
  &.active {
    background-color: var(--color-gray-100);
  }
}

.outline-item-icon {
  color: var(--color-gray-800);
}

.outline-item-name {
  margin-left: 8px;
  font-size: var(--font-size-normal);
  color: var(--color-gray-900);
}

.outline-item-title {
  flex: 1;
  margin-left: 8px;
  font-size: var(--font-size-small);
  color: var(--color-gray-700);
}
.sub-panel-drawer {
  width: 300px;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
  overflow: hidden;
}

</style>
