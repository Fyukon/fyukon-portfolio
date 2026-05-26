import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

const tagColors = [
  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
]

const tagIcons = {
  'aiogram 3': '🤖',
  'aiogram': '🤖',
  'FastAPI': '⚡',
  'PostgreSQL': '🐘',
  'SQLAlchemy 2.0': '🗄️',
  'SQLAlchemy': '🗄️',
  'Docker': '🐳',
  'OpenRouter': '🧠',
  'React': '⚛️',
  'Tailwind CSS': '🎨',
  'Cloudpub': '☁️',
  'FSM': '🔀',
  'GitLab CI/CD': '🔄',
  'MAX': '🏗️',
  'Backend': '🔧',
  'Telegram Bot API': '📱',
  'Vite': '⚡',
  'Caddy': '🌐',
  'nginx': '🌐',
  'Python': '🐍',
  'Linux': '🐧',
  'VDS': '🖥️',
  'Git': '📦',
  'DeepSeek AI': '🧠',
}

function getTagIcon(tag) {
  return tagIcons[tag] || '▸'
}

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
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, j) => (
                  <span key={j} className={`text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105 ${tagColors[j % tagColors.length]}`}>
                    {getTagIcon(tag)} {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors self-start"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Открыть проект
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
