'use client'

import { useCallback, useEffect, useRef } from 'react'

import { useIsClient } from '@/hooks/useIsClient'

export function useScrollHeader(headerRef: React.RefObject<HTMLElement>) {
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const isClient = useIsClient()

  useEffect(() => {
    if (window.location.pathname === '/' && window.innerWidth > 639) {
      headerRef.current.classList.add('transparent')
    }
  }, [])
  const updateScrollDirection = useCallback(() => {
    if (!isClient) return
    const el = headerRef.current
    const headerSearchEl = document.getElementById('header-search')
    const filterSection = document.getElementById('filter')
    if (!el) return

    const scrollY = window.scrollY

    if (!ticking.current) {
      requestAnimationFrame(() => {
        const direction = scrollY > lastScrollY.current ? 'down' : 'up'

        // Tăng threshold để giảm số lần update
        if (Math.abs(scrollY - lastScrollY.current) > 15) {
          if (direction === 'down') {
            if (filterSection) {
              const rect = filterSection.getBoundingClientRect()
              if (rect.bottom < 0) {
                headerSearchEl!.style.transform = 'translateY(150%)'
              }
            }
            headerRef.current!.style.transform = 'translateY(-150%)'
            headerRef.current.classList.remove('transparent')
          } else {
            if (
              scrollY <= window.innerHeight / 4 &&
              window.location.pathname === '/' &&
              window.innerWidth > 639
            ) {
              headerRef.current.classList.add('transparent')
            }
            if (headerSearchEl) {
              headerSearchEl.style.transform = 'translateY(0)'
            }
            headerRef.current!.style.transform = 'translateY(0)'
          }
          lastScrollY.current = scrollY > 0 ? scrollY : 0
        }

        ticking.current = false
      })

      ticking.current = true
    }
  }, [headerRef, isClient])

  useEffect(() => {
    if (!isClient) return

    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [updateScrollDirection, isClient])

  return headerRef
}
