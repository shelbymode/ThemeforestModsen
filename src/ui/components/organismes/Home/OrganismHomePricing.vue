<script setup lang="ts">
type TTariff = {
  name: string
  value: string
  price: string
  isActive: boolean
}
interface IPriceCardOptions {
  tariffs: TTariff[]
  checks: string[]
  title: string
  isSelected?: boolean
}

const freeTrialCard: IPriceCardOptions = {
  checks: ['For small teams - 5 users', 'Community support'],
  title: 'Free trial',
  tariffs: [
    {
      name: 'Mo',
      value: 'month',
      price: '$00',
      isActive: true,
    },
    {
      name: 'Yr',
      value: 'year',
      price: '$00',
      isActive: false,
    },
  ],
}

const liteCard: IPriceCardOptions = {
  checks: ['For small teams - 5 users', 'Community support', 'Individual data - 60GB'],
  title: 'Lite',
  tariffs: [
    {
      name: 'Mo',
      value: 'month',
      price: '$5',
      isActive: true,
    },
    {
      name: 'Yr',
      value: 'year',
      price: '$60',
      isActive: false,
    },
  ],
}

const basicCard: IPriceCardOptions = {
  checks: ['For small teams - 5 users', 'Community support', 'Individual data - 120GB', 'Advanced permissions'],
  title: 'Basic',
  tariffs: [
    {
      name: 'Mo',
      value: 'month',
      price: '$10',
      isActive: false,
    },
    {
      name: 'Yr',
      value: 'year',
      price: '$120',
      isActive: true,
    },
  ],
}

const enterpriseCard: IPriceCardOptions = {
  checks: [
    'For small teams - 5 users',
    'Community support',
    'Unlimited Individual data',
    'Advanced permissions',
    'Data history',
    'Audit log',
    'All functions included',
  ],
  title: 'For enterprises',
  tariffs: [
    {
      name: 'Mo',
      value: 'month',
      price: 'Custom',
      isActive: true,
    },
    {
      name: 'Yr',
      value: 'year',
      price: 'Custom',
      isActive: false,
    },
  ],
}

const priceCards: IPriceCardOptions[] = reactive([freeTrialCard, liteCard, basicCard, enterpriseCard])

let previousIdx = 0
priceCards[previousIdx].isSelected = true

const selectCurrentCard = (idx: number) => {
  priceCards[previousIdx].isSelected = false
  priceCards[idx].isSelected = true
  previousIdx = idx
}
</script>

<template>
  <section class="price">
    <AtomMiddleTitle class="price__title">Our pricing</AtomMiddleTitle>
    <div class="price-container">
      <MoleculePriceCard
        v-for="(priceCard, idx) in priceCards"
        :key="priceCard.title"
        :options="priceCard"
        :idx="idx"
        class="price__card"
        @update:select-card="selectCurrentCard"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.price {
  @apply flex flex-col items-start gap-y-12 max-w-[57.8125%] w-full mb-30;

  // .price__title

  &__title {
  }

  // .price__card

  &__card {
  }
}
.price-container {
  @apply flex justify-between w-full;
}
</style>
