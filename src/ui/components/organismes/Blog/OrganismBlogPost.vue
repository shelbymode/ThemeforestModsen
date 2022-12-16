<script setup lang="ts"></script>

<template>
  <section class="blog-links">
    <AtomBigTitle class="blog-links__title">2022 software development trends explained with benefits </AtomBigTitle>
    <AtomDivideLink
      class="blog-links__links"
      :links="[
        { name: 'Home', link: '/home' },
        { name: '2022 software development trends ', link: '/blog' },
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
@import './OrganismBlogPost.scss';
</style>
