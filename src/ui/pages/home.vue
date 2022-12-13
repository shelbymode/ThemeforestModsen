<script setup lang="ts"></script>

<template>
  <TemplatePage>
    <main class="home">
      <OrganismHomePresentation />
      <OgranismHomeBenefits />
      <OrganismHomeTestimonials />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.home {
  @apply flex flex-col items-center bg-white;
}
</style>
