<script setup lang="ts">
interface DirectionControl {
  direction?: 'left' | 'right'
  isDisabled?: boolean
}

const props = withDefaults(defineProps<DirectionControl>(), {
  direction: 'right',
  isDisabled: false,
})

const arrowIconClass = props.direction === 'left' ? 'i-fluent-arrow-left-24-regular' : 'i-fluent-arrow-right-24-regular'
const availableClass = props.isDisabled === true ? 'element-disabled' : ''
</script>

<template>
  <button :disabled="isDisabled" class="button-direction">
    <span class="text-dark" :class="[arrowIconClass, availableClass]"></span>
  </button>
</template>

<style lang="scss" scoped>
.button-direction {
  @apply grid place-items-center rounded-md transition-300 px-6 py-4 text-3xl hover:scale-98;
}
</style>
