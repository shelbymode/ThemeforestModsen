<script setup lang="ts"></script>

<template>
  <label class="toggle-switch__label">
    <input :checked="!isDark" type="checkbox" class="toggle-switch__input" @click="toggleDark()" />
    <div class="toggle-switch__slider">
      <span class="toggle-switch__slider-weather"></span>
    </div>
  </label>
</template>

<style lang="scss" scoped>
$height: 40px;
$width: 80px;

.toggle-switch {
  // .toggle-switch__label

  &__label {
    @apply w-full ml-10 cursor-pointer border-1 bg-cBackground rounded-3xl;
    @apply dark:(bg-dark border-helperBlueTwo);
    height: $height;
    width: $width;
  }

  // .toggle-switch__input

  &__input {
    @apply display-none;
  }

  // .toggle-switch__slider

  &__slider {
    @apply flex items-center w-full h-full text-4xl transition-300;
  }

  // .toggle-switch__slider-weather

  &__slider-weather {
    transform: translateX(calc($width / 2));
    @apply duration-300 i-fluent-weather-sunny-24-filled bg-black;
    @apply dark:(i-fluent-weather-moon-20-filled bg-white rotate-z-135 translate-x-0);
  }
}
</style>
