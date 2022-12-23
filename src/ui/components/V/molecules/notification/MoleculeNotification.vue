<script setup lang="ts">
export type TMessage = 'success' | 'error' | 'warning'

const props = defineProps<{
  type: TMessage
}>()

const iconType = computed(() => {
  if (props.type === 'success') return 'i-fluent-checkmark-square-24-filled bg-emerald-300'
  else if (props.type === 'error') return 'i-ic-baseline-error-outline bg-red-300'
  return 'i-ic-baseline-warning-amber bg-amber-300'
})

const borderType = computed(() => {
  if (props.type === 'success') return 'border-l-emerald-300'
  else if (props.type === 'error') return 'border-l-red-300'
  return 'border-l-amber-300'
})

const colorTitle = computed(() => {
  if (props.type === 'success') return 'text-emerald-800 dark:text-emerald-300'
  else if (props.type === 'error') return 'text-red-800 dark:text-red-300'
  return 'text-amber-800 dark:text-amber-300'
})

const titleString = computed(() => {
  if (props.type === 'success') return 'Success'
  else if (props.type === 'error') return 'Alert'
  return 'Warning'
})
</script>

<template>
  <div class="notification" :class="[borderType]">
    <span class="notification__icon" :class="[iconType]"></span>

    <div class="notification__content">
      <h3 class="notification__title uppercase" :class="[colorTitle]">
        <slot name="title">{{ titleString }}</slot>
      </h3>

      <p class="notification__text">
        <slot name="message"></slot>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  @apply w-9/10 py-2 px-5 rounded-md flex border-l-10 shadow items-center justify-center gap-x-10 bg-cBackground;
  @apply md:(gap-x-20 px-10 w-full py-10 border-l-20);
  @apply dark:(bg-white/20);

  // .notification__icon

  &__icon {
    @apply text-7xl;
    @apply md:(text-8xl);
  }

  // .notification__content

  &__content {
    @apply flex flex-col items-start gap-y-6;
    @apply md:(gap-y-9);
  }

  // .notification__title

  &__title {
    @apply text-xl font-medium;
    @apply md:text-[34px];
  }

  // .notification__text

  &__text {
    @apply text-xl opacity-75;
    @apply md:(text-3xl);
  }
}
</style>
