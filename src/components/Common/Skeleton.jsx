import ContentLoader from 'react-content-loader'
import s from './PerfumeRowMapping/Perfume.module.scss'

const MyLoader = ({ height, width }) => {
  const myStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${width}px, 1fr))`,
  }

  const skeleton = [1, 2, 3, 4].map((item) => {
    return (
      <ContentLoader
        key={item}
        className={s.perfume}
        speed={2}
        width={320}
        height={450}
        viewBox="0 0 320 450"
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
