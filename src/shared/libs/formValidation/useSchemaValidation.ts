import useValidate from '@vuelidate/core'
import { ComputedRef } from 'vue'
import { useValidationHelpers } from './useValidationHelpers'

export type IForm = Record<string, string>
export type IRules = ComputedRef<Record<string, unknown>>

export const useSchemaValidation = (rules: IRules, form: IForm) => {
  const v$ = useValidate(rules, form)

  return { v$, ...useValidationHelpers(v$) }
}
