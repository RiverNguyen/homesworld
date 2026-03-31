'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string
            includedLanguages: string
            autoDisplay: boolean
          },
          elementId: string,
        ) => void
      }
    }
    googleTranslateElementInit: () => void
  }
}

function setGoogTransCookie(value: string) {
  const hostname = window.location.hostname
  document.cookie = `googtrans=${value}; path=/`
  document.cookie = `googtrans=${value}; path=/; domain=${hostname}`
  document.cookie = `googtrans=${value}; path=/; domain=.${hostname}`
}

function clearGoogTransCookie() {
  const hostname = window.location.hostname
  const expired = '; expires=Thu, 01 Jan 1970 00:00:00 UTC'
  document.cookie = `googtrans=${expired}; path=/`
  document.cookie = `googtrans=${expired}; path=/; domain=${hostname}`
  document.cookie = `googtrans=${expired}; path=/; domain=.${hostname}`
}

function getInitialLanguage(): 'en' | 'vi' {
  if (typeof document === 'undefined') return 'vi'
  const match = document.cookie.match(/googtrans=\/vi\/(\w+)/)
  return match?.[1] === 'en' ? 'en' : 'vi'
}

export function useGoogleTranslate() {
  const [language, setLanguageState] = useState<'en' | 'vi'>(getInitialLanguage)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'vi',
          includedLanguages: 'en,vi',
          autoDisplay: false,
        },
        'google_translate_element',
      )
    }

    const script = document.createElement('script')
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const setLanguage = useCallback(
    (lang: 'en' | 'vi') => {
      if (lang === language) return
      setLanguageState(lang)

      if (lang === 'en') {
        setGoogTransCookie('/vi/en')

        const select = document.querySelector<HTMLSelectElement>('.goog-te-combo')
        if (select) {
          select.value = 'en'
          select.dispatchEvent(new Event('change'))
        } else {
          window.location.reload()
        }
      } else {
        clearGoogTransCookie()
        window.location.reload()
      }
    },
    [language],
  )

  return { language, setLanguage }
}
