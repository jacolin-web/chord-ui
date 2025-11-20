<<<<<<< HEAD
=======
// Button.tsx
>>>>>>> b5d7246 (Initial commit)
import { button } from './button.css';
import { sprinkles } from '../../styles/sprinkles.css';

interface ButtonProps {
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ size, variant, children }: ButtonProps) => {
  return (
    <button className={button({ size, variant })}>
      {children}
    </button>
  );
};

export default Button