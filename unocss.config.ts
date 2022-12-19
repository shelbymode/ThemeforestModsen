import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

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
        sans: ['Manrope:100,200,300,400,500,600,700,800,900', 'Open Sans:100,200,300,400,500,600,700,800,900'],
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    breakpoints: {
      xsm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1536px',
    },
    colors: {
      primary: 'rgb(var(--primary))',
      secondary: 'rgb(var(--secondary))',
      helperBlueOne: 'rgb(var(--helper-blue-one))',
      helperBlueTwo: 'rgb(var(--helper-blue-two))',
      helperBlueThree: 'rgb(var(--helper-blue-three))',
      cWhite: 'rgb(var(--c-white))',
      cBlack: 'rgb(var(--c-black))',
      cGrey: 'rgb(var(--c-grey))',
      cBackground: 'rgb(var(--c-background))',
      tertiary: 'rgb(var(--tertiary))',
      cRed: 'rgb(var(--c-red))',
    },
  },
})
