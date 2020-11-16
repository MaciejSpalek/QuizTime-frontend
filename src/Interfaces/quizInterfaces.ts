export interface IFormColor {
    primary: string;
    secondary: string;
}

export interface IQuizTemplate {
    id?: number
    name: string
    author: string
    isDone?: boolean
    iconName?: any
    score: string
    color: IFormColor
}

export interface IFormAnswer {
    option: string;
    content: string | number;
    isCorrect: boolean;
}

export interface IFormQuestions {
    question: string;
    answers: IFormAnswer[]
}