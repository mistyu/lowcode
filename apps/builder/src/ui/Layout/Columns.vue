<template>
  <smooth-dnd-container
        group-name="blocks"
        orientation="horizontal"
        class="blocks-list render-columns"
        :get-child-payload="
        (index: number) => {
          return {
            index,
            type: 'render',
          }
        }
        "
        tag="div"
        @Drop="onDropRightItems"
      >
        <smooth-dnd-draggable v-for="(block, index) in blocks" :key="index">
          <BlockRenderer :block="block" :i="index"></BlockRenderer>
        </smooth-dnd-draggable>
      </smooth-dnd-container>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

import BlockRenderer from '@/blocks/BlockRenderer.vue'
import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { getBlocksDefaultData } from '@/constants/blocksBaseMeta'
import type { BlockInfo } from '@/types/block'
const blocks = ref<BlockInfo[]>([])
const onDropRightItems = (dropResult: { removedIndex: any; addedIndex: any; payload: any;}) => {
  const type = dropResult?.payload?.type
  if (type) {
    const block = getBlocksDefaultData(type)
    blocks.value.push(block)
  }
  
}
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
.render-columns {
  width: 100%;
  height: 150px;
  border: 1px dashed #b1b1b1;
}
</style>