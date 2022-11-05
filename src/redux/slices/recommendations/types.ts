import { LoadingStatus, PerfumeType } from '../../../@types/Types'

export interface RecommendationsSliceType {
  perfumes: PerfumeType[]
  status: LoadingStatus
}
