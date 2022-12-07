<script setup lang="ts">
interface PropsButton {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<PropsButton>(), {
  isDisabled: false,
})
</script>

<template>
  <button :disabled="isDisabled" class="button">
    <slot name="icon" />
    <slot name="text" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply flex items-center gap-x-3 px-5 py-3 rounded-md transition-300 hover:scale-98;
}
button[disabled] {
  color: white;
  background-color: rgba(var(--c-grey));
}
</style>
