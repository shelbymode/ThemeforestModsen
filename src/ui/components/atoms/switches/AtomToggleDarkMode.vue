<script setup lang="ts"></script>

<template>
  <label class="toggle-switch__label relative">
    <input type="checkbox" class="toggle-switch__input" @click="toggleDark()" />
    <div class="toggle-switch__slider"></div>
  </label>
</template>

<style lang="scss" scoped>
$size: 40px;
$radius: 25px;

$left: calc($radius / 3.33);
$top: calc($radius / 5);

.toggle-switch {
  // .toggle-switch__label

  &__label {
    @apply w-full bg-dark cursor-pointer rounded-[50px];
    height: calc(1.25 * $size);
    width: 100px;
    // transform: translate(50%, 50%);
  }

  // .toggle-switch__input

  &__input {
    @apply absolute display-none;
  }

  // .toggle-switch__slider

  &__slider {
    @apply absolute w-full h-full transition-300 rounded-[50px];

    &::before {
      @apply absolute rounded-[50px] bg-dark duration-300;
      content: '';
      height: $size;
      width: $size;
      top: $top;
      left: $left;
      box-shadow: inset 28px -4px 0px 0px var(--light);
    }
  }
}

.toggle-switch__input:checked ~ .toggle-switch__slider {
  @apply bg-light;
}
.toggle-switch__input:checked ~ .toggle-switch__slider::before {
  @apply bg-dark shadow-none;
  transform: translateX(calc($radius * 2));
}
</style>
