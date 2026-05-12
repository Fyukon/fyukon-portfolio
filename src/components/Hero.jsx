import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 md:pt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-200/30 dark:bg-blue-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cyan-200/20 dark:bg-cyan-900/10 blur-3xl pointer-events-none" />
      <div className="section-container py-20">
        <div className="max-w-3xl hero-enter">
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-3 font-mono">{t('hero.greeting')}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
            {t('hero.name')}
          </h1>
          <p className="text-2xl sm:text-3xl gradient-text font-semibold mb-6">
            {t('hero.alias')}
          </p>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
            {t('hero.role')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary cta-glow">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.54.26l.19-2.69 4.91-4.44c.22-.197-.047-.307-.34-.11l-6.07 3.82-2.61-.81c-.566-.18-.58-.57.12-.84l10.2-3.93c.47-.18.89.11.73.84z"/></svg>
              {t('hero.cta_work')}
            </a>
            <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              {t('hero.cta_cv')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animation: 'float 2s ease-in-out infinite' }}>
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
