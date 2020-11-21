export interface IFormColor {
    primary: string;
    secondary: string;
}

export interface IQuizTemplate {
    _id?: string;
    title: string;
    author: string;
    iconName: string;
    colors: IFormColor;
    amountOfQuestions?: number;
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