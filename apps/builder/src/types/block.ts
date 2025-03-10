export type BasicBlockType = 'view' | 'image'
export type ExternalBlockType = 'button'

export type BlockType = BasicBlockType | ExternalBlockType

export interface BaseBlockInfo {
  id: string
  label: string
}

// basic

export type HeroTitleBlockAlign = 'left' | 'center' | 'right'

export interface ViewBlockInfo extends BaseBlockInfo {
  type: 'view'
  props: {
    fields: Record<
      string,
      {
        type: string
      }
    >
    fieldProps: {
      width: number
      visible: boolean
    }[]
    data: { id: string; value: string }[]
  }
}

export const QuoteBlockStatus = ['success', 'warning', 'error'] as const
export type QuoteBlockStatusType = (typeof QuoteBlockStatus)[number]

export interface ImageBlockInfo extends BaseBlockInfo {
  type: 'image'
  props: {
    url: string
  }
}

// external
export interface ButtonBlockInfo extends BaseBlockInfo {
  type: 'button'
  props: {
    content: string
  }
}

export interface NotesBlockInfo extends BaseBlockInfo {
  type: 'notes'
  props: {
    content: string
  }
}

export type BlockInfo =
  // basic
  | ViewBlockInfo
  | ImageBlockInfo
  // external
  | ButtonBlockInfo
