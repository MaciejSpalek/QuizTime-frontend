import React from 'react'
import HomeTemplate from '../templates/HomeTemplate'
import QuizesWrapper from '../Components/organisms/QuizesWrapper/index'
import SearchPanel from '../Components/organisms/SearchPanel/index'

const Home = () => {
  return (
    <HomeTemplate>
      <SearchPanel />
      <QuizesWrapper />
    </HomeTemplate>  
  )
}  

export default Home;

