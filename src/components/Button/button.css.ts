import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/tokens.css';

export const button = recipe({
  base: {
    padding: tokens.spacing.sm,
    borderRadius: tokens.radii.md,
    fontFamily: tokens.font.family.mono,
    fontWeight: tokens.font.weight.bold,
    borderWidth: 1,
    borderStyle: 'solid', 
  },
  variants: {
    size: {
      small: { 
        fontSize: tokens.size.sm,
      },
      large: { 
        fontSize: tokens.size.md,
      }
    },
    variant: {
      primary: { 
        backgroundColor: tokens.colors.background.primary,
        color: tokens.colors.primary,
        borderColor: tokens.colors.secondary,
      },
      secondary: { 
        backgroundColor: tokens.colors.background.base, 
        color: tokens.colors.secondary,
        borderColor: tokens.colors.accent,
      },
    },
  },
});