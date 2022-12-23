<script setup lang="ts">
import { useSliderMediator } from '~/shared/composables/slider/useSliderMediator'

const { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus } = useSliderMediator()
</script>

<template>
  <TemplatePageRestrictor class="customers">
    <MoleculeSliderHeader
      title="Our customer say"
      :controls-status="controlsStatus"
      @scroll-side="interceptScrollSide"
    />
    <MoleculeHomeTestimonialsContent
      :direction-signal="directionSignal"
      @update-controls-status="updateControlsStatus"
    />
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.customers {
  @apply flex flex-col items-left gap-y-5 px-6 overflow-hidden;
}
</style>
