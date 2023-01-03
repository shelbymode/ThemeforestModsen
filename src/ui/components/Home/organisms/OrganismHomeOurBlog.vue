<script setup lang="ts">
import { useSliderMediator } from '~/shared/composables/slider/useSliderMediator'

const isMdScreen = useMediaQuery(`(min-width: 768px)`)

const { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus } = useSliderMediator()
</script>

<template>
  <TemplatePageRestrictor class="blog">
    <MoleculeSliderHeader
      :hide-controls="!isMdScreen"
      :controls-status="controlsStatus"
      @scroll-side="interceptScrollSide"
    >
      <AtomMiddleTitle class="blog__title">{{ toCapitalize($t('common.ourBlog')) }}</AtomMiddleTitle>
    </MoleculeSliderHeader>

    <MoleculeHomeOurBlogContent :direction-signal="directionSignal" @update-controls-status="updateControlsStatus" />
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.blog {
  @apply flex flex-col items-left gap-y-12 px-6 overflow-hidden;
  @apply lg:px-0;
}

.blog__title {
  @apply tracking-tight text-center w-full;
  @apply sm:tracking-normal;
  @apply md:text-left;
}
</style>
