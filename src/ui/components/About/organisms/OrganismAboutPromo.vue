<script setup lang="ts">

const route = useRoute()
</script>

<template>
  <TemplateNavLinksCenter :title="toCapitalize($t(`common.route.${(route.name as string).toLowerCase()}`))">
    <MoleculeNavLinks />
  </TemplateNavLinksCenter>

  <MoleculeAboutCards />
  <MoleculeAboutStats />
  <MoleculeAboutCustomers />
</template>

<style lang="scss" scoped></style>
