<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { u } from '~/shared/utils/u'

export interface IInputClasses {
  inactiveClasses?: string
  activeClasses?: string
  activeLabelClasses?: string
  commonClasses?: string
  errorClasses?: string
  commonLabelClasses?: string
  errorLabelClasses?: string
  successClasses?: string
}
export interface IInputOptions {
  id: string
  modelValue: string
  statusValidation: 'inactive' | 'initial-error' | 'dirty-error' | 'correct'
  placeholder?: string
  label?: string
  type?: 'text' | 'password'
  skipInitValue?: boolean
}
interface IInputProps extends IInputClasses, IInputOptions {}

const props = defineProps<IInputProps>()

/**
 * If we pass down some categoryClass != '' -> it overrides default category class in AtomInput
 */
const customClasses: IInputClasses = {
  commonClasses: `${u(
    props.commonClasses
  )} pb-2 pl-3 border-b-2 font-semibold bg-transparent placeholder:(font-normal) rounded-none outline-none`,
  activeClasses: `${u(props.activeClasses)} border-b-2 border-primary`,
  activeLabelClasses: `${u(props.activeLabelClasses)}`,
  inactiveClasses: `${u(props.inactiveClasses)} border-b-black/50`,
  errorClasses: `${u(props.errorClasses)} border-cRed text-cRed`,
  commonLabelClasses: `${u(props.commonLabelClasses)}`,
  errorLabelClasses: `${u(props.errorLabelClasses)}`,
  successClasses: `${u(props.successClasses)} border-emerald text-emerald-800`,
}
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()


const proxyModelValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <AtomInput v-bind="{ ...props, ...customClasses }" v-model="proxyModelValue" />
</template>

<style lang="scss" scoped></style>
