import React, { useEffect } from 'react'
import PageTemplate from '../templates/PageTemplate/PageTemplate'
import SearchPanel from '../Components/molecules/SearchPanel/index'
import QuizesList from '../Components/molecules/QuizesList'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Quiz } from '../Interfaces/quizInterfaces'

const HomePage = () => {
  const allQuizes = useSelector<RootState, Quiz[]>(state => state.quizes.allQuizes) // no typed
  return (
    <PageTemplate>
      <SearchPanel />
      <QuizesList quizes={allQuizes}/>
    </PageTemplate>  
  )
}  

export default HomePage

