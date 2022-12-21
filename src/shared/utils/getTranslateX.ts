function getTranslateX(myElement: HTMLElement) {
  const style = window.getComputedStyle(myElement)
  const matrix = new WebKitCSSMatrix(style.transform)
  return matrix.m41
}

export { getTranslateX }
