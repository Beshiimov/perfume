import { LoadingStatus, PerfumeType } from '../../../@types/Types'

export interface AboutPerfumeSliceType {
  aboutPerfume: PerfumeType | null
  status: LoadingStatus
}
