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
</script>

<template>
  <div class="dropdown relative">
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
      <slot v-if="!isRevealed" name="control-icon-inactive">
        <span i-fluent-chevron-down-12-regular text-4xl></span>
      </slot>
      <slot v-else name="control-icon-active">
        <span i-fluent-chevron-up-12-regular text-4xl></span>
      </slot>
    </header>
    <Transition name="dropdown" mode="out-in" appear>
      <main v-if="isRevealed" class="dropdown__content">
        {{ props.content }}
      </main>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  @apply flex flex-col w-200 items-center gap-y-6 p-5 border-b border-black;

  // .dropdown__header

  &__header {
    @apply flex items-center w-full justify-between duration-300 py-3 hover:(scale-101 opacity-66 cursor-pointer);
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
  transition: opacity 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>
