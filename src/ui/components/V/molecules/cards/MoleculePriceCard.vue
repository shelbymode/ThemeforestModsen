<script setup lang="ts">
import { v4 } from 'uuid'
import { Ref } from 'vue'
type TTariff = {
  name: string
  value: string
  price: string
  isActive: boolean
}
interface IPriceCardOptions {
  tariffs: TTariff[]
  checks: Ref<string>[]
  title: string
  isSelected?: boolean
}

const props = defineProps<{
  idx: number
  options: IPriceCardOptions
  activateModal: () => void
}>()

const emit = defineEmits<{
  (e: 'update:select-card', value: number, newTariff: string): void
}>()
const tabListOptions = props.options.tariffs.map((el) => ({
  id: `${el.name}-${v4()}`,
  value: el.name,
  active: el.isActive,
}))

let currentTariff = ref(props.options.tariffs.find((el) => el.isActive === true) as TTariff)
const tabValue = ref(currentTariff.value?.name || 'Yr')

watch(
  tabValue,
  (newValue: string) => {
    currentTariff.value = props.options.tariffs.find((el) => el.name === newValue) as TTariff
  },
  {
    immediate: true,
  }
)

const selectCurrentCard = async (index: number) => {
  setTimeout(() => {
    emit('update:select-card', index, currentTariff.value.value)
  }, 0)
}
</script>

<template>
  <div
    class="card-price shadow-card-3"
    :class="{ 'card-price--selected': props.options.isSelected }"
    tabindex="0"
    @click="selectCurrentCard(props.idx)"
  >
    <h3 class="card-price__title" :class="{ 'card-price__title--selected': props.options.isSelected }">
      {{ props.options.title }}
    </h3>

    <div class="card-price__price-wrapper">
      <span class="card-price__price" :class="{ 'card-price__price--selected': props.options.isSelected }">{{
        currentTariff?.price
      }}</span>

      <AtomTabsSquare v-model="tabValue" :name="props.options.title" :tab-list="tabListOptions" />
    </div>

    <AtomButton
      class="card-price__button"
      :class="{ 'card-price__button--selected': props.options.isSelected }"
      @click="activateModal"
    >
      {{ $t(`common.price.choosePlan`) }}
    </AtomButton>

    <div
      class="card-price__checks-wrapper"
      :class="{ 'card-price__checks-wrapper--selected': props.options.isSelected }"
    >
      <div v-for="(check, index) in props.options.checks" :key="index" class="card-price__checks">
        <span class="card-price__check" :class="{ 'card-price__check--selected': props.options.isSelected }" />
        <p class="card-price__check-text" :class="{ 'card-price__check-text--selected': props.options.isSelected }">
          {{ check.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-price {
  @apply min-w-[255px] max-w-[255px] flex flex-col items-start p-5 gap-y-9 duration-600;
  @apply hover:(cursor-pointer);
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
  @apply text-2xl font-bold text-black text-left;
  letter-spacing: -0.05em;

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
  @apply i-fluent-checkmark-24-filled text-primary text-3xl min-h-[30px] min-w-[30px];
  &--selected {
    @apply text-white;
  }
}

.card-price__check-text {
  @apply text-black;
  &--selected {
    @apply text-white;
  }
}
</style>
