import { RouteComponentProps } from "react-router-dom";

export type Match = {
  category: string;
};

export type TCategoryPage = RouteComponentProps<Match>;
