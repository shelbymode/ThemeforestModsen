<script setup lang="ts">
const aboutCards = [
  {
    title: 'Who we are',
    img: 'https://api.lorem.space/image/?w=635&h=425&hash=nbzuynjb',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia lectus.',
  },
  {
    title: 'Our mission',
    img: 'https://api.lorem.space/image/?w=635&h=425&hash=nbzuynjb',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. ',
  },
]
</script>

<template>
  <section class="about-cards">
    <div class="about-links-container">
      <div v-for="card in aboutCards" :key="card.title" class="card">
        <div class="card__content">
          <AtomBigTitle class="card__title">{{ card.title }}</AtomBigTitle>
          <AtomText class="card__text">{{ card.text }}</AtomText>
        </div>
        <img class="card__image" src="https://api.lorem.space/image/fashion?w=635&h=425&hash=66a90khq" alt="random" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-cards {
  @apply grid place-items-center w-full py-30;
}

.about-links-container {
  @apply flex flex-wrap gap-y-35 w-full max-w-[57.8125%];
}

.card {
  @apply flex w-full justify-between;
  // .card__content

  &__content {
    @apply max-w-2/5 w-full flex flex-col items-start gap-y-8;
  }

  // .card__title

  &__title {
  }

  // .card__text

  &__text {
  }

  // .card__image

  &__image {
    @apply rounded-md;
  }
}

.card:nth-of-type(2n) > .card__content {
  order: 2;
}
</style>
