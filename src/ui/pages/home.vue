<script setup lang="ts"></script>

<template>
  <TemplatePage>
    <main class="home">
      <OrganismHomePresentation />
      <OgranismHomeBenefits />
      <OrganismTestimonialsReviews />
      <OrganismHomePricing />
      <OrganismHomeOurBlog />
      <OrganismHomeAdditional />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.home {
  @apply flex flex-col items-center bg-white mt-20 overflow-hidden gap-y-10;
  @apply md:gap-y-20;
}
</style>
