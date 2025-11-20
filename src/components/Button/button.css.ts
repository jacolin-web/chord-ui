import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/tokens.css';

export const button = recipe({
  base: {
    padding: tokens.spacing.sm,
    borderRadius: tokens.radii.md,
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
        backgroundColor: tokens.foreground.primary,
        borderColor: tokens.foreground.primary,
        color: tokens.colors.primary,
      },
      secondary: { 
        backgroundColor: tokens.foreground.secondary, 
        borderColor: tokens.foreground.secondary,
        color: tokens.colors.secondary,
      },
    },
  },
});