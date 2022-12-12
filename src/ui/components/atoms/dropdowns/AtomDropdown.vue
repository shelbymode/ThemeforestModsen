<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    content: string
    titleActiveClasses: string
    titleInactiveClasses: string
    isRevealed?: boolean
  }>(),
  {
    titleActiveClasses: '',
    titleInactiveClasses: '',
    isRevealed: true,
  }
)

const [isRevealed, toggleReveal] = useToggle(props.isRevealed)

const beforeEnter = (el: HTMLElement) => (el.style.height = '0')
const enter = (el: HTMLElement) => (el.style.height = el.scrollHeight + 'px')
const beforeLeave = (el: HTMLElement) => (el.style.height = el.scrollHeight + 'px')
const leave = (el: HTMLElement) => (el.style.height = '0')
</script>

<template>
  <div class="dropdown">
    <header class="dropdown__header" @click="toggleReveal()">
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
        <span class="dropdown__icon" :class="{ 'rotate-z--180 ': isRevealed }"></span>
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
      <main v-show="isRevealed" class="dropdown__content">{{ props.content }}</main>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  @apply flex flex-col w-200 items-center gap-y-0 border-b-2 p-5 overflow-hidden border-cGrey;

  // .dropdown__header

  &__header {
    @apply flex items-center w-full justify-between py-3;
    @apply hover:(opacity-66 cursor-pointer);
  }

  // .dropdown__icon

  &__icon {
    @apply i-fluent-chevron-up-12-regular text-4xl text-black transition-300;
  }

  // .dropdown__title

  &__title {
    @apply text-2xl font-bold;
  }

  // .dropdown__content

  &__content {
    @apply text-xl text-cGrey;
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
