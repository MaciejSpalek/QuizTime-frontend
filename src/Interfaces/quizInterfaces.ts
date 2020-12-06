export interface IQuizTemplate {
  _id?: string;
  title: string;
  author: string;
  iconName: string;
  colors: IFormColor;
  amountOfQuestions?: number;
  questions?: IQuestion[];
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
