export type MatchParameters = { username: string };

export interface Answer {
  option: string,
  content: string | number
}

export interface IFormikValues {
  title: string;
  question: string;
  radioValue: string;
  answers: Answer[];
}

export interface IErrors {
  title: string;
  question: string;
  answers: Answer[];
}

export const answers: Answer[] = [
  {
    option: "A",
    content: ""
  },
  {
    option: "B",
    content: ""
  },
  {
    option: "C",
    content: ""
  },
  {
    option: "D",
    content: ""
  }
]