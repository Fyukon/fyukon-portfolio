import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

export default function TechStack() {
  const { t } = useTranslation()
  const [headerRef, headerVisible] = useScrollReveal()
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.05 })
  const allItems = t('tech.items', { returnObjects: true })
  const cats = t('tech.categories', { returnObjects: true })

  const grouped = {
    backend: allItems.slice(0, 5),
    frontend: allItems.slice(5, 8),
    data: allItems.slice(8, 10),
    infra: allItems.slice(10),
  }

  return (
    <section id="tech" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'revealed' : ''} text-center mb-16`}>
          <h2 className="section-title">{t('tech.title')}</h2>
          <p className="section-subtitle mx-auto">{t('tech.subtitle')}</p>
        </div>
        <div ref={cardsRef} className={`reveal-stagger ${cardsVisible ? 'revealed' : ''} grid sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {Object.entries(grouped).map(([key, items]) => (
            <div key={key} className="card-hover glass rounded-xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">{cats[key]}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span key={i} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
