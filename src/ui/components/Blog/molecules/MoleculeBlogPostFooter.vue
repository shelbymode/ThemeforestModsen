<script setup lang="ts">
const props = defineProps<{
  views: number
  tags: string[]
}>()

const socialIcons = [
  'i-carbon-logo-facebook',
  'i-carbon-logo-twitter',
  'i-carbon-logo-linkedin',
  'i-carbon-logo-youtube',
  'i-fluent-sport-basketball',
  'i-carbon-logo-instagram',
]
</script>
<template>
  <div class="post-footer">
    <AtomText class="post-footer__views">
      <span class="post-footer__views-icon" />
      {{ props.views }} Views
    </AtomText>

    <AtomText class="post-footer__social-links">
      <AtomButton class="post-footer__share-button">
        <span class="post-footer__share-icon" />
        Share:
      </AtomButton>
      <a
        v-for="socialIcon in socialIcons"
        :key="socialIcon"
        aria-label="Social media"
        class="post-footer__social-icon"
        :class="socialIcon"
        href="external-resource"
      ></a>
    </AtomText>

    <AtomText class="post-footer__social-tags">
      <AtomButton class="post-footer__tag-button">
        <span class="post-footer__tag-icon" />
        Tags:
      </AtomButton>
      <AtomTag v-for="tag in tags" :key="tag" class="post-footer__tag">{{ tag }}</AtomTag>
    </AtomText>
  </div>
</template>

<style lang="scss" scoped>
.post-footer {
  @apply flex w-full gap-y-2 flex-col items-start;
  @apply sm:(flex-row items-center gap-x-8 justify-between);
  // .post-footer__views

  &__views {
    @apply flex items-center gap-x-2 text-sm;
  }

  // .post-footer__views-icon

  &__views-icon {
    @apply i-fluent-data-line-24-regular text-3xl;
  }

  // .post-footer__social-links

  &__social-links {
    @apply flex items-center gap-x-1;
  }

  // .post-footer__share-button

  &__share-button {
    @apply text-sm px-0 mr-2;
  }

  // .post-footer__share-icon

  &__share-icon {
    @apply i-fluent-share-20-regular text-black text-xl;
  }

  // .post-footer__social-icon

  &__social-icon {
    @apply text-2xl text-black;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  // .post-footer__social-tags

  &__social-tags {
    @apply flex text-sm items-center gap-x-3;
  }

  // .post-footer__tag-button

  &__tag-button {
    @apply px-0;
  }

  // .post-footer__tag
  &__tag {
    @apply py-1;
  }

  // .post-footer__tag-icon

  &__tag-icon {
    @apply i-carbon-tag text-black;
  }
}
</style>
