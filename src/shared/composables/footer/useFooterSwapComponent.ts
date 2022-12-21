export const useFoooterSwapComponent = (minWidth = '1024px') => {
  const isLgScreen = useMediaQuery(`(min-width: ${minWidth})`)

  const containerLinkComponent = computed(() => (isLgScreen.value === true ? 'MoleculeFooterWrapper' : 'AtomDropdown'))
  return containerLinkComponent
}
