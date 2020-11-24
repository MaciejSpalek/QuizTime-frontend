export interface IQuizTemplate {
  _id?: string;
  title: string;
  author: string;
  iconName: string;
  colors: IFormColor;
  amountOfQuestions?: number;
  questions?: IFormQuestion[];
}



export interface IFormColor {
  primary: string;
  secondary: string;
}

export interface IFormQuestion {
  id: number;
  content: string;
  answers: IFormAnswer[];
}

export interface IFormAnswer {
  option: string;
  content: string | number;
  isCorrect: boolean;
}
