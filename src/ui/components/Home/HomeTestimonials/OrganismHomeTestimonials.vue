<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSliderMediator } from '~/shared/composables/slider/useSliderMediator'

const { t } = useI18n()
const { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus } = useSliderMediator()

const testimonials = computed(() => t('common.testimonials'))
</script>

<template>
  <TemplatePageRestrictor class="testimonials">
    <MoleculeSliderHeader :title="testimonials" :controls-status="controlsStatus" @scroll-side="interceptScrollSide" />
    <MoleculeHomeTestimonialsContent
      :direction-signal="directionSignal"
      @update-controls-status="updateControlsStatus"
    />
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.testimonials {
  @apply flex flex-col items-left gap-y-5 px-6 overflow-hidden;
  @apply lg:px-0;
}
</style>
