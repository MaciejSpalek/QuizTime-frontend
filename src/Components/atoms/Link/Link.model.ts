export interface ILink {
  to: string;
  isNavLink?: boolean;
  text?: string;
  children?: React.ReactNode;
  onClick?: ()=> void;
};

