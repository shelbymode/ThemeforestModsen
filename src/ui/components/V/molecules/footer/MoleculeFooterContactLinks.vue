<script setup lang="ts">
import AtomDropdown from '~/ui/components/V/atoms/dropdowns/AtomDropdown.vue'
import MoleculeFooterWrapper from '~/ui/components/V/molecules/footer/MoleculeFooterWrapper.vue'

import { useFoooterSwapComponent } from '~/shared/composables/footer/useFooterSwapComponent'
defineOptions({
  components: {
    AtomDropdown,
    MoleculeFooterWrapper,
  },
})
const containerLinkComponent = useFoooterSwapComponent()
</script>

<template>
  <component
    :is="containerLinkComponent"
    title="Contact info"
    class="flex flex-col items-left gap-y-3 sm:(gap-y-6 items-center) lg:(items-start)"
  >
    <p class="contact-links__phone md:text-2xl lg:(text-base)">+1 601-201-5580</p>
    <p class="contact-links__address md:text-2xl lg:(text-base)">1642 Washington Avenue, Jackson, MS, 39201</p>
    <AtomLink link="/" class="contact-links__email md:text-2xl lg:(text-base)">ensome@info.co.us</AtomLink>
    <AtomLink link="/driving" class="contact-links__driving md:text-2xl lg:(text-base)">Driving derections</AtomLink>
  </component>
</template>

<style lang="scss" scoped></style>
