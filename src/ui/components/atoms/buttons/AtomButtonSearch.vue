<script setup lang="ts">
interface PropsButton {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<PropsButton>(), {
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
  @apply grid place-items-center rounded-md transition-300 px-6 py-4 text-3xl hover:scale-98;
}
button[disabled] {
  color: white;
  background-color: rgba(var(--c-grey));
}
</style>
