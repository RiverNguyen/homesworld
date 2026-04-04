'use client'
import { useEffect, useRef, useState } from 'react'

import Background from '@/app/_components/about-us/_components/Background'
import { IAboutUs } from '@/interfaces/about-us'

const AboutUs = ({ acfData }: { acfData: IAboutUs }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.8) {
        setIsVisible(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <section
      ref={sectionRef}
      className={isVisible ? 'sticky top-[1.875rem] xsm:top-[-26rem]' : 'relative'}
    >
      <Background acfData={acfData} />
    </section>
  )
}

export default AboutUs
