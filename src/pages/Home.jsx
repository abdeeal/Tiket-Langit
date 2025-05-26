import React from 'react'
import { Navbar } from '../components/fragments/Navbar'
import { Hero } from '../components/layouts/Home/Hero'
import { Main } from '../components/layouts/Home/Main'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
    </>
  )
}
