import { createStitches } from '@stitches/core';
import { config, darkThemeConfig } from './stitches-default-config';

export const { css, theme, getCssText, globalCss, keyframes, createTheme } = createStitches(config);

export const darkTheme = createTheme('dark-theme', darkThemeConfig);
