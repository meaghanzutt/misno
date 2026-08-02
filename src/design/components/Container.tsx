import type { ElementType, HTMLAttributes, ReactNode } from 'react';

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  size?: 'reading' | 'content' | 'wide';
};

const widths = {
  reading: 'max-w-3xl',
  content: 'max-w-5xl',
  wide: 'max-w-7xl',
};

export function Container({ as: Component = 'div', size = 'wide', className = '', children, ...props }: ContainerProps) {
  return (
    <Component className={`mx-auto w-full px-5 sm:px-8 lg:px-10 ${widths[size]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
