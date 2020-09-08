import React, { useEffect } from 'react'
import PageTemplate from '../templates/PageTemplate'
import SearchPanel from '../Components/organisms/SearchPanel/index'
import QuizesList from '../Components/molecules/QuizesList'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

type Quiz = {
  id: number;
  name: string;
  author: string;
  isDone: boolean;
  image: any;
  score: string;
}

type Quizes = {
  quizes: Quiz[]
}

const Home = () => {
  const allQuizes = useSelector<RootState, any>(state => state.quizes.allQuizes) // no typed

  return (
    <PageTemplate>
      <SearchPanel />
      <QuizesList quizes={allQuizes}/>
    </PageTemplate>  
  )
}  

export default Home

