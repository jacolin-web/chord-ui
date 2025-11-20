import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/tokens.css';

export const button = recipe({
  base: {
    padding: tokens.spacing.sm,
    borderRadius: tokens.radii.md,
    fontFamily: tokens.font.family.mono,
    fontWeight: tokens.font.weight.bold
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
        backgroundColor: tokens.background.primary,
        borderColor: tokens.background.primary,
        color: tokens.colors.primary,
      },
      secondary: { 
        backgroundColor: tokens.background.secondary, 
        borderColor: tokens.background.secondary,
        color: tokens.colors.secondary,
      },
    },
  },
});