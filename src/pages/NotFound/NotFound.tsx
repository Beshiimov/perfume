import { Link } from 'react-router-dom'

import s from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={s.NotFound}>
      <h2>Ой, Неправильный адрес 🥲</h2>
      <Link to="/catalog" className="toCatalog">
        Перейти к каталогу
      </Link>
    </div>
  )
}

export default NotFound
