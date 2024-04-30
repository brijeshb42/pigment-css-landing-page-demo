import { createStitches } from '@stitches/react';
import { config, darkThemeConfig } from './stitches-default-config';

export const { css, theme, getCssText, globalCss, keyframes, styled, createTheme } = createStitches(config);

export const darkTheme = createTheme('dark-theme', darkThemeConfig);
