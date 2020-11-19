export interface IFormColor {
    primary: string;
    secondary: string;
}

export interface IQuizTemplate {
    id?: number;
    name: string;
    author: string;
    iconName: string;
    score: string;
    color: IFormColor;
};

export interface IFormAnswer {
    option: string;
    content: string | number;
    isCorrect: boolean;
};

export interface IFormQuestion {
    content: string;
    answers: IFormAnswer[];
};