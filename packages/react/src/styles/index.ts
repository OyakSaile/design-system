import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@oyaksaile/tokens'

export const { styled, css, globalCss, keyframes, getCssText, theme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      width: 'space',
      height: 'space',
    },
    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
    },
  })
