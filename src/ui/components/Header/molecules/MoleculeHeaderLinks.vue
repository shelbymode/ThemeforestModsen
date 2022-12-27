<script lang="ts" setup>
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { useI18n } from 'vue-i18n'
import { toCapitalize } from '~/shared/utils/toCapitalize'

const linksList = ['home', 'services', 'about', 'blog', 'contacts', 'solutions']

interface TLink {
  name: string
  link: string
}

const { locale } = useI18n()

const generatedLinksList: TLink[] = linksList.map((word) => ({
  name: word,
  link: `/${locale.value}/${useChangeCase(word, 'paramCase').value}`,
}))
</script>

<template>
  <AtomHeaderLink
    v-for="linkItem in generatedLinksList"
    :key="linkItem.link"
    class="text-2xl md:text-sm"
    :link="linkItem.link"
  >
    {{ toCapitalize($t(`headerMenu.${linkItem.name}`)) }}
  </AtomHeaderLink>
</template>

<style lang="scss" scoped></style>
