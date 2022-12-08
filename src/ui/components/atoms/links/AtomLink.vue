<script setup lang="ts">
interface ILinkWithIcon {
  isDisabled?: boolean
  icon?: boolean
  link: string
}

const props = withDefaults(defineProps<ILinkWithIcon>(), {
  isDisabled: false,
  icon: true,
})

const availableClass = props.isDisabled === true ? 'text-cGrey' : 'text-primary'
</script>

<template>
  <button :disabled="isDisabled" class="link link-hover" :class="[availableClass]">
    <router-link :class="{ 'element-disabled': isDisabled }" :to="props.link">
      <slot />
    </router-link>
    <span v-if="props.icon" class="icon"></span>
  </button>
</template>

<style lang="scss" scoped>
.link {
  @apply flex items-center gap-x-3 font-medium transition-300 px-6 py-4 text-sm;
}
.link-hover {
  @apply hover:text-secondary hover:scale-98;
}
.icon {
  @apply i-fluent-arrow-right-24-regular text-3xl;
}
</style>
