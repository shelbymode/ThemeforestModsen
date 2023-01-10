<script setup lang="ts">
import AtomDropdown from '~/ui/components/V/atoms/dropdowns/AtomDropdown.vue'
import MoleculeFooterWrapper from '~/ui/components/Footer/molecules/MoleculeFooterWrapper.vue'

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
  <component :is="containerLinkComponent" :title="$t(`navMenu.contactInfo`)" class="contact-links">
    <p class="contact-links__phone">+1 601-201-5580</p>
    <p class="contact-links__address">1642 Washington Avenue, Jackson, MS, 39201</p>
    <AtomLink link="/" class="contact-links__email">ensome@info.co.us</AtomLink>
    <AtomLink link="/driving" class="contact-links__driving">
      {{ $t(`navMenu.drivingDirections`) }}
    </AtomLink>
  </component>
</template>

<style lang="scss" scoped>
.contact-links {
  @apply flex flex-col items-start gap-y-6;
  @apply sm:(items-center);
  @apply lg:(items-start);

  // .contact-links__phone

  &__phone {
    @apply md:text-2xl;
    @apply lg:(text-base);
  }

  // .contact-links__address

  &__address {
    @apply md:text-2xl;
    @apply lg:(text-base);
  }
}

:deep() {
  .contact-links {
    @apply flex flex-col items-start gap-y-3;
    @apply sm:(items-center gap-y-6);
    @apply lg:(items-start);

    // .contact-links__email

    &__email {
      @apply md:text-2xl;
      @apply lg:(text-base);
    }

    // .contact-links__driving

    &__driving {
      @apply md:text-2xl;
      @apply lg:(text-base);
    }
  }
}
</style>
