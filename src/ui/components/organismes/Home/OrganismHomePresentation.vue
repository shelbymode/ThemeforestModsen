<script setup lang="ts">
const labelStats = [
  { indicator: '1830+', text: 'Project executed' },
  { indicator: '834+', text: 'Satisfied customers' },
  { indicator: '390', text: 'Data management' },
]
</script>

<template>
  <section class="learn-more-section">
    <h3 class="learn-more-section__title">
      Find true power in your data with <span class="learn-more-section__special-title">Ensome</span>
    </h3>
    <p class="learn-more-section__text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi.
    </p>
  </section>

  <div class="learn-more-section__image-wrapper">
    <img src="https://api.lorem.space/image/fashion?w=1920&h=590&hash=kmt2qny0" class="learn-more-section__image" />
    <AtomCircleButton class="learn-more-section__button-learn-more">Learn more</AtomCircleButton>
  </div>

  <section class="discover-section">
    <h3 class="discover-section__title">
      The <span class="discover-section__special-title">newest</span> business analytics platform
    </h3>
    <div class="discover-section__content">
      <p class="discover-section__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <AtomButton class="discover-section__button">Discover more</AtomButton>
    </div>
  </section>

  <section class="promo-section">
    <img src="https://api.lorem.space/image/fashion?w=929&h=740&hash=kmt2qny0" class="promo-section__image" />
    <div class="promo-section__content">
      <h3 class="promo-section__title">Radically new solutions for data</h3>
      <p class="promo-section__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <AtomButton class="promo-section__button-learn-more">Learn more</AtomButton>
    </div>
  </section>

  <section class="stats-section">
    <div class="stats-section__title">We provide services that guarantee your success</div>

    <div class="stats-section__content">
      <div class="stats-section__stats">
        <AtomLabelStats
          v-for="labelStat in labelStats"
          :key="labelStat.text"
          :indicator="labelStat.indicator"
          :text="labelStat.text"
        ></AtomLabelStats>
      </div>

      <div class="stats-section__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </div>
    </div>

    <img src="../../../../../assets/images/clients-logos-section.png" class="stats-section__clients" />
  </section>
</template>

<style lang="scss" scoped>
@import './OrganismHomePresentation.scss';
</style>
