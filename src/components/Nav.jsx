import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Nav({ dark, setDark }) {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const links = ['services', 'projects', 'tech', 'experience', 'contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8 md:h-10">
        <a href="#" className="text-xl md:text-2xl font-bold gradient-text">Fyukon</a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          {links.map(l => (
            <a key={l} href={`#${l}`} className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t(`nav.${l}`)}
            </a>
          ))}
          <button onClick={toggleLang} className="text-xs font-medium px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-colors">
            {t('footer.lang')}
          </button>
          <button onClick={() => setDark(!dark)} className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleLang} className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-600">{t('footer.lang')}</button>
          <button onClick={() => setDark(!dark)} className="p-1">{dark ? '☀️' : '🌙'}</button>
          <button onClick={() => setOpen(!open)} className="p-1.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col gap-2">
            {links.map(l => (
              <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                {t(`nav.${l}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
