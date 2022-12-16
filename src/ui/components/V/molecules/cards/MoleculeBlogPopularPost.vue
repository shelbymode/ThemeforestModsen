<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    date: string
    title: string
    imgSrc: string
    link?: string
  }>(),
  {
    link: '/',
  }
)
</script>

<template>
  <div class="popular-post">
    <img :src="props.imgSrc" alt="" class="popular-post__image" />
    <div class="popular-post__content">
      <AtomText class="popular-post__date">{{ props.date }}</AtomText>
      <p class="popular-post__text">{{ props.title }}</p>
      <AtomLink :link="props.link">Read more</AtomLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popular-post {
  @apply flex justify-between w-full gap-x-[4%];
  // .popular-post__image

  &__image {
    @apply rounded-md w-1/2;
  }

  // .popular-post__content

  &__content {
    @apply flex flex-col items-start w-1/2 gap-y-4;
  }

  // .popular-post__date

  &__date {
  }

  // .popular-post__text

  &__text {
    @apply text-black text-base font-bold;
  }
}
</style>
