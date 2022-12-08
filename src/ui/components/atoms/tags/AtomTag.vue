<script setup lang="ts">
interface ITag {
  isDisabled?: boolean
}

const props = withDefaults(defineProps<ITag>(), {
  isDisabled: false,
})

const availableClass = props.isDisabled === true ? 'element-disabled' : 'text-primary'
</script>

<template>
  <button :disabled="isDisabled" class="button-link button-link-hover" :class="[availableClass]">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-link {
  @apply grid place-items-center border-cGrey border rounded-md font-bold transition-300 px-3 py-2 text-sm;
}
.button-link-hover {
  @apply hover:text-white hover:bg-primary hover:border-primary;
}
.icon {
  @apply i-fluent-arrow-right-24-regular text-3xl;
}
</style>
