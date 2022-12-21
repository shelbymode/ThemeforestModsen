<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h3 class="text-base font-bold">{{ props.title }}</h3>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
