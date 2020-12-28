import React, { RefObject } from "react";
import QuizItem from "Components/molecules/SearchPanel/QuizItem";
import UserItem from "Components/molecules/SearchPanel/UserItem";
import { IQuizTemplate } from "Interfaces/quizInterfaces";
import { IUsers } from "Components/molecules/SearchPanel/SearchPanel.model";

export const getQuizzes = (quizzes: IQuizTemplate[]) => {
    return quizzes.map(({ _id, iconName, title, author, colors }) => (
        <QuizItem
            id={`${_id}`}
            icon={iconName}
            text={title}
            author={author}
            colors={colors}
        />
    ));
};

export const getUsers = (users: IUsers[]) => {
    return users.map(user => (
        <UserItem name={user.name} />
    ));
};


export const getElementWidth = (ref: RefObject<HTMLElement>) => {
    if(null !== ref.current) {
        return ref.current.clientWidth;
    }
};
