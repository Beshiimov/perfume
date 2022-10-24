import ContentLoader from 'react-content-loader'
import s from './PerfumeRowMapping/Perfume.module.scss'
import { FC } from 'react'

type MyLoaderProps = { height: number; width: number }

const MyLoader: FC<MyLoaderProps> = ({ height, width }) => {
  const myStyle = {
    gridTemplateColumns: `repeat(auto-fit, minmax(${width}px, 1fr)`,
  }

  const skeleton = [1, 2, 3, 4, 5, 6].map((item) => {
    return (
      <ContentLoader
        key={item}
        className={s.perfume}
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 350 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="320" height="400" />
        <rect x="0" y="407" rx="0" ry="0" width="253" height="22" />
        <rect x="2" y="433" rx="0" ry="0" width="201" height="10" />
      </ContentLoader>
    )
  })

  return (
    <div className={s.Parfumes} style={myStyle}>
      {skeleton}
    </div>
  )
}

export default MyLoader
