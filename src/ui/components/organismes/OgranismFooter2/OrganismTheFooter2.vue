<script setup lang="ts">
const aboutLinks = [
  { name: 'Home', link: '/home' },
  { name: 'About Us', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Solutions', link: '/solutions' },
]
const infoLinks = ['Contacts', 'Out team', 'Blog', 'FAQ']
const serviceLinks = ['Pages', 'Elements', 'Site map', 'Pricing', 'FAQ']
</script>

<template>
  <TemplateFooter>
    <template #logo>
      <span class="icon"></span>
    </template>

    <template #links>
      <div class="footer-links">
        <div class="footer-links-container">
          <h3 class="footer-links__title">About</h3>
          <AtomHeaderLink v-for="itemLink in aboutLinks" :key="itemLink.name" :link="itemLink.link">{{
            itemLink.name
          }}</AtomHeaderLink>
        </div>

        <div class="footer-links-container">
          <h3 class="footer-links__title">Information</h3>
          <AtomHeaderLink v-for="itemLink in infoLinks" :key="itemLink" :link="itemLink">{{ itemLink }}</AtomHeaderLink>
        </div>

        <div class="footer-links-container">
          <h3 class="footer-links__title">Services</h3>
          <AtomHeaderLink v-for="itemLink in serviceLinks" :key="itemLink" :link="itemLink">{{
            itemLink
          }}</AtomHeaderLink>
        </div>
      </div>
    </template>

    <template #contacts>
      <div class="contact">
        <h3 class="contact__title">Contacts</h3>
        <main class="contact__content">
          <p class="contact__phone">+1 601-201-5580</p>
          <p class="contact__address">1642 Washington Avenue, Jackson, MS, 39201</p>
          <AtomLink link="/" class="contact__email">ensome@info.co.us</AtomLink>
          <AtomLink link="/driving" class="contact__driving">Driving derections</AtomLink>
        </main>
      </div>
    </template>

    <template #social>
      <div class="social">
        <h3 class="social__title">Social</h3>
        <div class="social__icons">
          <span class="social__icon i-carbon-logo-facebook"></span>
          <span class="social__icon i-carbon-logo-twitter"></span>
          <span class="social__icon i-carbon-logo-linkedin"></span>
          <span class="social__icon i-carbon-logo-youtube"></span>
          <span class="social__icon i-fluent-sport-basketball-24-filled"></span>
          <span class="social__icon i-carbon-logo-instagram"></span>
        </div>
      </div>
    </template>

    <template #addtional>
      <div class="additional">
        <AtomLink icon link="/policy" class="additional__policy">Privacy policy</AtomLink>
        <AtomLink icon link="/terms" class="additional__terms">Terms of us</AtomLink>
        <p class="additional__rights">© 2022 Ensome. All Rights Reserved.</p>
      </div>
    </template>
  </TemplateFooter>
</template>

<style lang="scss" scoped>
@import './OrganismTheFooter2.scss';
</style>
