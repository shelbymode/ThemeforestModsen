<script setup lang="ts">
interface DirectionControl {
  direction?: 'left' | 'right'
  isDisabled?: boolean
}

const props = withDefaults(defineProps<DirectionControl>(), {
  direction: 'right',
  isDisabled: false,
})

const arrowIconClass = props.direction === 'left' ? 'i-fluent-arrow-left-24-regular' : 'i-ic-outline-arrow-right-alt'
</script>

<template>
  <button :disabled="isDisabled" class="button-direction">
    <span class="button-direction__icon" :class="[arrowIconClass]"></span>
  </button>
</template>

<style lang="scss" scoped>
.button-direction {
  @apply grid place-items-center rounded-md transition-300 px-6 py-4 text-3xl;
  @apply hover:(scale-98);
}

.button-direction__icon {
  @apply text-dark;
}
.button-direction[disabled] {
  @apply opacity-50 pointer-events-none;
}
</style>
