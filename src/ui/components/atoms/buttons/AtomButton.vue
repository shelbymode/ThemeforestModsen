<script setup lang="ts">
interface PropsButton {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<PropsButton>(), {
  isDisabled: false,
})
</script>

<template>
  <button :disabled="isDisabled" class="transition-300 flex items-center gap-x-3 rounded-md px-5 py-3">
    <slot name="icon" />
    <slot name="text" />
  </button>
</template>

<style lang="scss" scoped>
button[disabled] {
  color: white;
  background-color: rgba(var(--c-grey));
}
</style>
