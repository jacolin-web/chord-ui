import { globalStyle } from '@vanilla-extract/css';
import { tokens } from './tokens.css';

globalStyle('body', {
  fontFamily: tokens.font.family.body,
  fontSize: tokens.fontSize.base,
  fontWeight: tokens.font.weight.normal,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: tokens.font.family.heading,
  fontWeight: tokens.font.weight.bold,
});