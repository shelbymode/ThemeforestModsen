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
    <img :src="props.imgSrc" alt="random image" class="popular-post__image" />
    <section class="popular-post__content">
      <AtomText class="popular-post__date">{{ props.date }}</AtomText>
      <h3 class="popular-post__text">{{ props.title }}</h3>
      <AtomLink class="popular-post__link text-sm" :link="props.link">Read more</AtomLink>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.popular-post {
  @apply flex justify-between w-full gap-x-[4%];
  // .popular-post__image

  &__image {
    @apply object-cover rounded-md max-w-1/2;
  }

  // .popular-post__content

  &__content {
    @apply flex flex-col items-start w-1/2 gap-y-4;
    @apply md:(p-4 shadow);
  }

  // .popular-post__date

  &__date {
  }

  // .popular-post__text

  &__text {
    @apply text-black text-sm font-bold;
  }

  // .popular-post__link {

  &__link {
  }
}
</style>
