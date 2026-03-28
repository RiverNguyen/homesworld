import BannerHomepage from '@/app/_components/banner'
import FilterSearch from '@/app/_components/search'
import TravelGuide from '@/app/_components/travel-guide'
import homeService from '@/services/home'
import taxonomiesService from '@/services/taxonomies'

import Weather from './_components/weather'
import About_us from './_components/about-us'

export default async function HomePage() {
  const [homeData, blogRes, taxonomiesData, locationData] = await Promise.all([
    homeService.getHome(),
    homeService.getBlogs({ limit: 5 }),
    taxonomiesService.getAllTaxonomies('service_combo'),
    taxonomiesService.getAllTaxonomies('location'),
  ])
  return (
    <>
       <BannerHomepage data={homeData?.acf?.banner} /> 
      <FilterSearch
        taxonomies={taxonomiesData?.data}
        locations={locationData?.data}
      /> 
      <About_us />
      <Weather acfData={homeData?.acf} />
      <TravelGuide
        page={homeData?.acf?.travel_guide || {}}
        data={blogRes.data || []}
      />
    </>
  )
}
