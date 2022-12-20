export const useHamburger = (minWidth = '768px') => {
  const [isHamburger, toggleClose] = useToggle(true)
  const isMdScreen = useMediaQuery(`(min-width: ${minWidth})`)

  const closeButtonClass = computed(() => {
    if (!isMdScreen.value)
      return isHamburger.value === true ? 'header__close-btn--revealed' : 'header__close-btn--closed'
  })

  const headerLinksClass = computed(() => {
    if (!isMdScreen.value) return isHamburger.value === true ? 'header__links--revealed' : 'header__links--closed'
  })

  const isHeaderLinksOpened = computed(() => !isHamburger.value || isMdScreen.value)

  return { closeButtonClass, headerLinksClass, isHeaderLinksOpened, toggleClose }
}
