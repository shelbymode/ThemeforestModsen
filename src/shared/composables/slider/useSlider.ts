/**
 * `shiftedElement` - () => element that should be shifted horizontally,
 * `widthShiftedArea` - () => |size| of shifted area,
 * `directionSignal` -  we get 'left' | 'right' value and depending on it - shift our element
 * `totalSlideAmount` - how many times we can slide content horizontally
 * `updateControlStatus` - after shifting our element - will be runned this callback
 * in order to calculate how controls will behave after translation
 */
import { ComputedRef } from 'vue'
import { TDirection } from '~/ui/components/V/molecules/MoleculeSliderHeader.vue'
import { translateXElement } from '../../utils/translateXElement'

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
    contentWidth = shiftedElement()?.scrollWidth || 0
    screenWidth = shiftedElement()?.getBoundingClientRect().width || 0
    deltaWidth = widthShiftedArea()

    totalSlideAmount = Math.ceil((contentWidth - screenWidth) / deltaWidth)

    if (shiftedElement()) {
      watch(directionSignal, (newDirectionSignal) => {
        if (newDirectionSignal) {
          runShifting()
        }
      })
    }
  })

  function runShifting() {
    if (!isControlsAreLocked) {
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
      translateXElement(shiftedElement()!, shiftX)
      updateControlsStatus(activeCardIndex > 0, activeCardIndex < totalSlideAmount)
    }
  }

  return { isControlsAreLocked, activeCardIndex, unlockControls, lockControls }
}
