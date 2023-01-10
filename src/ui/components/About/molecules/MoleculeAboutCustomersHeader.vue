<script setup lang="ts"></script>

<template>
  <header class="customers__header">
    <AtomMiddleTitle class="customers__title">
      {{ $t(`about.ourCustomersSay`) }}
    </AtomMiddleTitle>
    <div class="customers__arrows">
      <AtomButton class="customers__arrow" aria-label="Left navigation">
        <span class="customers__arrow-left i-ic-outline-arrow-right-alt" />
      </AtomButton>

      <AtomButton class="customers__arrow" aria-label="Right navigation">
        <span class="customers__right i-ic-outline-arrow-right-alt" />
      </AtomButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.customers {
  // .customers__header

  &__header {
    @apply flex items-center justify-between;
  }

  // .customers__title

  &__title {
  }

  // .customers__arrows

  &__arrows {
    @apply flex items-center gap-x-6;
  }

  // .customers__arrow

  &__arrow {
    @apply text-black text-4xl bg-cBackground rounded-3xl;
  }

  &__arrow-left {
    @apply rotate-z-180;
  }

  &__arrow-right {
  }
}
</style>
