<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { IInputClasses } from './AtomInput.vue'

const props = withDefaults(
  defineProps<{
    id: string
    modelValue: string
    placeholder?: string
    label?: string
    type?: 'text' | 'password'
    statusValidation?: 'inactive' | 'initial-error' | 'dirty-error' | 'correct'
    commonClasses?: string
    inactiveClasses?: string
    errorClasses?: string
    successClasses?: string
    errorLabelClasses?: string
    class?: never
    skipInitValue?: boolean
  }>(),
  {
    skipInitValue: true,
    statusValidation: 'inactive',
    type: 'text',
    commonClasses: '',
    inactiveClasses: '',
    errorClasses: '',
    successClasses: '',
    errorLabelClasses: '',
  }
)
const customClasses: IInputClasses = {
  commonClasses: `${props.commonClasses} border-b-2 bg-transparent rounded-none outline-none`,
  inactiveClasses: `${props.inactiveClasses} border-black`,
  errorClasses: `${props.errorClasses} border-cRed`,
  successClasses: `${props.successClasses} border-emerald`,
}
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const proxyModelValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <AtomInput
    :id="props.id"
    v-model="proxyModelValue"
    :label="props.label"
    :placeholder="props.placeholder"
    :status-validation="props.statusValidation"
    v-bind="customClasses"
    :type="props.type"
  />
</template>

<style lang="scss" scoped></style>
