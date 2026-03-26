
import { IWeatherAcf, IWeatherResponse } from '@/interfaces/weather'


import Layout from '@/app/_components/weather/_components/Layout'

const Weather = async ({ acfData }: { acfData: IWeatherAcf }) => {
  return (
    <div className='max-w-[100rem] flex items-center justify-center flex-col'>
      <Layout acfData={acfData} />
    </div>
  )
}

export default Weather
