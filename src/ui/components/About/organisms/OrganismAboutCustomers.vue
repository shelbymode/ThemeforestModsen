<script setup lang="ts"></script>

<template>
  <section class="about-customers">
    <TemplatePageContainer class="about-customers-container">
      <AtomBigTitle class="about-customers__title">Our customers</AtomBigTitle>
      <AtomText class="about-customers__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam.
      </AtomText>
      <AtomStatsClient class="about-customers__clients" />
    </TemplatePageContainer>
  </section>
</template>

<style lang="scss" scoped>
.about-customers {
  @apply flex w-full py-30;
  // .about-customers__title

  &__title {
  }

  // .about-customers__text

  &__text {
    @apply max-w-110;
  }

  // .about-customers__clients

  &__clients {
  }
}
.about-customers-container {
  @apply items-start gap-y-8;
}
</style>
