type LinkType = "NavLink" | "Link";

export interface ILink {
  to: string;
  type: LinkType;
  text?: string;
  children?: React.ReactNode;
  onClick?: ()=> void;
};

