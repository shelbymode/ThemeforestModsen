<script setup lang="ts"></script>

<template>
  <AtomButton class="demo-button">
    Watch the demo
    <span class="text-2xl" i-fluent-play-circle-24-regular></span>
  </AtomButton>
</template>

<style lang="scss" scoped>
.demo-button {
  @apply bg-primary text-white;
  @apply hover:(bg-primary/80);
  @apply dark:(bg-white text-black);
  @apply dark:hover:(hover:bg-black hover:text-white);
}
</style>
