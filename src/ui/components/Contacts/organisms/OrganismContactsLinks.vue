<script setup lang="ts">
const contactIconLinks = [
  {
    icon: 'i-carbon-email',
    title: 'Email',
    additionalInfo: 'ensome@info.co.us',
  },
  {
    icon: 'i-carbon-phone-filled',
    title: 'Phone',
    additionalInfo: '+1 601-201-5580',
  },
  {
    icon: 'i-carbon-location-filled',
    title: 'Address',
    additionalInfo: '1642 Washington Ave, Jackson, MS',
  },
]
</script>

<template>
  <div class="contact-links">
    <AtomContactIconLink
      v-for="iconLink in contactIconLinks"
      :key="iconLink.title"
      :title="iconLink.title"
      :additional-info="iconLink.additionalInfo"
    >
      <template #icon>
        <span class="text-xl text-black" :class="[iconLink.icon]"></span>
      </template>
    </AtomContactIconLink>
  </div>
</template>

<style lang="scss" scoped>
.contact-links {
  @apply flex flex-col gap-y-6;
  @apply sm:(w-4/5 px-6);
  @apply md:(flex-row w-full gap-x-6);
  @apply lg:(flex-row w-full gap-x-12);
}
</style>
