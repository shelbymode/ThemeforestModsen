<script setup lang="ts">
const labelStats = [
  { indicator: '1830+', text: 'Project executed' },
  { indicator: '834+', text: 'Satisfied customers' },
  { indicator: '390', text: 'Data management' },
]
</script>

<template>
  <section class="learn-more">
    <AtomBigTitle class="learn-more__title">
      Find true power in your data with <span class="learn-more__special-title">Ensome</span>
    </AtomBigTitle>
    <AtomText class="learn-more__text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi.
    </AtomText>
  </section>

  <div class="learn-more__image-wrapper">
    <img src="https://api.lorem.space/image/fashion?w=1920&h=590&hash=kmt2qny0" class="learn-more__image" />
    <AtomCircleButton class="learn-more__button-learn-more">Learn more</AtomCircleButton>
  </div>

  <section class="discover">
    <AtomBigTitle class="discover__title"
      >The <span class="discover__special-title">newest</span> business analytics platform</AtomBigTitle
    >
    <div class="discover__content">
      <AtomText class="discover__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </AtomText>
      <AtomButton class="discover__button">Discover more</AtomButton>
    </div>
  </section>

  <section class="promo">
    <img src="https://api.lorem.space/image/fashion?w=929&h=740&hash=kmt2qny0" class="promo__image" />
    <div class="promo__content">
      <AtomMiddleTitle class="promo__title">Radically new solutions for data</AtomMiddleTitle>
      <AtomText class="promo__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </AtomText>
      <AtomButton class="promo__button-learn-more">Learn more</AtomButton>
    </div>
  </section>

  <section class="stats">
    <AtomMiddleTitle class="stats__title">We provide services that guarantee your success</AtomMiddleTitle>

    <div class="stats__content">
      <div class="stats__stats">
        <AtomLabelStats
          v-for="labelStat in labelStats"
          :key="labelStat.text"
          :indicator="labelStat.indicator"
          :text="labelStat.text"
        ></AtomLabelStats>
      </div>

      <AtomText class="stats__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </AtomText>
    </div>

    <img src="../../../../../assets/images/clients-logos-section.png" class="stats__clients" />
  </section>
</template>

<style lang="scss" scoped>
@import './OrganismHomePresentation.scss';
</style>
