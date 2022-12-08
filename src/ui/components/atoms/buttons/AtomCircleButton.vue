<script setup lang="ts">
interface IPropsButton {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<IPropsButton>(), {
  isDisabled: false,
})
</script>

<template>
  <button :disabled="isDisabled" class="button-circle">
    <div class="button-circle__inner">
      <slot> Learn more </slot>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.button-circle {
  @apply grid place-items-center w-30 h-30 rounded-full transition-300 hover:scale-98;
}

.button-circle__inner {
  @apply grid place-items-center rounded-full border-1 w-9/10 h-9/10;
}
.button-circle[disabled] {
  @apply text-white bg-cGrey;
}
</style>
