<script setup lang="ts">
interface ITag {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<ITag>(), {
  isDisabled: false,
})
</script>

<template>
  <button :disabled="isDisabled" class="button-link">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-link {
  @apply grid text-primary place-items-center border-cGrey border rounded-md font-bold transition-300 px-4 py-1 text-xs;
  @apply hover:(text-white bg-primary border-primary);
}
.icon {
  @apply i-ic-outline-arrow-right-alt text-3xl;
}

.button-link[disabled] {
  @apply opacity-50 pointer-events-none;
}
</style>
