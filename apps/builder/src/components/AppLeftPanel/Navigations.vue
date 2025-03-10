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
          <div>
            <Input v-if="page.isEdit" size="small" :value="page.label" @blur="onBlur(index)" />
            <span v-else="!page.isEdit" class="navigation-item-name" @dblclick="onDbClick(index)">
              {{ page.label }}
            </span>
          </div>
          <!-- <CloseSmall theme="outline" size="18" @click="onDeleteNavigation(index)"/> -->
          <Dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
              <More theme="outline" size="24" fill="#333"/>
            </a>
            <template #overlay>
              <Menu>
                <MenuItem
                  key="0"
                  @click="onRenameNavigation(index)">
                  重命名
                </MenuItem>
                <MenuDivider />
                <MenuItem key="1" @click="onDeleteNavigation(index)">删除</MenuItem>
              </Menu>
            </template>
          </Dropdown>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { More, Plus } from '@icon-park/vue-next'
import { Dropdown, Input, Menu, MenuDivider,MenuItem } from 'ant-design-vue'
import { ref } from 'vue'

const pages = ref<{
    type: string;
    label: string;
    value: string;
    isEdit: boolean;
}[]>([
  {
    type: 'page',
    label: '页面1',
    value: 'page1',
    isEdit: false,
  }
])
const addNavigation = () => {
  pages.value = pages.value.map((page) => {
    return {
      ...page,
      isEdit: false,
    }
  })
  pages.value.push({
    type: 'page',
    label: `页面${pages.value.length + 1}`,
    value: `page${pages.value.length + 1}`,
    isEdit: false,
  })
}
const onDeleteNavigation = (index: number) => {
  pages.value.splice(index, 1)
  onNavigation(0)
}
const onRenameNavigation = (index: number) => {
  pages.value[index].isEdit = true
}
const onBlur = (index: number) => {
  pages.value[index].isEdit = false
}
const onDbClick = (index: number) => {
  pages.value[index].isEdit = true
}


const activatedPageIndex = ref(0)
const onNavigation = (index: number) => {
  activatedPageIndex.value = index
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
.ant-dropdown-link {
  display: flex;
}
.drawer-title {
  margin-bottom: 0;
}
</style>
