/**
 * `shiftedElement` - () => element that should be shifted horizontally,
 * `widthShiftedArea` - () => |size| of shifted area,
 * `directionSignal` -  we get 'left' | 'right' value and depending on it - shift our element
 * `totalSlideAmount` - how many times we can slide content horizontally
 * `updateControlStatus` - after shifting our element - will be runned this callback
 * in order to calculate how controls will behave after translation
 */
import { ComputedRef } from 'vue'
import { TDirection } from '~/ui/components/V/molecules/slider/MoleculeSliderHeader.vue'
import { translateXElement } from '../../utils/DOM/translateXElement'

export const useSlider = ({
  shiftedElement,
  widthShiftedArea,
  directionSignal,
  updateControlsStatus,
}: {
  shiftedElement: () => HTMLElement | null
  widthShiftedArea: () => number
  directionSignal: ComputedRef<TDirection | null>
  updateControlsStatus: (left: boolean, right: boolean) => void
}) => {
  let element: HTMLElement | null
  let contentWidth
  let screenWidth
  let deltaWidth
  let totalSlideAmount: number

  let isControlsAreLocked = $ref(false)
  let activeCardIndex = $ref(0)

  const unlockControls = () => (isControlsAreLocked = false)
  const lockControls = () => (isControlsAreLocked = true)

  const isScrollToLeft = $computed(() => directionSignal.value === 'left')
  const isScrollToRight = $computed(() => directionSignal.value === 'right')

  onMounted(() => {
    element = shiftedElement()
    if (element) {
      contentWidth = element.scrollWidth || 0
      screenWidth = element.getBoundingClientRect().width || 0
      deltaWidth = widthShiftedArea()

      totalSlideAmount = Math.ceil((contentWidth - screenWidth) / deltaWidth)

      watch(directionSignal, (newDirectionSignal) => {
        if (newDirectionSignal) {
          runShifting(element)
        }
      })
    }
  })

  function runShifting(element: HTMLElement | null) {
    if (!isControlsAreLocked && element) {
      let shiftX = 0
      const widthContent = widthShiftedArea()
      if (isScrollToLeft) {
        activeCardIndex--
        shiftX = -widthContent
      } else if (isScrollToRight) {
        activeCardIndex++
        shiftX = widthContent
      }
      lockControls()
      translateXElement(element, shiftX)
      updateControlsStatus(activeCardIndex > 0, activeCardIndex < totalSlideAmount)
    }
  }

  return { isControlsAreLocked, activeCardIndex, unlockControls, lockControls }
}
