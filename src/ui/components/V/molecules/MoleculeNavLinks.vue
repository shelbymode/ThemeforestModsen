<script setup lang="ts">
import { toCapitalize } from '~/shared/utils/toCapitalize'

const route = useRoute()

const currentNameRoute = route.fullPath.split('/').at(-1)

const links = computed(() => [
  { name: 'Home', link: '/home' },
  { name: toCapitalize(currentNameRoute as string), link: route.path },
])
</script>

<template>
  <AtomDivideLink :links="links" />
</template>

<style lang="scss" scoped></style>
