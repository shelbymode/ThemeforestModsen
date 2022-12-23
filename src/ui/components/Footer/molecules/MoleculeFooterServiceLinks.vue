<script setup lang="ts">
import AtomDropdown from '~/ui/components/V/atoms/dropdowns/AtomDropdown.vue'
import MoleculeFooterWrapper from '~/ui/components/Footer/molecules/MoleculeFooterWrapper.vue'
defineOptions({
  components: {
    AtomDropdown,
    MoleculeFooterWrapper,
  },
})

const serviceLinks = ['Pages', 'Elements', 'FAQ', 'Pricing', 'Site map']
const containerLinkComponent = useFoooterSwapComponent()
</script>

<template>
  <component :is="containerLinkComponent" title="Services" class="service-links">
    <AtomHeaderLink v-for="itemLink in serviceLinks" :key="itemLink" class="service-links__link" :link="itemLink">{{
      itemLink
    }}</AtomHeaderLink>
  </component>
</template>

<style lang="scss" scoped>
::v-deep {
  .service-links {
    @apply flex flex-col items-center gap-y-3
    @apply sm:gap-y-6;
    @apply lg:(items-start);

    // .service-links__link

    &__link {
      @apply md:text-2xl;
      @apply lg:(text-base);
    }
  }
}
</style>
