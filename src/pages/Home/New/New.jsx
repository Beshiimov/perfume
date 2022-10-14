import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import Parfume from '../../../components/Common/Parfume/Parfume'
import {
  toggleLoadingStatus,
  updateParfums,
} from '../../../redux/slices/parfumsSlice'
import s from '../Home.module.scss'
import MyLoader from '../../../components/Common/Skeleton'

const New = () => {
  const dispatch = useDispatch()
  const parfums = useSelector((state) => state.parfumsSlice.parfums)
  const isLoading = useSelector((state) => state.parfumsSlice.isLoading)

  useEffect(() => {
    dispatch(toggleLoadingStatus(true))
    const sendRequest = async () => {
      const res = await axios.get(
        'https://63444faadcae733e8fdc93fe.mockapi.io/parfums/items',
      )
      dispatch(updateParfums(res.data))
      dispatch(toggleLoadingStatus(false))
    }
    sendRequest()
  }, [])

  return (
    <div className={s.New}>
      <h2>Новинки</h2>
      {isLoading ? <MyLoader /> : <Parfume parfums={parfums} />}
    </div>
  )
}

export default New
