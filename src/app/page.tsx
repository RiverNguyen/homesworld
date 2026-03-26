import BannerHomepage from '@/app/_components/banner'
import FilterSearch from '@/app/_components/search'
import homeService from '@/services/home'
import taxonomiesService from '@/services/taxonomies'

import Weather from './_components/weather'


export default async function HomePage() {
  const [homeData, taxonomiesData] = await Promise.all([homeService.getHome(), taxonomiesService.getAllTaxonomies('service_combo')])
  return (
    <>
      <BannerHomepage data={homeData?.acf?.banner} />
      <FilterSearch taxonomies={taxonomiesData?.data} />
      <Weather acfData={homeData?.acf} />
    </>
  )
}
