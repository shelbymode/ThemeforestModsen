<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    imgSrc?: string
    date: string
    text: string
    linkInfo: {
      to: string
      label: string
    }
  }>(),
  {
    imgSrc: 'https://api.lorem.space/image/game?w=215&h=171&hash=pjy9rusa',
  }
)
</script>

<template>
  <div class="related-post">
    <img class="related-post__image" :src="props.imgSrc" alt="image" />

    <section class="related-post__content">
      <span class="related-post__date">{{ props.date }}</span>
      <h3 class="related-post__title">{{ title }}</h3>
      <p class="related-post__text">{{ text }}</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.related-post {
  @apply flex items-center justify-between;

  // .related-post__image

  &__image {
    @apply rounded-lg w-[35%] h-full object-cover border-2;
  }

  // .related-post__content

  &__content {
    @apply flex w-[60%] flex-col items-start gap-y-2;
  }

  // .related-post__date

  &__date {
    @apply text-base text-gray text-left;
  }

  // .related-post__title

  &__title {
    @apply font-bold text-black text-2xl text-left;
  }

  // .related-post__text

  &__text {
    @apply text-cGrey text-base text-left;
  }
}
</style>
