import type { Icon } from '@icon-park/vue-next/lib/runtime'

// block 其实也就是我们所说的物料
export type BasicBlockType = 'heroTitle' | 'view' | 'chart' | 'quote' | 'image'
export type ExtraBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExtraBlockType

// 基础 block 协议
export interface BaseBlockInfo {
  id: string
  label: string
  [key: string]: any
}

const heroTitleBlockAlign = ['left', 'center', 'right'] as const
type HeroTitleBlockAlign = (typeof heroTitleBlockAlign)[number]

export interface HeroTitleBlockInfo extends BaseBlockInfo {
  type: 'heroTitle'
  props: {
    align: HeroTitleBlockAlign
  }
}

export type BlockBaseMeta = {
  type: BlockType
  label: string
  icon: Icon
}
