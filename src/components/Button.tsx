import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  [key: string]: any;
}

const Button = ({ children, onClick, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button 
      className={`btn btn-${variant}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
