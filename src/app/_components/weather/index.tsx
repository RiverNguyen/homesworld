import Layout from '@/app/_components/weather/_components/layout'
import { IWeatherAcf } from '@/interfaces/weather'


const Weather = async ({ acfData }: { acfData: IWeatherAcf }) => {
  return (
    <div className='max-w-[100rem] flex items-center justify-center flex-col'>
      <Layout acfData={acfData} />
    </div>
  )
}

export default Weather
