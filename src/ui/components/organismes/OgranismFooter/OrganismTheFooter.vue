<script setup lang="ts">
const navigationLinks = ['Home', 'Solutions', 'Blog', 'Contacts', 'Our team', 'About Us', 'Services', 'FAQ']
const serviceLinks = ['Pages', 'Elements', 'FAQ', 'Pricing', 'Site map']
</script>

<template>
  <TemplateFooter>
    <template #logo>
      <span class="icon" />
    </template>

    <template #social-text>
      <p class="social__text">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi.
      </p>
    </template>

    <template #social-links>
      <span class="social__icon i-carbon-logo-facebook"></span>
      <span class="social__icon i-carbon-logo-twitter"></span>
      <span class="social__icon i-carbon-logo-linkedin"></span>
      <span class="social__icon i-carbon-logo-youtube"></span>
      <span class="social__icon i-fluent-sport-basketball-24-filled"></span>
      <span class="social__icon i-carbon-logo-instagram"></span>
    </template>

    <template #links>
      <div class="navigation">
        <div class="navigation-links">
          <h3 class="navigation-links__title">Quick link</h3>
          <AtomHeaderLink v-for="itemLink in navigationLinks" :key="itemLink" :link="itemLink">{{
            itemLink
          }}</AtomHeaderLink>
        </div>

        <nav class="navigation-links">
          <h3 class="navigation-links__title">Services</h3>
          <AtomHeaderLink v-for="itemLink in serviceLinks" :key="itemLink" :link="itemLink">{{
            itemLink
          }}</AtomHeaderLink>
        </nav>
      </div>
    </template>

    <template #contacts>
      <div class="contact">
        <div class="contact-links">
          <h3 class="contact-links__title">Contact info</h3>
          <p class="contact-links__phone">+1 601-201-5580</p>
          <p class="contact-links__address">1642 Washington Avenue, Jackson, MS, 39201</p>
          <AtomLink link="/" class="contact-links__email">ensome@info.co.us</AtomLink>
          <AtomLink link="/driving" class="contact-links__driving">Driving derections</AtomLink>
        </div>
      </div>
    </template>

    <template #addtional>
      <p class="additional__rights">© 2022 Ensome. All Rights Reserved.</p>
      <AtomLink icon link="/policy" class="additional__policy">Privacy policy</AtomLink>
      <AtomLink icon link="/terms" class="additional__terms">Terms of us</AtomLink>
    </template>
  </TemplateFooter>
</template>

<style lang="scss" scoped>
@import './OrganismTheFooter.scss';
</style>
