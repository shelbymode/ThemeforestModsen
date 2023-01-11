<script setup lang="ts"></script>

<template>
  <div class="payment__product-badge">
    <HomePaymentAtomTitle>
      <slot name="title"></slot>
    </HomePaymentAtomTitle>

    <HomePaymentAtomName>
      <slot name="name"></slot>
    </HomePaymentAtomName>
  </div>
</template>

<style lang="scss" scoped>
.payment__product-badge {
  @apply bg-[#0e243a] flex items-center justify-between px-6 py-3 flex-wrapsm:py-4 md:py-5 w-full;
}
</style>
