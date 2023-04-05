import * as React from 'react';

interface SelectMenuProps {
  defaultMessage?: string;
  isLink?: boolean;
  children: React.ReactNode;
  className?: string;
}

declare const SelectMenu: React.FC<SelectMenuProps>;

export default SelectMenu;
