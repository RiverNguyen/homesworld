import BannerHomepage from '@/app/_components/banner'
import Combo from '@/app/_components/combo'
import FilterSearch from '@/app/_components/search'
import TravelGuide from '@/app/_components/travel-guide'
import Weather from '@/app/_components/weather'
import comboService from '@/services/combo'
import homeService from '@/services/home'
import taxonomiesService from '@/services/taxonomies'

import About_us from './_components/about-us'
import HeaderSearch from './_components/header-search'

export default async function HomePage() {
  const [homeData, blogRes, taxonomiesData, locationData, comboData] = await Promise.all([
    homeService.getHome(),
    homeService.getBlogs({ limit: 5 }),
    taxonomiesService.getAllTaxonomies('service_combo'),
    taxonomiesService.getAllTaxonomies('location'),
    comboService.getCombo(),
  ])

  return (
    <>
      <style>{`
          body {
            margin-top:0;
          }
          @media (max-width: 639px) {
            body {
              margin-top: 3.13rem;
            }
          }
        `}</style>
      <HeaderSearch
        taxonomies={taxonomiesData?.data}
        locations={locationData?.data}
      />
      <BannerHomepage data={homeData?.acf?.banner} />
      <div className='bg-[#FEFBF9]'>
        <FilterSearch
          taxonomies={taxonomiesData?.data}
          locations={locationData?.data}
        />
        <Combo
          data={homeData?.acf?.combo || []}
          comboData={comboData?.data || []}
          locations={locationData?.data || []}
        />
        <About_us />

        <Weather acfData={homeData?.acf} />
        <TravelGuide
          page={homeData?.acf?.travel_guide || {}}
          data={blogRes.data || []}
        />
      </div>
    </>
  )
}
