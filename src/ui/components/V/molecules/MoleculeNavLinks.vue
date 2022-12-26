<script setup lang="ts">
import { toCapitalize } from '~/shared/utils/toCapitalize'

const route = useRoute()

const links = [
  { name: 'Home', link: '/home' },
  { name: toCapitalize(route.name as string), link: route.path },
]
</script>

<template>
  <AtomDivideLink :links="links" />
</template>

<style lang="scss" scoped></style>
