<template>
  <div class="app-left-panel-wrapper">
    <div class="app-left-panel-drawer">
      <Navigations />
      <div class="app-left-panel-split tiny-scrollbar">
        <div class="drawer-header">
          <h3 class="drawer-title">COMPONENTS</h3>
          <button
            :class="['drawer-component-adder', isAddExternalComponents && 'opened']"
            @click="onAddExternalComponents"
          >
            <Plus size="18" />
          </button>
        </div>
        <div class="drawer-content">
          <Components :toggle="toggle" />
        </div>
      </div>
    </div>
    <Transition name="sub-panel-drawer">
      <div v-if="!!isComponentDrawerOpened" class="sub-panel-drawer-content">
        <BlocksDrawer />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@icon-park/vue-next'
import { ref } from 'vue'

import BlocksDrawer from '@/components/AppLeftPanel/BlocksDrawer.vue'
import Components from '@/components/AppLeftPanel/Components.vue'
import Navigations from '@/components/AppLeftPanel/Navigations.vue'
import { useDisclosure } from '@/hooks/useDisclosure'

const { isOpen: isComponentDrawerOpened, toggle } = useDisclosure(false)

const isAddExternalComponents = ref(false)

const onAddExternalComponents = () => {
  // eslint-disable-next-line no-console
  console.log('onAddExternalComponents')
  isAddExternalComponents.value = !isAddExternalComponents.value
}

</script>

<style scoped>
.app-left-panel-wrapper {
  position: relative;
  display: flex;
  z-index: 4;
  height: 100%;
}

.app-left-panel-drawer {
  width: 320px;
  height: 100%;
  overflow: hidden;
}

::v-deep .app-left-panel-split {
  height: 50%;
  overflow: auto;
  border-bottom: 1px solid var(--color-gray-200);
  border-right: 1px solid var(--color-gray-200);
}

.blocks-drawer-wrapper {
  width: 100%;
}

::v-deep .drawer-header {
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 52px;
  padding: 0 10px 0 20px;
  font-weight: var(--font-weight-bolder);
  background-color: var(--color-white);
}

::v-deep .drawer-content {
  padding: 0 10px;
}

::v-deep .drawer-component-adder {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-left: 10px;
  color: var(--color-white);
  background-color: var(--color-black);
  cursor: pointer;
  box-shadow:
    rgba(62, 65, 86, 0.25) 0px 0px 1px,
    rgba(62, 65, 86, 0.1) 0px 4px 8px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &.opened {
    background-color: var(--color-gray-300);
    color: var(--color-black);
    border-radius: 50%;
    transform: rotate(-45deg);
    transition: all 0.3s ease;
  }
}

.sub-panel-drawer {
  width: 300px;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
  overflow: hidden;
}

.sub-panel-drawer-enter-active,
.sub-panel-drawer-leave-active {
  transition: width 0.1s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.sub-panel-drawer-enter-from,
.sub-panel-drawer-leave-to {
  width: 0;
}

.sub-panel-drawer-content {
  width: 300px;
  height: 100%;
  padding: 16px 16px 16px 20px;
  background-color: rgb(250, 250, 251);
  box-shadow: rgba(128, 128, 128, 0.12) 1px 0px 0px;
}
.drawer-title {
  margin-bottom: 0;
}
</style>
