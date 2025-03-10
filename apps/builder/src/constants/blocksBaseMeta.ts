import { HamburgerButton, ImageFiles, Table } from '@icon-park/vue-next'
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

export const getBlocksDefaultData = (type: BlockType): BlockInfo => {
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
  }
}
