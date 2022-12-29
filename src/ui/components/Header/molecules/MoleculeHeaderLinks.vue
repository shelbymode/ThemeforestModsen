<script lang="ts" setup>
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { ComputedRef, Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { toCapitalize } from '~/shared/utils/toCapitalize'

const linksList = ['home', 'services', 'about', 'blog', 'contacts']

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
</script>

<template>
  <AtomHeaderLink
    v-for="linkItem in generatedLinksList"
    :key="linkItem.link"
    class="text-2xl md:text-sm"
    :link="linkItem.link"
  >
    {{ toCapitalize($t(`navMenu.${linkItem.name}`)) }}
  </AtomHeaderLink>
</template>

<style lang="scss" scoped></style>
