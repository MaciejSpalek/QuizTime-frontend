import React from 'react'
import PageTemplate from '../../templates/PageTemplate/PageTemplate'
import SearchPanel from '../../Components/molecules/SearchPanel/index'
import QuizesList from '../../Components/molecules/QuizesList'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Quiz } from '../../Interfaces/quizInterfaces'

const HomePage = () => {
  // const allQuizes = useSelector<RootState, Quiz[]>(state => state.quizes.allQuizes)
  const tempQuizes = [
    { id: 1, name: "Example 1", author: "Maciora", isDone: true, score: "5/12", color: {primary:"#00D952", secondary:"#00a03d"}, iconName: 'male'},
    { id: 2, name: "Example 2", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#80D4CD', secondary: '#2982A2'}, iconName: 'gamepad'},
    { id: 3, name: "Example 3", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#99B3E1', secondary: '#4F62A3'}, iconName: 'film'},
    { id: 4, name: "Example 4", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#A0ADBD', secondary: '#372E46'}, iconName: 'flask'},  
    { id: 5, name: "Example 5", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#ACA398', secondary: '#443C51'}, iconName: 'paw'},
    { id: 6, name: "Example 6", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#ECCE8D', secondary: '#2C1931'}, iconName: 'landmark'},
    { id: 7, name: "Example 7", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#F7BC14', secondary: '#201F26'}, iconName: 'music'}
  ];
  
  return (
    <PageTemplate>
      <SearchPanel />
      <QuizesList quizes={tempQuizes}/>
    </PageTemplate>  
  )
}  

export default HomePage

