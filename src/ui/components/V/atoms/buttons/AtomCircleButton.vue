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
  @apply grid place-items-center w-22 h-22  rounded-full transition-300;
  @apply hover:(scale-98);
  @apply md:(w-30 h-30);
}

.button-circle__inner {
  @apply grid place-items-center rounded-full border-1 w-9/10 h-9/10;
}
.button-circle[disabled] {
  @apply opacity-50 pointer-events-none;
}
</style>
