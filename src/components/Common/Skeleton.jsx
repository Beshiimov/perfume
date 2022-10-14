import ContentLoader from 'react-content-loader'
import s from '../Common/Parfume/Parfume.module.scss'

const MyLoader = (props) => {
  return [1, 2, 3, 4].map((item) => {
    return (
      <ContentLoader
        className={s.parfume}
        key={item}
        speed={2}
        width={320}
        height={400}
        viewBox="0 0 320 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="0" rx="0" ry="0" width="320" height="400" />
      </ContentLoader>
    )
  })
}

export default MyLoader
