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

const availableClass = props.isDisabled === true ? 'text-cGrey' : 'text-black'
</script>

<template>
  <button :disabled="isDisabled" class="h-link" :class="[availableClass]">
    <router-link
      v-bind="$attrs"
      class="h-link__link h-link__link-dark"
      active-class="active active-dark"
      :class="{ 'element-disabled': isDisabled }"
      :to="props.link"
    >
      <slot />
    </router-link>
    <span v-if="props.icon" class="icon"></span>
  </button>
</template>

<style lang="scss" scoped>
.h-link {
  @apply flex items-center gap-x-3 px-2 py-1;
}
.h-link__link {
  @apply text-sm font-medium text-cGrey duration-300 hover:text-black;
}
.h-link__link-dark {
  @apply dark:text-white dark:hover:text-neutral-500;
}
.active {
  @apply text-black font-bold hover:font-semibold;
}
.active-dark {
  @apply dark:text-white  dark:border-b-2 dark:hover:text-cGray dark:hover:font-semibold  dark:hover:border-transparent;
}
.icon {
  @apply i-ic-outline-arrow-right-alt text-3xl;
}
</style>
