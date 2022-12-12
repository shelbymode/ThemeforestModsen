<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    position: string
    text: string
    imgSrc?: string
  }>(),
  {
    imgSrc: 'https://api.lorem.space/image/game?w=685&h=235&hash=pjy9rusa',
  }
)
</script>

<template>
  <div class="card shadow-card-3">
    <header class="card__header">
      <AtomCircleAvatar class="card__avatar" />
      <h3 class="card__name">{{ props.name }}</h3>
      <span class="card__position">{{ props.position }}</span>
    </header>
    <p class="card__desc">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply max-w-[540px] flex flex-col gap-y-5 p-6 rounded items-start;
}
.card__header {
  @apply grid items-center gap-x-5 grid-cols-[fit-content_1fr] grid-rows-2;
}
.card__avatar {
  @apply row-start-1 row-span-2 col-start-1 col-span-1;
}
.card__name {
  @apply text-base row-start-1 row-span-1 col-start-2 col-span-1 text-black font-bold;
}
.card__position {
  @apply text-sm row-start-2 row-span-1 col-start-2 col-span-1 text-cGrey font-medium;
}
.card__desc {
  @apply text-cGrey text-base text-left;
}
</style>
