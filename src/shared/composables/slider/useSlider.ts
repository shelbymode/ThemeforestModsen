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
  totalSlideAmount,
  updateControlsStatus,
}: {
  shiftedElement: () => HTMLElement | null
  widthShiftedArea: () => number
  directionSignal: ComputedRef<TDirection | null>
  totalSlideAmount: number
  updateControlsStatus: (activeCardIndex: number, totalSlideAmount: number) => void
}) => {
  let isControlsAreLocked = $ref(false)
  let activeCardIndex = $ref(0)

  const unlockControls = () => (isControlsAreLocked = false)
  const lockControls = () => (isControlsAreLocked = true)

  const isScrollToLeftOk = $computed(() => directionSignal.value === 'left' && activeCardIndex > 0)
  const isScrollToRightOk = $computed(() => directionSignal.value === 'right' && activeCardIndex < totalSlideAmount - 1)

  onMounted(() => {
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
      if (isScrollToLeftOk) {
        activeCardIndex--
        shiftX = -widthContent
      } else if (isScrollToRightOk) {
        activeCardIndex++
        shiftX = widthContent
      }
      lockControls()
      translateXElement(shiftedElement()!, shiftX)
      updateControlsStatus(activeCardIndex, totalSlideAmount)
    }
  }

  return { isControlsAreLocked, activeCardIndex, unlockControls, lockControls, isScrollToLeftOk, isScrollToRightOk }
}
