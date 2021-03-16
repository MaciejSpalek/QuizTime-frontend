export interface IQuizTemplate {
  _id?: string;
  title: string;
  author: string;
  iconName: string;
  colors: IFormColor;
  counter?: number;
  amountOfQuestions?: number;
  questions?: IQuestion[];
  category: string;
};

export interface IFormColor {
  primary: string;
  secondary: string;
};

export interface IFormQuestion {
  id: number;
  content: string;
  answers: IFormAnswer[];
};

export interface IQuestion {
  _id?: string;
  content: string;
  answers: IFormAnswer[];
};

export interface IFormAnswer {
  option: string;
  content: string | number;
  isCorrect: boolean;
};
