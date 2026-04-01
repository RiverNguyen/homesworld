import React from 'react'
import Banner from './_components/banner'
import Combo from './_components/combo'
import HeaderSearch from '../_components/header-search'
import taxonomiesService from '@/services/taxonomies'

const ComboList = async () => {
  const [taxonomiesData, locationData] = await Promise.all([
    taxonomiesService.getAllTaxonomies('service_combo'),
    taxonomiesService.getAllTaxonomies('location'),
  ])

  return (
    <div className='flex flex-col items-center bg-[#F8F8F8]'>
      <Banner />
      <HeaderSearch
        taxonomies={taxonomiesData?.data || []}
        locations={locationData?.data || []}
      />
      <div className='flex justify-center pt-[6.25rem] xsm:pt-[1.5rem] xsm:w-full xsm:px-[0.75rem]'>
        <div className='w-full max-w-[100rem]'>
          <Combo />
        </div>
      </div>
    </div>
  )
}

export default ComboList
