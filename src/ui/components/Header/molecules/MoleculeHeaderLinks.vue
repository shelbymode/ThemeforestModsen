<script setup lang="ts">
import { useChangeCase } from '@vueuse/integrations/useChangeCase'

const linksList = ['home', 'services', 'about', 'blog', 'contacts', 'solutions']

interface TLink {
  name: string
  link: string
}

const generatedLinksList: TLink[] = linksList.map((word) => ({
  name: useChangeCase(word, 'capitalCase').value,
  link: `/${useChangeCase(word, 'paramCase').value}`,
}))
</script>

<template>
  <AtomHeaderLink
    v-for="linkItem in generatedLinksList"
    :key="linkItem.link"
    class="text-2xl md:text-sm"
    :link="linkItem.link"
    >{{ linkItem.name }}</AtomHeaderLink
  >
</template>

<style lang="scss" scoped></style>
