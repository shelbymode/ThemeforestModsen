<script setup lang="ts">
import AtomDropdown from '~/ui/components/V/atoms/dropdowns/AtomDropdown.vue'
import MoleculeFooterWrapper from '~/ui/components/Footer/molecules/MoleculeFooterWrapper.vue'
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
defineOptions({
  components: {
    AtomDropdown,
    MoleculeFooterWrapper,
  },
})

interface TLink {
  name: string
  link: string
}
const { locale } = useI18n()
const serviceLinks = ['FAQ', 'pricing', 'siteMap']

const generatedLinksList: ComputedRef<TLink[]> = computed(() => {
  return serviceLinks.map((word) => ({
    name: word,
    link: `/${locale.value}/${useChangeCase(word, 'paramCase').value}`,
  }))
})

const containerLinkComponent = useFoooterSwapComponent()
</script>

<template>
  <component :is="containerLinkComponent" :title="$t(`navMenu.services`)" class="service-links">
    <AtomHeaderLink
      v-for="itemLink in generatedLinksList"
      :key="itemLink.name"
      class="service-links__link"
      :link="itemLink.link"
    >
      {{ $t(`navMenu.${itemLink.name}`) }}
    </AtomHeaderLink>
  </component>
</template>

<style lang="scss" scoped>
.service-links {
  @apply flex flex-col items-center gap-y-3;
  @apply sm:gap-y-6;
  @apply lg:(items-start);
}

:deep() {
  .service-links {
    @apply flex flex-col items-center gap-y-3;
    @apply sm:gap-y-6;
    @apply lg:(items-start);
  }
  .service-links {
    // .service-links__link

    &__link {
      @apply md:text-2xl;
      @apply lg:(text-base);
    }
  }
}
</style>
