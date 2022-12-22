<script setup lang="ts"></script>

<template>
  <TemplateFooter>
    <template #logo>
      <span class="icon" />
    </template>

    <template #quick-links>
      <MoleculeFooterQuickLinks />
    </template>

    <template #service-links>
      <MoleculeFooterServiceLinks />
    </template>

    <template #contact-links>
      <MoleculeFooterContactLinks />
    </template>

    <template #social-links>
      <MoleculeFooterSocialLinks />
    </template>

    <template #social-text>
      <AtomText class="px-5">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi.
      </AtomText>
    </template>

    <template #additional>
      <MoleculeFooterAdditional />
    </template>

    <template #rights>
      <section class="rights flex items-center">
        <p class="additional__rights">© 2022 Ensome. All Rights Reserved.</p>
      </section>
    </template>
  </TemplateFooter>
</template>

<style lang="scss" scoped>
.icon {
  @apply inline-block bg-primary w-[150px] h-[49px] scale-80 translate-x-[-10%];
  @apply dark:(bg-white);
  @apply sm:(scale-100 translate-x-0);
  mask-image: url('/assets/images/svg-icons/logo_blue.svg');
  -webkit-mask-image: url('/assets/images/svg-icons/logo_blue.svg');
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

.rights {
  @apply flex w-full items-center justify-left p-3;
  @apply md:text-2xl;
  @apply lg:text-xl;
}
</style>
