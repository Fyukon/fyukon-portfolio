import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Experience() {
  const { t } = useTranslation()
  const [headerRef, headerVisible] = useScrollReveal()
  const [timelineRef, timelineVisible] = useScrollReveal()
  const items = t('experience.items', { returnObjects: true })

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'revealed' : ''} text-center mb-16`}>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle mx-auto">{t('experience.subtitle')}</p>
        </div>
        <div ref={timelineRef} className="max-w-3xl mx-auto relative timeline-line">
          <div className={timelineVisible ? '' : 'opacity-0'}>
            {items.map((item, i) => (
              <div key={i} className={`relative pl-8 pb-10 last:pb-0 border-l-2 border-transparent`}>
                <div className="timeline-dot" style={{ animationDelay: `${0.2 + i * 0.15}s` }} />
                <div style={{ animation: timelineVisible ? `fade-in-up 0.6s ${0.3 + i * 0.15}s cubic-bezier(0.22,1,0.36,1) both` : 'none' }}>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{item.period}</span>
                  <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
