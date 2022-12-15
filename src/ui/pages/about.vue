<script setup lang="ts"></script>

<template>
  <TemplatePage>
    <main class="about">
      <OrganismAboutPromo />
      <OrganismAboutCustomers />
      <OrganismAboutCustomersReviews />
      <OrganismContactUs />
      <MoleculeSubscribeSection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.about {
  @apply flex flex-col items-center bg-white;
}
</style>
