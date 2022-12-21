<script setup lang="ts">
import { useSliderMediator } from '~/shared/composables/slider/useSliderMediator'

const { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus } = useSliderMediator()
</script>

<template>
  <TemplatePageContainer class="testimonials">
    <MoleculeSliderHeader title="Testimonials" :controls-status="controlsStatus" @scroll-side="interceptScrollSide" />
    <MoleculeHomeTestimonialsContent
      :direction-signal="directionSignal"
      @update-controls-status="updateControlsStatus"
    />
  </TemplatePageContainer>
</template>

<style lang="scss" scoped>
.testimonials {
  @apply flex flex-col items-left gap-y-5 px-6 overflow-hidden;
}
</style>
