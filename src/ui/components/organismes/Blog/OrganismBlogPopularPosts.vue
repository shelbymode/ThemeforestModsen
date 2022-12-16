<script setup lang="ts">
const popularPosts = [
  {
    date: '22 June 2022',
    title: 'ISO 13485 compliance of medical devices',
    imgSrc: 'https://api.lorem.space/image/fashion?w=190&h=114&hash=dti5vifj',
  },
  {
    date: '22 June 2022',
    title: 'Business analysis helps you  in finance',
    imgSrc: 'https://api.lorem.space/image/fashion?w=190&h=114&hash=dti5vifj',
  },
  {
    date: '22 June 2022',
    title: 'Benefits of telemedicine in nursing homes',
    imgSrc: 'https://api.lorem.space/image/fashion?w=190&h=114&hash=dti5vifj',
  },
]
</script>
<template>
  <div class="popular-posts">
    <AtomMiddleTitle class="popular-posts__title">Popular posts</AtomMiddleTitle>
    <div class="popular-posts__cards">
      <MoleculeBlogPopularPost
        v-for="post in popularPosts"
        :key="post.title"
        class="popular-posts__card"
        :date="post.date"
        :img-src="post.imgSrc"
        :title="post.title"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popular-posts {
  @apply flex flex-col items-start gap-y-10 py-15;
  // .popular-posts__title

  &__title {
  }

  // .popular-posts__cards

  &__cards {
    @apply flex flex-col items-start gap-y-10;
  }

  // .popular-posts__card

  &__card {
  }
}
</style>
