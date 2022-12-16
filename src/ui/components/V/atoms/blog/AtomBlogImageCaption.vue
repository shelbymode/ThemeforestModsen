<script setup lang="ts">
const props = defineProps<{
  date: string
  author: string
}>()
</script>

<template>
  <figcaption class="image-caption">
    <AtomText class="image-caption__date">
      <span class="image-caption__date-icon" />
      {{ props.date }}
    </AtomText>

    <AtomText class="image-caption__author">
      <span class="image-caption__author-icon" />
      {{ props.author }}
    </AtomText>
  </figcaption>
</template>

<style lang="scss" scoped>
.image-caption {
  @apply flex items-center justify-start gap-x-8;
  // .image-caption__date

  &__date {
    @apply flex items-center gap-x-2 text-sm;
  }

  // .image-caption__date-icon

  &__date-icon {
    @apply i-fluent-calendar-20-filled;
  }

  // .image-caption__author

  &__author {
    @apply flex items-center gap-x-2 text-sm;
  }

  // .image-caption__author-icon

  &__author-icon {
    @apply i-fluent-person-20-filled;
  }
}
</style>
