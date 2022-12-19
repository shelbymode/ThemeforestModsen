<script setup lang="ts">
import { useVModel } from '@vueuse/core'

interface IInputClasses {
  inactiveClasses?: string
  activeClasses?: string
  commonClasses?: string
  errorClasses?: string
  commonLabelClasses?: string
  errorLabelClasses?: string
  successClasses?: string
}

interface IInputProps extends IInputClasses {
  id: string
  modelValue: string
  statusValidation: 'inactive' | 'initial-error' | 'dirty-error' | 'correct'
  placeholder?: string
  label?: string | undefined
  type?: 'text' | 'password'
  skipInitValue?: boolean
}

const props = withDefaults(defineProps<IInputProps>(), {
  placeholder: 'Placeholder',
  skipInitValue: true,
  type: 'text',
  statusValidation: 'inactive',
  label: undefined,
})

const $r = (str: string | undefined) => (typeof str === 'undefined' ? '' : str)

const customClasses: IInputClasses = {
  commonClasses: `${$r(
    props.commonClasses
  )} pb-2 pl-1 border-b-2 font-bold bg-transparent placeholder:(font-normal) rounded-none outline-none`,
  inactiveClasses: `${$r(props.inactiveClasses)} border-black`,
  activeClasses: `${$r(props.activeClasses)}`,
  errorClasses: `${$r(props.errorClasses)} border-cRed`,
  successClasses: `${$r(props.successClasses)} border-emerald`,
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
