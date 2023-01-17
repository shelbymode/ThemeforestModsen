/**
 * This composable is buffer between header and content part
 *
 * 1. MoleculeSliderHeader triggers @scroll-side event when user clicks on header controls;
 * 2. interceptScrollSide intercepts it and updates accordingly directionSignal value;
 * 3. directionSignal is passing down to the content part, where useSlider (composable) receives it and run translating;
 * 4. After ending of translation, content component emits @update-controls-status;
 * 5. updateControlsStatus intercepts it and updates controls element;
 * 6. Updaded controlsStatus is passing down to the MoleculeSliderHeader;
 * 7. MoleculeSliderHeader updates itself state.
 */

import { IControlsStatus, TDirection } from '~/ui/components/V/molecules/slider/MoleculeSliderHeader.vue'

export const useSliderMediator = () => {
  const directionSignal = ref<TDirection | null>(null)
  const controlsStatus: IControlsStatus = reactive({
    left: 'disabled',
    right: 'enabled',
  })

  const interceptScrollSide = (direction: TDirection) => {
    directionSignal.value = direction
    nextTick(() => (directionSignal.value = null))
  }

  const updateControlsStatus = (newControlsStatus: IControlsStatus) => {
    controlsStatus.left = newControlsStatus.left
    controlsStatus.right = newControlsStatus.right
  }
  return { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus }
}
