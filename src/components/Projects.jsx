import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

const tagColors = [
  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
]

export default function Projects() {
  const { t } = useTranslation()
  const [headerRef, headerVisible] = useScrollReveal()
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.05 })
  const projects = t('projects.items', { returnObjects: true })

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'revealed' : ''} text-center mb-16`}>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle mx-auto">{t('projects.subtitle')}</p>
        </div>
        <div ref={cardsRef} className={`reveal-stagger ${cardsVisible ? 'revealed' : ''} grid sm:grid-cols-2 gap-6`}>
          {projects.map((p, i) => (
            <div key={i} className="card-hover glass rounded-xl p-6 flex flex-col">
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">{p.role}</p>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span key={j} className={`text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105 ${tagColors[j % tagColors.length]}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
