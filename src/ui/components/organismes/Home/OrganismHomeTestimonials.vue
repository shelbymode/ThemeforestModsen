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
  <section class="testimonials">
    <header class="testimonials__header">
      <AtomMiddleTitle class="testimonials__title">Testimonials</AtomMiddleTitle>
      <div class="testimonials__arrows">
        <AtomButton class="testimonials__arrow">
          <span class="testimonials__arrow-left i-ic-outline-arrow-right-alt"
        /></AtomButton>
        <AtomButton class="testimonials__arrow">
          <span class="testimonials__right i-ic-outline-arrow-right-alt"
        /></AtomButton>
      </div>
    </header>

    <main class="testimonials__content">
      <MoleculeReviewCardIn
        v-for="cardReview in cardReviews"
        :key="cardReview.name"
        :name="cardReview.name"
        :position="cardReview.position"
        :text="cardReview.text"
      >
      </MoleculeReviewCardIn>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  @apply flex flex-col items-left w-full max-w-[57.8125%] gap-y-12 my-30;

  // .testimonials__header

  &__header {
    @apply flex items-center justify-between;
  }

  // .testimonials__title

  &__title {
  }

  // .testimonials__arrows

  &__arrows {
    @apply flex items-center gap-x-6;
  }

  // .testimonials__arrow

  &__arrow {
    @apply text-black text-4xl bg-cBackground rounded-3xl;
  }

  &__arrow-left {
    @apply rotate-z-180;
  }

  &__arrow-right {
  }

  // .testimonials__content

  &__content {
    @apply w-full flex justify-between;
  }
}
</style>
