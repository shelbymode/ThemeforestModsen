<script setup lang="ts">
import AtomDropdown from '~/ui/components/V/atoms/dropdowns/AtomDropdown.vue'
import MoleculeFooterWrapper from '~/ui/components/Footer/molecules/MoleculeFooterWrapper.vue'
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { useI18n } from 'vue-i18n'
import { toCapitalize } from '~/shared/utils/toCapitalize'
import { ComputedRef } from 'vue'

defineOptions({
  components: {
    AtomDropdown,
    MoleculeFooterWrapper,
  },
})

const linksList = ['home', 'blog', 'contacts', 'ourTeam', 'about', 'services', 'FAQ']

interface TLink {
  name: string
  link: string
}

const { locale } = useI18n()
const generatedLinksList: ComputedRef<TLink[]> = computed(() => {
  return linksList.map((word) => ({
    name: word,
    link: `/${locale.value}/${useChangeCase(word, 'paramCase').value}`,
  }))
})

const containerLinkComponent = useFoooterSwapComponent()
</script>

<template>
  <component :is="containerLinkComponent" :title="$t(`navMenu.quickLinks`)" class="quick-links">
    <AtomHeaderLink
      v-for="itemLink in generatedLinksList"
      :key="itemLink.name"
      class="quick-links__link"
      :link="itemLink.link"
    >
      {{ $t(`navMenu.${itemLink.name}`) }}
    </AtomHeaderLink>
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
