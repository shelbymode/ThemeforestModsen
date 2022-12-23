<script setup lang="ts"></script>

<template>
  <section class="service-links">
    <TemplatePageRestrictor class="service-link-container">
      <AtomDivideLink
        :links="[
          { name: 'Home', link: '/home' },
          { name: 'Services', link: '/services' },
        ]"
      />
    </TemplatePageRestrictor>
  </section>
</template>

<style lang="scss" scoped>
.service-links {
  @apply flex items-center justify-center w-full py-5 dark:bg-secondary/95;
}
.service-link-container {
  @apply flex items-start px-5;
}
</style>
