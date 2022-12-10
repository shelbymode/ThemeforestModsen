<script setup lang="ts">
import { useChangeCase } from '@vueuse/integrations/useChangeCase'

const linksList = ['home', 'solutions', 'pages', 'elements', 'blog', 'contacts']

interface TLink {
  name: string
  link: string
}

const generatedLinksList: TLink[] = linksList.map((word) => ({
  name: useChangeCase(word, 'capitalCase').value,
  link: `/${useChangeCase(word, 'paramCase').value}`,
}))

console.log(generatedLinksList)
</script>

<template>
  <TemplateHeader>
    <template #logo>
      <span class="icon"></span>
    </template>

    <template #links>
      <AtomHeaderLink v-for="linkItem in generatedLinksList" :key="linkItem.link" :link="linkItem.link">{{
        linkItem.name
      }}</AtomHeaderLink>
    </template>

    <template #demo>
      <AtomButton
        class="bg-primary dark:(bg-white text-black hover:bg-black hover:text-white) text-white hover:bg-primary/80"
      >
        <template #text> Watch the demo </template>
        <template #icon><span class="text-2xl" i-fluent-play-circle-24-regular></span></template>
      </AtomButton>
    </template>
  </TemplateHeader>
</template>

<style lang="scss" scoped>
/**
  * Literally there is no another way in the universe how to change this svg color
*/
.icon {
  @apply inline-block bg-primary dark:bg-white;
  width: 150px;
  height: 49px;
  mask-image: url('../../../../assets/images/svg-icons/logo_blue.svg');
  -webkit-mask-image: url('../../../../assets/images/svg-icons/logo_blue.svg');
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}
</style>
