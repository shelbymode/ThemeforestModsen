<script setup lang="ts"></script>

<template>
  <TemplatePage>
    <main class="contacts">
      <OgranismContactsHeader />
      <TemplatePageRestrictor class="contacts-container">
        <OrganismContactsForm />
        <OrganismContactsLinks />
      </TemplatePageRestrictor>

      <OrganismContactsMap />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.contacts-container {
  @apply flex flex-col items-center gap-y-8 px-6 my-10 mb-13;
  @apply md:(my-20 mb-30);
}
.contacts {
  @apply flex flex-col items-center bg-white mt-20 overflow-hidden;
}
</style>
