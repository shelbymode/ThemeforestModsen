<script setup lang="ts"></script>

<template>
  <section class="blog__content">
    <MoleculeBlogCard
      v-for="card in 3"
      :key="card"
      title="Machine Learning"
      date="22 June 2022"
      text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
      :link-info="{ label: 'Read more', to: '/' }"
    />
  </section>
</template>

<style lang="scss" scoped>
.blog {
  // .blog__content

  &__content {
    @apply w-full flex justify-between;
  }
}
</style>
