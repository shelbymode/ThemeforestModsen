<!-- <script setup lang="ts"></script>

<template>
  <TemplatePageContainer class="customers">
    <MoleculeAboutCustomersHeader />
    <MoleculeAboutCustomersContent />
  </TemplatePageContainer>
</template>

<style lang="scss" scoped>
.customers {
  @apply flex flex-col items-left gap-y-22 pt-30 px-6 md:(pb-15 mb-15) overflow-x-hidden;
}
</style> -->

<script setup lang="ts">
import { useSliderMediator } from '~/shared/composables/slider/useSliderMediator'

const { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus } = useSliderMediator()
</script>

<template>
  <TemplatePageContainer class="testimonials">
    <MoleculeSliderHeader
      title="Our customer say"
      :controls-status="controlsStatus"
      @scroll-side="interceptScrollSide"
    />
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
