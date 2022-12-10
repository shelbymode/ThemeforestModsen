<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isDisabled?: boolean
    icon?: boolean
    link: string
  }>(),
  {
    isDisabled: false,
    icon: true,
  }
)

const availableClass = props.isDisabled === true ? 'text-cGrey' : 'text-primary dark:(text-sky hover:text-sky)'
</script>

<template>
  <button :disabled="isDisabled" class="link link-hover" :class="[availableClass]">
    <router-link v-bind="$attrs" :class="{ 'element-disabled': isDisabled }" :to="props.link">
      <slot />
    </router-link>
    <span v-if="props.icon" class="icon text-sky"></span>
  </button>
</template>

<style lang="scss" scoped>
.link {
  @apply flex items-center gap-x-3 font-medium transition-300 p-1 text-sm;
}
.link-hover {
  @apply hover:text-secondary hover:scale-98;
}
.icon {
  @apply i-ic-outline-arrow-right-alt text-3xl;
}
</style>
