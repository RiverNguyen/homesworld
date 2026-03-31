'use client'
import { useEffect, useRef, useState } from 'react'

import Background from '@/app/_components/about-us/_components/Background'

const AboutUs = () => {
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
    <section ref={sectionRef} className='relative' style={{
      position: isVisible ? 'sticky' : 'relative',
      top: isVisible ? '1.875rem' : 'auto',
    }}>
      <Background />
    </section>
  )
}

export default AboutUs
