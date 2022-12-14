<script setup lang="ts">
export interface IInputClasses {
  inactiveClasses?: string
  commonClasses?: string
  errorClasses?: string
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
  inactiveClasses: '',
  commonClasses: '',
  errorClasses: '',
  errorLabelClasses: '',
  successClasses: '',
})

const configClasses: Required<IInputClasses> = {
  commonClasses:
    'px-6 py-4 w-85 font-bold placeholder:(text-black font-bold) hover:scale-95 transition-300 rounded-lg focus:(outline-black-900 outline-1) outline-0',
  inactiveClasses: 'bg-tertiary',
  errorClasses: 'bg-[#F6E2E2] text-cRed',
  successClasses: 'bg-emerald-100 text-emerald-900',
  errorLabelClasses: 'text-cRed',
}

;(Object.keys(configClasses) as (keyof IInputClasses)[]).forEach((classesCategory) => {
  props[classesCategory] !== '' ? (configClasses[classesCategory] = props[classesCategory]) : null
})

const waitCondition = props.skipInitValue === true ? ['inactive', 'initial-error'] : ['inactive']
const [isFocus, toggleFocus] = useToggle(false)
</script>

<template>
  <div class="input-wrapper">
    <label
      v-if="props.label"
      class="label"
      :class="{ [props.errorLabelClasses]: props.statusValidation === 'dirty-error' }"
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
        [configClasses.inactiveClasses]: waitCondition.includes(props.statusValidation),
        [configClasses.errorClasses]: props.statusValidation === 'dirty-error',
        [configClasses.successClasses]: props.statusValidation === 'correct',
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
.label {
  @apply font-semibold text-cGrey text-sm;
}
</style>
