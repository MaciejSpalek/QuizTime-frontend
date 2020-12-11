import { RouteComponentProps } from "react-router-dom";

type Match = {
    id: string;
    username: string;
};

export interface IValues {
    answers: string[];
}

export type TQuizPage = RouteComponentProps<Match>
