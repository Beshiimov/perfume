import { FC } from 'react'
import Hero from './Hero/Hero'
import New from './New/New'
import AboutUs from './AboutUs/AboutUs'

const Home: FC = () => {
  return (
    <div className="container">
      <Hero />
      <New />
      <AboutUs />
    </div>
  )
}

export default Home
