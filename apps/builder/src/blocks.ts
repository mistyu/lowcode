import type { App } from 'vue'

import ImageBlock from '@/blocks/basic/ImageBlock.vue'
import ViewBlock from '@/blocks/basic/ViewBlock.vue'
import ButtonBlock from '@/blocks/external/ButtonBlock.vue'
import type { BlockType } from '@/types/block'

const baseBlocks = [
  {
    type: 'view',
    material: ViewBlock
  },
  {
    type: 'image',
    material: ImageBlock
  }
]
// 因为我们后面会考虑插件市场，所以我们需要一个类来管理所有的 block
// 只有你安装了对应的外部插件，你才能在页面中使用
class BlockSuite {
  private blocks = baseBlocks
  constructor() {}
  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }
  getBlocks() {
    return this.blocks
  }
  addBlock(block: any) {
    this.blocks.push(block)
  }
  hasBlock(type: BlockType) {
    return !!this.getBlocksMap()[type]
  }
}

const blockSuite = new BlockSuite()

blockSuite.addBlock({
  type: 'button',
  material: ButtonBlock
})

const blocksMap = blockSuite.getBlocksMap()

export const blocksMapSymbol = Symbol('blocksMap')

export const initBlocks = () => {
  const ins = {
    install(app: App<Element>) {
      // 这两个操作基本上是 Vue3 视图相关插件的标配
      app.provide(blocksMapSymbol, blocksMap)
      // provide 之后，我们就可以在任何地方使用 inject 来获取到这个值
      app.config.globalProperties.$blocksMap = blocksMap
    }
  }

  return ins
}

// Extensions of Vue types to be appended manually
// https://github.com/microsoft/rushstack/issues/2090
// https://github.com/microsoft/rushstack/issues/1709

// TODO: figure out why it cannot be 'vue'
// @ts-ignore: works on Vue 3, fails in Vue 2
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /**
     * Access to the application's blocksMap
     */
    $blocksMap: string
  }
}
