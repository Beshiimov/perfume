import React from 'react'
import s from '../Home.module.scss'
import { Link } from 'react-router-dom'
import bgPoster from '../../../assets/img/homePagePoster.webp'

const Hero = () => {
  return (
    <div className={s.Hero}>
      <div className={s.leftSide}>
        <h2>мы заботимся о твоем здоровье и красоте</h2>
        <Link to="/">Перейти к каталогу</Link>
      </div>
      <div className={s.rightSide}>
        <img src={bgPoster} alt="Poster" />
      </div>
    </div>
  )
}

export default Hero
