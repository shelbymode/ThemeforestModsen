<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
</script>

<template>
  <section class="blog-tags">
    <AtomMiddleTitle class="blog-tags__title">Tags</AtomMiddleTitle>
    <div class="blog-tags__content">
      <AtomTag v-for="tag in tags" :key="tag">{{ tag }}</AtomTag>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog-tags {
  @apply flex flex-col items-start w-full gap-y-8 py-15;
  // .blog-tags__title

  &__title {
  }

  // .blog-tags__content

  &__content {
    @apply flex flex-wrap gap-4;
  }
}
</style>
