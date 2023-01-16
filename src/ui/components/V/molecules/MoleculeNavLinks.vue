<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const currentNameRoute = route.fullPath.split('/').at(-1)

const links = computed(() => [
  { name: t(`common.route.home`), link: '/home' },
  { name: t(`common.route.${currentNameRoute as string}`), link: route.path },
])
</script>

<template>
  <AtomDivideLink :links="links" />
</template>

<style lang="scss" scoped></style>
