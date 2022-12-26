<script setup lang="ts">
import AtomDropdown from '~/ui/components/V/atoms/dropdowns/AtomDropdown.vue'
import MoleculeFooterWrapper from '~/ui/components/Footer/molecules/MoleculeFooterWrapper.vue'

defineOptions({
  components: {
    AtomDropdown,
    MoleculeFooterWrapper,
  },
})
const quickLinks = [
  { name: 'Home', link: '/home' },
  { name: 'Solutions', link: '/solutions' },
  { name: 'Blog', link: '/blog' },
  { name: 'Contacts', link: '/contacts' },
  { name: 'Our team', link: '/team' },
  { name: 'About Us', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'FAQ', link: '/faq' },
]
const containerLinkComponent = useFoooterSwapComponent()
</script>

<template>
  <component :is="containerLinkComponent" title="Quick links" class="quick-links">
    <AtomHeaderLink
      v-for="itemLink in quickLinks"
      :key="itemLink.name"
      class="quick-links__link"
      :link="itemLink.link"
      >{{ itemLink.name }}</AtomHeaderLink
    >
  </component>
</template>

<style lang="scss" scoped>
.quick-links {
  @apply flex flex-col items-center gap-y-3 transition-all duration-500;
  @apply sm:gap-y-6;
  @apply lg:(items-start);
}

:deep() {
  .quick-links {
    @apply flex flex-col items-center gap-y-3 transition-all duration-500;
    @apply sm:gap-y-6;
    @apply lg:(items-start);
  }
  .quick-links__link {
    @apply md:text-2xl;
    @apply lg:(text-base);
  }
}
</style>
