<script setup lang="ts">
import { useSliderMediator } from '~/shared/composables/slider/useSliderMediator'

const isMdScreen = useMediaQuery(`(min-width: 768px)`)

const { directionSignal, controlsStatus, interceptScrollSide, updateControlsStatus } = useSliderMediator()
</script>

<template>
  <TemplatePageContainer class="blog">
    <MoleculeSliderHeader
      :hide-controls="!isMdScreen"
      :controls-status="controlsStatus"
      @scroll-side="interceptScrollSide"
    >
      <AtomMiddleTitle class="blog__title">Our blog</AtomMiddleTitle>
    </MoleculeSliderHeader>

    <MoleculeHomeOurBlogContent :direction-signal="directionSignal" @update-controls-status="updateControlsStatus" />
  </TemplatePageContainer>
</template>

<style lang="scss" scoped>
.blog {
  @apply flex flex-col items-left gap-y-12 px-6 overflow-hidden;
}

.blog__title {
  @apply tracking-tight text-center w-full;
  @apply sm:tracking-normal;
  @apply md:text-left;
}
</style>
