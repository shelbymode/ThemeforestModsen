<script setup lang="ts">
import { useSliderMediator } from '~/shared/composables/slider/useSliderMediator'

const { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus } = useSliderMediator()
</script>

<template>
  <TemplatePageRestrictor class="customers">
    <MoleculeSliderHeader
      :title="$t(`about.ourCustomersSay`)"
      :controls-status="controlsStatus"
      @scroll-side="interceptScrollSide"
    />
    <MoleculeTestimonialsReviewsContent
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
