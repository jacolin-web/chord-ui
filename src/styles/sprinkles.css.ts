<<<<<<< HEAD
=======
// sprinkles.css.ts
>>>>>>> b5d7246 (Initial commit)
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: 4,
  medium: 8,
  large: 16,
};

const colors = {
  blue: '#0070f3',
  gray: '#666',
};

const properties = defineProperties({
  properties: {
    padding: space,
    gap: space,  
    color: colors,
    display: ['flex', 'block', 'inline-flex'],
  },
});

export const sprinkles = createSprinkles(properties);