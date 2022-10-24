import s from './AboutPerfume.module.scss'
import ContentLoader from 'react-content-loader'
import { FC } from 'react'

type PerfumeSkeletonProps = {
  height: number
  width: number
}

const PerfumeSkeleton: FC<PerfumeSkeletonProps> = ({ height, width }) => {
  const images = (
    <ContentLoader
      className={s.activeImg}
      speed={2}
      width={width}
      height={height}
      viewBox="0 0 640 650"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="650" height="640" />
    </ContentLoader>
  )

  const about = (
    <ContentLoader
      speed={2}
      width={650}
      height={650}
      viewBox="0 0 650 650"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="650" height="110" />
      <rect x="0" y="190" rx="7" ry="7" width="650" height="180" />
    </ContentLoader>
  )

  return (
    <div>
      <div className="container">
        <div className={s.AboutPerfume}>
          <div className={s.images}>{images}</div>

          <div className={s.about}>{about}</div>
        </div>
      </div>
    </div>
  )
}

export default PerfumeSkeleton
