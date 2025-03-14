import {
  AlignTextRightOne,
  AllApplication,
  Column,
  HamburgerButton,
  HorizontalTidyUp,
  ImageFiles,
  Page,
  Table
} from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import { nanoid } from 'nanoid'

import type { BlockInfo, BlockType } from '@/types/block'

type BlockBaseMeta = {
  type: BlockType
  label: string
  icon: Icon
}

export const blocksBaseMetaList: BlockBaseMeta[] = [
  { type: 'image', label: 'Image', icon: ImageFiles },
  {
    type: 'view',
    label: 'View',
    icon: Table
  },
  {
    type: 'button',
    label: 'Button',
    icon: HamburgerButton
  }
]

export const blocksBaseMeta = Object.fromEntries(
  blocksBaseMetaList.map((item) => [item.type, item])
)

export const getBlocksDefaultData = (type: BlockType | 'columns'): BlockInfo => {
  const id = nanoid()
  switch (type) {
    case 'image':
      return {
        id,
        type: 'image',
        label: 'Image',
        props: {
          url: 'https://images.pexels.com/photos/17108884/pexels-photo-17108884.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
        }
      }
    case 'view':
      return {
        id,
        type: 'view',
        label: 'View',
        props: {
          fields: {
            id: {
              type: 'text'
            }
          },
          fieldProps: [],
          data: []
        }
      }
    case 'button':
      return {
        id,
        type: 'button',
        label: 'Button',
        props: {
          content: 'Button'
        }
      }
    case 'columns':
      return {
        id,
        type: 'columns',
        label: 'Button',
        props: {
          clos: 2
        }
      }
  }
}

type ComponentsTypesMeta = {
  type: 'layout' | 'basic'
  label: string
  icon: Icon
}

export const componentsTypes: ComponentsTypesMeta[] = [
  { type: 'layout', label: '布局', icon: Page },
  { type: 'basic', label: '基础', icon: AllApplication }
]

export const componentsTypesMeta = Object.fromEntries(
  componentsTypes.map((item) => [item.type, item])
)

export const blocksLayoutMetaList: {
  type: string
  label: string
  icon: Icon
}[] = [
  { type: 'column', label: '列', icon: Column },
  {
    type: 'Stack',
    label: '定位',
    icon: AlignTextRightOne
  }
]

export const layoutBlocksBaseMetaList: BlockBaseMeta[] = [
  { type: 'image', label: 'Image', icon: ImageFiles },
  {
    type: 'view',
    label: 'View',
    icon: Table
  },
  {
    type: 'button',
    label: 'Button',
    icon: HamburgerButton
  },
  { type: 'columns', label: '多列布局', icon: HorizontalTidyUp }
  // { type: 'stack', label: '定位布局', icon: HorizontalTidyUp },
]
