import { getTranslateX } from './getTranslateX'

export const translateXElement = (el: HTMLElement, shiftX: number) => {
  el.style.transform = `translateX(${getTranslateX(el) - shiftX}px)`
}
