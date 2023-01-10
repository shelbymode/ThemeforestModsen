<script setup lang="ts"></script>

<template>
  <section class="about-customers">
    <TemplatePageRestrictor class="about-customers-container">
      <AtomBigTitle class="about-customers__title">
        {{ $t(`about.ourCustomers`) }}
      </AtomBigTitle>
      <AtomText class="about-customers__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam.
      </AtomText>
      <AtomStatsClient class="about-customers__clients" />
    </TemplatePageRestrictor>
  </section>
</template>

<style lang="scss" scoped>
.about-customers {
  @apply flex w-full px-6;
  @apply md:py-15;

  // .about-customers__title

  &__title {
    @apply w-full text-center;
    @apply lg:text-left;
  }

  // .about-customers__text

  &__text {
    @apply lg:max-w-110;
  }

  // .about-customers__clients

  &__clients {
  }
}
.about-customers-container {
  @apply flex flex-col items-start gap-y-8 py-6;
}
</style>
