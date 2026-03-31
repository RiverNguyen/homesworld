import Cloud from '@/app/_components/weather/_components/cloud'
import Layout from '@/app/_components/weather/_components/layout'
import { IWeatherAcf } from '@/interfaces/weather'

const Weather = ({ acfData }: { acfData: IWeatherAcf }) => {
  return (
    <div className='max-w-[100rem]'>
      <Cloud />
      <div className="bg-[#FEFBF9] relative z-[5]">
        <Layout acfData={acfData} />
      </div>
    </div>
  )
}

export default Weather
