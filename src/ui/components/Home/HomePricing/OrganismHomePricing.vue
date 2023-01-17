<script setup lang="ts">
// TODO: refactor reactivity (optimize)
import { MaybeRef } from '@vueuse/core'
import { Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorePaymentPriceCards } from '~/application/store/useHomePaymentStore'

const { t } = useI18n()
type TTariff = {
  name: Ref<string>
  value: string
  price: MaybeRef<string>
  isActive: boolean
}
interface IPriceCardOption {
  tariffs: TTariff[]
  checks: Ref<string>[]
  title: Ref<string>
  isSelected?: boolean
}

const smallTeams = computed(() => t('common.price.smallTeams', { amount: 5 }))
const communitySupport = computed(() => t('common.price.communitySupport'))
const individualData60GB = computed(() =>
  t('common.price.individualData', {
    size: 60,
    dimension: 'GB',
  })
)
const individualData120GB = computed(() =>
  toCapitalize(
    t('common.price.individualData', {
      size: 120,
      dimension: 'GB',
    })
  )
)
const unlimitedIndividualData = computed(() => t('common.price.unlimitedIndividualData'))
const advancedPermissions = computed(() => t('common.price.advancedPermissions'))
const dataHistory = computed(() => t('common.price.dataHistory'))
const auditLog = computed(() => t('common.price.auditLog'))
const allIncluded = computed(() => t('common.price.allIncluded'))
const customPrice = computed(() => t('common.price.customPrice'))

const freeTrialCard: IPriceCardOption = {
  checks: [smallTeams, communitySupport],
  title: computed(() => t(`common.price.freeTrial`)),
  tariffs: [
    {
      name: computed(() => t(`common.price.mo`)),
      value: 'month',
      price: '$00',
      isActive: true,
    },
    {
      name: computed(() => t(`common.price.yr`)),
      value: 'year',
      price: '$00',
      isActive: false,
    },
  ],
}

const liteCard: IPriceCardOption = {
  checks: [smallTeams, communitySupport, individualData60GB],
  title: computed(() => t(`common.price.lite`)),
  tariffs: [
    {
      name: computed(() => t(`common.price.mo`)),
      value: 'month',
      price: '$5',
      isActive: true,
    },
    {
      name: computed(() => t(`common.price.yr`)),
      value: 'year',
      price: '$60',
      isActive: false,
    },
  ],
}

const basicCard: IPriceCardOption = {
  checks: [smallTeams, communitySupport, individualData120GB, advancedPermissions],
  title: computed(() => t(`common.price.basic`)),
  tariffs: [
    {
      name: computed(() => t(`common.price.mo`)),
      value: 'month',
      price: '$10',
      isActive: false,
    },
    {
      name: computed(() => t(`common.price.yr`)),
      value: 'year',
      price: '$120',
      isActive: true,
    },
  ],
}

const enterpriseCard: IPriceCardOption = {
  checks: [
    smallTeams,
    communitySupport,
    unlimitedIndividualData,
    advancedPermissions,
    dataHistory,
    auditLog,
    allIncluded,
  ],
  title: computed(() => t(`common.price.forEnterprises`)),
  tariffs: [
    {
      name: computed(() => t(`common.price.mo`)),
      value: 'month',
      price: customPrice,
      isActive: true,
    },
    {
      name: computed(() => t(`common.price.yr`)),
      value: 'year',
      price: customPrice,
      isActive: false,
    },
  ],
}

const priceCards = reactive([freeTrialCard, liteCard, basicCard, enterpriseCard])

let previousIdx = 0
priceCards[previousIdx].isSelected = true

const selectCurrentCard = (idx: number, tariff: string) => {
  console.log(idx, tariff)

  if (previousIdx !== idx) {
    priceCards[previousIdx].isSelected = false
    priceCards[idx].isSelected = true
    previousIdx = idx
  }
  priceCards[idx].tariffs.find((t) => t.isActive === true)!.isActive = false
  priceCards[idx].tariffs.find((t) => t.value === tariff)!.isActive = true
}

const storePaymentPriceCards = useStorePaymentPriceCards()

// TODO: modal switcher
const isOpen = ref(false)
const openModal = () => (isOpen.value = true)
const closeModal = () => {
  isOpen.value = false
  storePaymentPriceCards.$reset()
}

watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      document.body.classList.add('scroll-hidden')
    } else if (!newValue) {
      document.body.classList.remove('scroll-hidden')
    }
  },
  {
    immediate: true,
  }
)

const paymentInfo = computed(() => {
  const selectedCard = priceCards.find((el) => el.isSelected === true)
  const tariff = selectedCard?.tariffs.find((tariff) => tariff.isActive === true)

  return {
    priceUSD: tariff?.price || '',
    duration: tariff?.value || '',
    name: selectedCard?.title || '',
  }
})
</script>

<template>
  <TemplatePageRestrictor class="price">
    <AtomMiddleTitle class="price__title">{{ $t('common.price.ourPricing') }}</AtomMiddleTitle>
    <div class="price__cards">
      <MoleculePriceCard
        v-for="(priceCard, idx) in priceCards"
        :key="priceCard.title"
        :options="priceCard"
        :idx="idx"
        class="price__card border"
        :activate-modal="openModal"
        @update:select-card="selectCurrentCard"
      />
    </div>
  </TemplatePageRestrictor>

  <HomePaymentOrganism
    :modal-controls="{
      isOpen,
      openModal,
      closeModal,
    }"
    :payment-info="paymentInfo"
  />
</template>

<style lang="scss" scoped>
.text {
  word-wrap: break-word;
}
.price {
  @apply flex flex-col items-start gap-y-12 px-6;

  // .price__title

  &__title {
    @apply w-full text-center;
  }

  // .price__card

  &__card {
  }

  // .price__cards {

  &__cards {
    @apply flex justify-between w-full overflow-scroll gap-x-8 pb-10;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
