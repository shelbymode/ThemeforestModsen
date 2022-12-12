<script setup lang="ts">
interface ITabs {
  tabList: {
    id: string
    value: string
    active?: boolean
  }[]
  modelValue: string
  name: string
}
const props = defineProps<ITabs>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const mulitiTab = ref(props.tabList.find((tab) => tab.active)?.value)
</script>

<template>
  <div class="tabs-rounded">
    <div v-for="tab in tabList" :key="tab.id" class="tabs-rounded__wrapper">
      <input
        :id="tab.id"
        class="tabs-rounded__input"
        type="radio"
        :checked="tab.active"
        :name="props.name"
        :value="tab.value"
        @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
      />
      <label class="tabs-rounded__label" :for="tab.id">{{ tab.value }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs-rounded {
  @apply flex items-center gap-x-5;

  // .tabs-rounded__wrapper

  &__wrapper {
    @apply flex items-center;
  }

  // .tabs-rounded__input

  &__input {
    @apply appearance-none w-0 h-0;
  }

  // .tabs-rounded__label

  &__label {
    @apply px-10 py-6 font-medium text-black bg-tertiary border-primary border-2 rounded-3xl text-base duration-500 opacity-50 scale-90;
    @apply hover:(cursor-pointer);
  }
}

.tabs-rounded__input:checked + .tabs-rounded__label {
  @apply text-white bg-primary opacity-100 scale-100;
}
</style>
