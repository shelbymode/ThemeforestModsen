<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
interface IDirectionControl {
  isDisabled?: boolean
  icon?: boolean
  link: string
}

const props = withDefaults(defineProps<IDirectionControl>(), {
  isDisabled: false,
  icon: false,
})
</script>

<template>
  <div class="h-link">
    <router-link
      v-bind="$attrs"
      class="h-link__link"
      active-class="active"
      :class="{ 'element-disabled': isDisabled }"
      :to="props.link"
    >
      <slot />
    </router-link>
    <span v-if="props.icon" class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.h-link {
  @apply flex items-center gap-x-3 px-2 py-1;
}
.h-link[disabled] {
  @apply text-cGrey opacity-50 pointer-events-none;
}
.h-link__link {
  @apply font-medium;
  @apply hover:(text-cGrey);
  @apply dark:(text-white);
  @apply dark:hover:(text-neutral-500);
}
.active {
  @apply text-black font-bold border-b-2 border-black;
  @apply dark:(text-white  border-white);
  @apply hover:(text-cGray border-transparent);
}
.icon {
  @apply i-ic-outline-arrow-right-alt text-3xl;
}
</style>
