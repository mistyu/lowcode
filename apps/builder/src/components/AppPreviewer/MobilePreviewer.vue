<template>
    <div class="content" style="--container-bg-color: #3d6583">
        <div class="navigator-wrapper">
            <div class="navigator">Engine</div>
        </div>

        <div class="render-content">
            <BlocksRenderer />
        </div>
    </div>
</template>

<script setup lang="ts">
import BlocksRenderer from '@/blocks/BlocksRenderer.vue'

// import StatusBar from '../AppEditorRenderer/StatusBar.vue'
</script>

<style scoped>
.layout-runner {
    flex: 1;
}

.layout-runner-navigator {
    height: 42px;
    display: grid;
    font-size: var(--font-size-normal);
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding: 0 16px;
    background-color: var(--color-gray-100);
    width: 100%;
}

.content {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
}

.wrapper::-webkit-scrollbar {
    display: none;
}

.navigator-wrapper {
    position: sticky;
    top: 0;
    z-index: 2;
}

.navigator {
    display: flex;
    height: 56px;
    align-items: center;
    padding: 0 12px;
    font-size: 18px;
    font-weight: var(--font-weight-bolder);
    color: var(--color-white);
    background-color: var(--container-bg-color);
    border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.title {
    height: 90px;
    background-color: var(--container-bg-color);
}

.render-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px 32px;
    flex: 1;
}
</style>
