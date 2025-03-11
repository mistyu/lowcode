import { ref } from 'vue'

/**
 * true or false
 * @param opened
 * @returns
 */
export const useDisclosure = (opened?: boolean) => {
  const isOpen = ref(opened ?? false)
  let currentType = ''
  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }
  const toggle = (type: string) => {
    if (!isOpen.value) {
      open()
      currentType = type
      return
    }
    if (currentType === type) {
      close()
      currentType = ''
    } else {
      open()
      currentType = type
    }
  }
  return {
    isOpen,
    open,
    close,
    toggle
  }
}
