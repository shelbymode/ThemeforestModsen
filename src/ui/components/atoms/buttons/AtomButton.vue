<script setup lang="ts">
interface IPropsButton {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<IPropsButton>(), {
  isDisabled: false,
})
</script>

<template>
  <button :disabled="isDisabled" class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply flex items-center gap-x-3 px-10 py-3 rounded-md transition-300;
  @apply hover:(scale-98);
}
.button[disabled] {
  @apply opacity-50 pointer-events-none;
}
</style>
