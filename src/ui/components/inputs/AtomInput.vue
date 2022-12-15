<script setup lang="ts">
export interface IInputClasses {
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
  label?: string
  type?: 'text' | 'password'
  skipInitValue?: boolean
}

const props = withDefaults(defineProps<IInputProps>(), {
  placeholder: 'Placeholder',
  skipInitValue: true,
  type: 'text',
  statusValidation: 'inactive',
  activeClasses: '',
  inactiveClasses: '',
  commonClasses: '',
  errorClasses: '',
  errorLabelClasses: '',
  commonLabelClasses: '',
  successClasses: '',
})

const configClasses: Required<IInputClasses> = {
  commonClasses:
    'px-6 py-4 w-85 font-bold placeholder:(text-black) hover:scale-95 transition-300 rounded-lg focus:(outline-black-900 outline-1) outline-0',
  activeClasses: 'text-blue border-b-2 border-blue-500',
  inactiveClasses: 'bg-tertiary',
  errorClasses: 'bg-[#F6E2E2] text-cRed',
  successClasses: 'bg-emerald-100 text-emerald-900',
  commonLabelClasses: 'font-semibold text-black text-sm',
  errorLabelClasses: 'font-semibold text-cRed text-sm',
}

;(Object.keys(configClasses) as (keyof IInputClasses)[]).forEach((classesCategory) => {
  props[classesCategory] !== '' ? (configClasses[classesCategory] = props[classesCategory]) : null
})

const waitCondition = props.skipInitValue === true ? ['inactive', 'initial-error'] : ['inactive']
const [isFocus, toggleFocus] = useToggle(false)
const isEmpty = computed(() => props.modelValue === '')

const isErrorSignal = computed(
  () =>
    (props.statusValidation === 'dirty-error' && isEmpty.value && !isFocus.value) ||
    (props.statusValidation === 'dirty-error' && !isEmpty.value)
)

const isInactiveSignal = computed(() => waitCondition.includes(props.statusValidation))

setInterval(() => {
  console.log(configClasses.errorLabelClasses, isErrorSignal.value)
}, 5000)
</script>

<template>
  <div class="input-wrapper">
    <label
      v-if="props.label"
      :class="{ [configClasses.commonLabelClasses]: !isErrorSignal, [configClasses.errorLabelClasses]: isErrorSignal }"
      :for="id"
      >{{ props.label }}</label
    >
    <input
      :id="id"
      :name="id"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :class="{
        [configClasses.commonClasses]: true,
        [configClasses.inactiveClasses]: isInactiveSignal,
        [configClasses.errorClasses]: isErrorSignal,
        [configClasses.successClasses]: props.statusValidation === 'correct',
        [configClasses.activeClasses]: isFocus && isEmpty,
      }"
      @focus="toggleFocus()"
      @blur="toggleFocus()"
      @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  @apply flex flex-col items-left gap-y-2;
}
</style>
