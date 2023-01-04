<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const aboutCardsBig = [
  {
    title: computed(() => toCapitalize(t(`about.whoWeAre`))),
    img: 'https://api.lorem.space/image/?w=635&h=425&hash=nbzuynjb',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia lectus.',
  },
  {
    title: computed(() => toCapitalize(t(`about.ourMission`))),
    img: 'https://api.lorem.space/image/?w=635&h=425&hash=nbzuynjb',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. ',
  },
]

const aboutCardsSmall = [
  {
    title: computed(() => toCapitalize(t(`about.ourExperience`))),
    img: 'https://api.lorem.space/image/?w=635&h=425&hash=nbzuynjb',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
  },
]

const isLgScreen = useMediaQuery(`(min-width: 1024px)`)

const currentCards = computed(() => (isLgScreen.value === true ? aboutCardsBig : aboutCardsSmall))
</script>

<template>
  <section class="about-cards">
    <TemplatePageRestrictor class="about-links-container">
      <div v-for="card in currentCards" :key="card.title.value" class="card">
        <section class="card__content">
          <AtomBigTitle class="card__title">{{ card.title.value }}</AtomBigTitle>
          <AtomText class="card__text">{{ card.text }}</AtomText>
        </section>
        <img class="card__image" src="https://api.lorem.space/image/fashion?w=635&h=425&hash=66a90khq" alt="random" />
      </div>
    </TemplatePageRestrictor>
  </section>
</template>

<style lang="scss" scoped>
.about-cards {
  @apply grid place-items-center w-full px-6 lg:py-15;
}

.about-links-container {
  @apply flex flex-wrap gap-y-35 lg:gap-y-15;
}

.card {
  @apply flex flex-col w-full gap-y-6 gap-x-6 justify-between;
  @apply lg:(flex-row);
  // .card__content

  &__content {
    @apply w-full flex flex-col items-start gap-y-8;
    @apply lg:max-w-2/5;
  }

  // .card__title

  &__title {
    @apply text-center w-full;
    @apply lg:text-left;
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
