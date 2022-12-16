<script setup lang="ts">
interface IPropsButton {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<IPropsButton>(), {
  isDisabled: false,
})
</script>

<template>
  <button :disabled="isDisabled" class="button-search">
    <span i-fluent-search-28-regular></span>
  </button>
</template>

<style lang="scss" scoped>
.button-search {
  @apply grid place-items-center rounded-md transition-300 px-6 py-4 text-3xl;
  @apply hover:(scale-98);
}
.button[disabled] {
  @apply opacity-50 pointer-events-none;
}
</style>
