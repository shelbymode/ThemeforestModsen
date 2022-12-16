<script setup lang="ts">
const cardReviews = [
  {
    name: 'Alex Bern',
    position: 'CEO by PixelPerfect',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
  {
    name: 'Ruben Chifundo',
    position: 'CEO by NOX',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
  {
    name: 'Tigran Nazaret',
    position: 'Data analyst',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
]
const mulitiTab = ref('')
</script>

<template>
  <main class="testimonials__content">
    <MoleculeReviewCardIn
      v-for="cardReview in cardReviews"
      :key="cardReview.name"
      :name="cardReview.name"
      :position="cardReview.position"
      :text="cardReview.text"
    />
  </main>
</template>

<style lang="scss" scoped>
.testimonials {
  // .testimonials__content

  &__content {
    @apply w-full flex justify-between;
  }
}
</style>
