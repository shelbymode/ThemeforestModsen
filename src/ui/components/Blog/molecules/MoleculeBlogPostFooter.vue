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
        class="post-footer__social-icon"
        :class="socialIcon"
        href=""
      ></a>
    </AtomText>

    <AtomText class="post-footer__social-tags">
      <AtomButton class="post-footer__tag-button">
        <span class="post-footer__tag-icon" />
        Tags:
      </AtomButton>
      <AtomTag class="post-footer__tag" v-for="tag in tags" :key="tag">{{ tag }}</AtomTag>
    </AtomText>
  </div>
</template>

<style lang="scss" scoped>
@import './MoleculeBlogPostFooter.scss';
</style>
