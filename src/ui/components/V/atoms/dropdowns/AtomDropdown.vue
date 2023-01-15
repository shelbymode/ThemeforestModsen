<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    title: string
    titleActiveClasses?: string
    titleInactiveClasses?: string
    isRevealed?: boolean
  }>(),
  {
    titleActiveClasses: '',
    titleInactiveClasses: '',
    isRevealed: false,
  }
)

const [isRevealed, toggleReveal] = useToggle(props.isRevealed)

const { beforeEnter, enter, beforeLeave, leave } = useSmoothHeight(1.2)
</script>

<template>
  <div class="dropdown">
    <header class="dropdown__header" @click="toggleReveal()" @keypress="toggleReveal()">
      <h3
        class="dropdown__title"
        :class="{
          [props.titleActiveClasses]: isRevealed,
          [props.titleInactiveClasses]: !isRevealed,
        }"
      >
        {{ props.title }}
      </h3>
      <slot name="control-icon">
        <span class="dropdown__icon" :class="{ 'rotate-z--180 ': !isRevealed }" />
      </slot>
    </header>

    <Transition
      name="dropdown"
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isRevealed" class="dropdown__content" v-bind="$attrs">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  @apply flex flex-col items-center border-b-2 py-5 px-3 overflow-hidden border-cGrey;

  // .dropdown__header

  &__header {
    @apply flex items-center w-full justify-between px-5;
    @apply hover:(opacity-66 cursor-pointer);
    @apply sm:px-20;
  }

  // .dropdown__icon

  &__icon {
    @apply i-fluent-chevron-up-12-regular text-4xl transition-300;
  }

  // .dropdown__title

  &__title {
    @apply text-xl font-bold;
    @apply sm:text-2xl;
  }

  // .dropdown__content

  &__content {
    @apply text-xl w-full px-10 text-cGrey translate-y-[10%];
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  @apply opacity-0;
}
</style>
