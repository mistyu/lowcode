import type { BlockInfo } from '@/types/block'

export const blocks: BlockInfo[] = [
  {
    id: '4',
    type: 'image',
    label: 'Image',
    props: {
      url: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg'
    }
  },
  {
    id: '6',
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
  },
  {
    id: '7',
    type: 'button',
    label: 'Button',
    props: {
      content: 'Button'
    }
  }
]
