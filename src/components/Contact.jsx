import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollReveal()

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className={`reveal ${visible ? 'revealed' : ''} section-container text-center`}>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle mx-auto mb-10">{t('contact.subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://t.me/alseky" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 cta-glow">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.54.26l.19-2.69 4.91-4.44c.22-.197-.047-.307-.34-.11l-6.07 3.82-2.61-.81c-.566-.18-.58-.57.12-.84l10.2-3.93c.47-.18.89.11.73.84z"/></svg>
            {t('contact.cta')}
          </a>
          <a href="mailto:olseky2610@mail.ru" className="btn-outline text-lg px-8 py-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {t('contact.email')}
          </a>
        </div>
      </div>
    </section>
  )
}
