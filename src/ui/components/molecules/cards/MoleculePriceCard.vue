<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isSelected?: boolean
  }>(),
  {
    isSelected: false,
  }
)

const checkValues = ['For small teams - 5 users', 'Community support', 'Individual data - 20GB']
</script>

<template>
  <div class="card-price shadow-card-3" :class="{ 'card-price--selected': props.isSelected }">
    <h3 class="card-price__title" :class="{ 'card-price__title--selected': props.isSelected }">Free trial</h3>

    <div class="card-price__price-wrapper">
      <span class="card-price__price" :class="{ 'card-price__price--selected': props.isSelected }">$00</span>

      <AtomTabsSquare
        name="food"
        :tab-list="[
          { id: 'mo', value: 'Mo', active: true },
          { id: 'yr', value: 'Yr' },
        ]"
      ></AtomTabsSquare>
    </div>

    <AtomButton class="card-price__button" :class="{ 'card-price__button--selected': props.isSelected }">
      Get started
    </AtomButton>

    <div class="card-price__checks-wrapper" :class="{ 'card-price__checks-wrapper--selected': props.isSelected }">
      <div v-for="(checkValue, idx) in checkValues" :key="idx" class="card-price__checks">
        <span class="card-price__check" :class="{ 'card-price__check--selected': props.isSelected }" />
        <p>{{ checkValue }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-price {
  @apply max-w-88 flex flex-col items-start p-9 gap-y-9 duration-600;
  &--selected {
    @apply bg-primary;
  }
}
.card-price__title {
  @apply text-xl font-bold text-black text-left;
  &--selected {
    @apply text-white;
  }
}
.card-price__price-wrapper {
  @apply w-full flex justify-between items-center;
}

.card-price__price {
  @apply text-4xl font-extrabold text-black text-left;
  &--selected {
    @apply text-white;
  }
}

.card-price__button {
  @apply justify-center w-full font-bold text-white bg-primary;
  &--selected {
    @apply text-primary bg-white;
  }
}

.card-price__checks-wrapper {
  @apply flex flex-col items-start;
  &--selected {
    @apply text-white;
  }
}

.card-price__checks {
  @apply flex items-center justify-start gap-x-3;
}
.card-price__check {
  @apply i-fluent-checkmark-24-filled text-primary text-3xl;
  &--selected {
    @apply text-white;
  }
}
</style>
