<script setup lang="ts">
const isLgScreen = useMediaQuery(`(min-width: 1024px)`)
</script>

<template>
  <TemplatePage>
    <main class="about">
      <OrganismAboutPromo />
      <OrganismAboutCustomersReviews />
      <OrganismContactUs v-if="isLgScreen" />
      <MoleculeHelpSection v-else class="mb-6" />
      <MoleculeSubscribeSection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.about {
  @apply flex flex-col items-center bg-white mt-20 overflow-hidden gap-y-6 md:gap-y-9;
}
</style>
