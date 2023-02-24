import React from 'react';

// лучше явно прописывать, так как есть разницы между 17 и 18 v React
// добавили все возможные Атрибуты у Кнопки
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  //   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    {...props}
    className={`py-2 text-ellipsis px-4 border rounded-md bg-blue-400 text-white ${
      className || ''
    }`}
  >
    {children}
  </button>
);
