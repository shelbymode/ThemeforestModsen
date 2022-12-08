<script setup lang="ts">
interface DirectionControl {
  isDisabled?: boolean
  icon?: boolean
  link: string
}

const props = withDefaults(defineProps<DirectionControl>(), {
  isDisabled: false,
  icon: false,
})

const availableClass = props.isDisabled === true ? 'text-cGrey' : 'text-black'
</script>

<template>
  <button :disabled="isDisabled" class="button-h-link" :class="[availableClass]">
    <router-link
      class="button-h-link__link button-h-link__link-dark"
      active-class="active active-dark"
      :class="{ 'disabled-element': isDisabled }"
      :to="props.link"
    >
      <slot />
    </router-link>
    <span v-if="props.icon" class="icon"></span>
  </button>
</template>

<style lang="scss" scoped>
.button-link {
  @apply flex items-center gap-x-3 px-6 py-4;
}
.button-h-link__link {
  @apply text-sm font-medium text-cGrey hover:text-black;
}
.button-h-link__link-dark {
  @apply dark:text-white dark:hover:text-neutral-500;
}
.active {
  @apply text-black font-bold hover:font-semibold;
}
.active-dark {
  @apply dark:text-white  dark:border-b-2 dark:hover:text-cGray dark:hover:font-semibold  dark:hover:border-b-0;
}
.icon {
  @apply i-fluent-arrow-right-24-regular text-3xl;
}
</style>
