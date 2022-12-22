<script setup lang="ts"></script>

<template>
  <div class="contact-us">
    <TemplatePageContainer class="contact-us-container">
      <MoleculeContactUsInfo class="contact-us__info" />
      <MoleculeContactUsForm class="contact-us__form" />
    </TemplatePageContainer>
  </div>
</template>

<style lang="scss" scoped>
.contact-us {
  @apply flex w-full bg-cBackground py-30 px-6;
  // .contact-us__info

  &__info {
  }

  // .contact-us__form

  &__form {
  }
}
.contact-us-container {
  @apply flex flex-row justify-between gap-x-9 items-start;
}
</style>
