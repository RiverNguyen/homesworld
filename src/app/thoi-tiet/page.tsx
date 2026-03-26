import ENDPOINTS from '@/configs/endpoints'
import { IWeatherResponse } from '@/interfaces/weather'
import weatherService from '@/services/thoi-tiet'

import Layout from './_components/Layout'

const Weather = async () => {
  const { acf }: IWeatherResponse = await weatherService.getAcfData(ENDPOINTS.weather.page_id.vi)

  return (
    <div className='max-w-[100rem] flex items-center justify-center flex-col'>
      <Layout acfData={acf} />
    </div>
  )
}

export default Weather
