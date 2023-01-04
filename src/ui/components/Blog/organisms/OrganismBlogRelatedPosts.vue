<script setup lang="ts"></script>

<template>
  <section class="related-posts">
    <AtomMiddleTitle class="related-posts__title">Related Post</AtomMiddleTitle>
    <div class="related-posts__cards">
      <MoleculeBlogRelatedPost
        v-for="card in 3"
        :key="card"
        class="related-posts__card"
        :title="toCapitalizeEach($t(`common.machineLearning`))"
        date="22 June 2022"
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
        :link-info="{ label: 'Read more', to: '/' }"
      >
      </MoleculeBlogRelatedPost>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.related-posts {
  @apply flex w-full flex-col items-start gap-y-9 py-15;

  // .related-posts__title

  &__title {
  }

  // .related-posts__cards

  &__cards {
    @apply flex flex-col items-start gap-y-10;
  }

  // .related-posts__card

  &__card {
  }
}
</style>
