<script setup lang="ts"></script>

<template>
  <div class="contact-us">
    <TemplatePageContainer class="contact-us__container">
      <MoleculeContactUsInfo class="contact-us__info" />
      <MoleculeContactUsForm class="contact-us__form" />
    </TemplatePageContainer>
  </div>
</template>

<style lang="scss" scoped>
.contact-us {
  @apply flex w-full bg-cBackground py-30;
  // .contact-us__info

  &__info {
  }

  // .contact-us__form

  &__form {
  }
}
.contact-us__container {
  @apply flex flex-row w-full justify-between items-start;
}
</style>
