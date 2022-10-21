import s from '../Home.module.scss'
import { NavLink } from 'react-router-dom'
import bgPoster from '../../../assets/img/homePagePoster.webp'

const Hero = () => {
  return (
    <div className={s.Hero}>
      <div className={s.leftSide}>
        <h2>мы заботимся о твоем здоровье и красоте</h2>
        <NavLink to="/catalog" className="toCatalog">
          Перейти к каталогу
        </NavLink>
      </div>
      <div className={s.rightSide}>
        <img src={bgPoster} alt="Poster" />
      </div>
    </div>
  )
}

export default Hero
