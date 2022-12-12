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
</script>

<template>
  <button :disabled="isDisabled" class="link">
    <router-link v-bind="$attrs" :class="{ 'element-disabled': isDisabled }" :to="props.link">
      <slot />
    </router-link>
    <span v-if="props.icon" class="icon text-sky"></span>
  </button>
</template>

<style lang="scss" scoped>
.link {
  @apply flex items-center gap-x-3 text-primary font-medium transition-300 p-1 text-sm;
  @apply hover:(text-secondary scale-98);
  @apply dark:(text-sky);
  @apply dark:hover:(text-sky);
}
.link[disabled] {
  @apply opacity-50 text-cGrey pointer-events-none;
}
.icon {
  @apply i-ic-outline-arrow-right-alt text-3xl;
}
</style>
