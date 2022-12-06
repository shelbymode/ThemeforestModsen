import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// import './assets/styles/variables.scss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      customizations: {
        transform(svg) {
          return svg.replace(/#fff/, '#fff')
        },
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: ['Manrope:100,200,300,400,500,600,700', 'Open Sans:100,200,300,400,500,600,700'],
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: 'rgba(var(--primary))',
      secondary: 'rgba(var(--secondary))',
      helperBlueOne: 'rgba(var(--helper-blue-one))',
      helperBlueTwo: 'rgba(var(--helper-blue-two))',
      helperBlueThree: 'rgba(var(--helper-blue-three))',
      cBlack: 'rgba(var(--c-black))',
      cGrey: 'rgba(var(--c-grey))',
      cBackground: 'rgba(var(--c-background))',
      cRed: 'rgba(var(--c-red))',
    },
  },
})
