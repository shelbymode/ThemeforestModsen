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
    <AtomCircleAvatar class="card__avatar" />
    <p class="card__desc">{{ props.text }}</p>
    <h3 class="card__name">{{ props.name }}</h3>
    <span class="card__position">{{ props.position }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply flex flex-col gap-y-5 pb-6 px-6 rounded items-start;
  @apply md:max-w-[540px];
}
.card__avatar {
  @apply translate-y-[-50%];
}
.card__desc {
  @apply text-cGrey text-base text-left mt--5;
}
.card__name {
  @apply text-base text-black font-bold;
}
.card__position {
  @apply text-sm text-cGrey font-medium;
}
</style>
