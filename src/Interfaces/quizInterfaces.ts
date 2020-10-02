export interface Color {
    primary: string;
    secondary: string;
}

export interface Quiz {
    id?: number
    name: string
    author: string
    isDone?: boolean
    iconName?: any
    score: string
    color: Color
}
