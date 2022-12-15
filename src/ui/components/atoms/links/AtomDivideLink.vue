<script setup lang="ts">
interface ILink {
  link: string
  name: string
}

const props = defineProps<{
  links: ILink[]
}>()
</script>

<template>
  <div class="divide-link">
    <AtomHeaderLink class="divide-link__link" :link="props.links[0].link">{{ props.links[0].name }}</AtomHeaderLink>
    <span class="divide-link__divider">|</span>
    <AtomHeaderLink class="divide-link__link" :link="props.links[1].link">{{ props.links[1].name }}</AtomHeaderLink>
  </div>
</template>

<style lang="scss" scoped>
.divide-link {
  @apply flex items-center gap-x-3;
  // .divide-link__link
  &__link {
  }
  &__divider {
    @apply scale-y-150;
  }
}
</style>
