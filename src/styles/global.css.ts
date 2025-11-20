import { globalStyle } from '@vanilla-extract/css';
import { tokens } from './tokens.css';

globalStyle('body', {
  fontFamily: tokens.font.family.body,
  fontSize: tokens.fontSize.base,
  color: tokens.colors.white,
  fontWeight: tokens.font.weight.normal,
  background: tokens.colors.base
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: tokens.font.family.heading,
  fontWeight: tokens.font.weight.bold,
});