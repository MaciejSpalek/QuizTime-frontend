import React from 'react'
import HomeTemplate from '../templates/HomeTemplate'
import Header from '../Components/organisms/Header/index'
import QuizesWrapper from '../Components/organisms/QuizesWrapper/index'
const Home = () => {
  return (
    <HomeTemplate>
      <Header />
      <QuizesWrapper />
    </HomeTemplate>  
  )
}  

export default Home;

