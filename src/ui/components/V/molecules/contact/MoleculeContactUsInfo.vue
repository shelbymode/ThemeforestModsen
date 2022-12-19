<script setup lang="ts">
const contactsInfo = [
  { label: 'Email address', text: 'ensome@info.co.us' },
  { label: 'Phone number', text: '+1601-201-5580' },
  { label: 'Address', text: '1642 Washington Avenue, Jackson, MS, Mississippi, 39201' },
]
</script>

<template>
  <section class="contact">
    <AtomMiddleTitle class="contact__title">
      Left questions? Contacts us now for a free consultation and free trial!
    </AtomMiddleTitle>
    <AtomText class="contact__text">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
      commodi.
    </AtomText>

    <div class="contact-info-container">
      <template v-for="contactInfo in contactsInfo" :key="contactInfo.label">
        <div class="contact-info">
          <h3 class="contact-info__label">{{ contactInfo.label }}</h3>
          <p class="contact-info__text">{{ contactInfo.text }}</p>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  @apply max-w-135 w-full flex flex-col items-start gap-y-6;
  // .contact__title

  &__title {
  }

  // .contact__text

  &__text {
    @apply pb-15;
  }
}
.contact-info-container {
  @apply flex flex-col items-start gap-y-6;
}
.contact-info {
  @apply flex flex-col items-start gap-y-1;

  // .contact-info__label

  &__label {
    @apply text-base text-cGrey;
  }

  // .contact-info__text

  &__text {
    @apply text-base text-black font-bold;
  }
}
</style>
