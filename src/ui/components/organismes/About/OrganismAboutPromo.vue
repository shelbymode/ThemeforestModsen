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

const labelStats = [
  { indicator: '1830+', text: 'Project executed' },
  { indicator: '834+', text: 'Satisfied customers' },
  { indicator: '390', text: 'Data management' },
  { indicator: '834', text: 'Satisfied customers' },
]
</script>

<template>
  <section class="about-links">
    <AtomBigTitle class="about-links__title">About us</AtomBigTitle>
    <AtomDivideLink
      class="about-links__links"
      :links="[
        { name: 'Home', link: '/home' },
        { name: 'About Us', link: '/about' },
      ]"
    />
  </section>

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

  <section class="about-stats">
    <div class="about-stats-container">
      <AtomBigTitle class="about-stats__title">Ensome in numbers</AtomBigTitle>
      <div class="about-stats__stats">
        <template v-for="labelStat in labelStats" :key="labelStat.text">
          <AtomLabelStats class="about-stats__stat" :indicator="labelStat.indicator" :text="labelStat.text" />
          <div class="about-stats__stat-divider"></div>
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './OrganismAboutPromo.scss';
</style>
