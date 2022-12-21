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
  <component
    :is="containerLinkComponent"
    title="Services"
    class="flex flex-col items-center gap-y-3 sm:gap-y-6 lg:(items-start)"
  >
    <AtomHeaderLink
      v-for="itemLink in serviceLinks"
      :key="itemLink"
      class="md:text-2xl lg:(text-base)"
      :link="itemLink"
      >{{ itemLink }}</AtomHeaderLink
    >
  </component>
</template>

<style lang="scss" scoped></style>
