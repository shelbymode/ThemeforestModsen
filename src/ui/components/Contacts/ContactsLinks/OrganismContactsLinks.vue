<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const contactIconLinks = [
  {
    icon: 'i-carbon-email',
    title: computed(() => t(`common.email`)),
    additionalInfo: 'ensome@info.co.us',
  },
  {
    icon: 'i-carbon-phone-filled',
    title: computed(() => t(`common.phoneNumber`)),
    additionalInfo: '+1 601-201-5580',
  },
  {
    icon: 'i-carbon-location-filled',
    title: computed(() => t(`common.address`)),
    additionalInfo: '1642 Washington Ave, Jackson, MS',
  },
]
</script>

<template>
  <div class="contact-links">
    <AtomContactsLinkIcon
      v-for="iconLink in contactIconLinks"
      :key="iconLink.title.value"
      :title="iconLink.title.value"
      :additional-info="iconLink.additionalInfo"
    >
      <template #icon>
        <span class="text-xl text-black" :class="[iconLink.icon]"></span>
      </template>
    </AtomContactsLinkIcon>
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
