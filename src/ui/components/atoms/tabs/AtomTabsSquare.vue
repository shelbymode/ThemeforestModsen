<script setup lang="ts">
interface ITabs {
  tabList: {
    id: string
    value: string
    active?: boolean
  }[]
  modelValue?: string
  name: string
}
const props = defineProps<ITabs>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="tabs-square">
    <div v-for="tab in tabList" :key="tab.id" class="flex items-center">
      <input
        :id="tab.id"
        type="radio"
        :checked="tab.active"
        :name="props.name"
        :value="tab.value"
        @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
      />
      <label :for="tab.id">{{ tab.value }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs-square {
  @apply flex items-center gap-x-1;

  input[type='radio'] {
    @apply appearance-none w-0 h-0;
  }

  label {
    @apply px-4 py-2 font-bold text-white bg-primary border-white border-2 rounded text-sm duration-500 opacity-50 scale-90;
    @apply hover:(cursor-pointer);
  }

  input:checked + label {
    @apply text-primary bg-white border-primary opacity-100 scale-100;
  }
}
</style>
