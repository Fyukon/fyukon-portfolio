import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const tagColors = [
  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
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

export default function ProjectsPage() {
  const { t } = useTranslation()
  const projects = t('projects.items', { returnObjects: true }) || []
  const [filter, setFilter] = useState('all')

  const categories = [
    { key: 'all', label: 'Все проекты' },
    { key: 'bot', label: 'Telegram боты' },
    { key: 'web', label: 'Веб-сервисы / Full-stack' },
    { key: 'api', label: 'API & Backend' },
  ]

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true
    if (filter === 'bot') return p.tags.some(t => t.toLowerCase().includes('bot') || t.toLowerCase().includes('aiogram'))
    if (filter === 'web') return p.tags.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('css') || t.toLowerCase().includes('site'))
    if (filter === 'api') return p.tags.some(t => t.toLowerCase().includes('fastapi') || t.toLowerCase().includes('backend') || t.toLowerCase().includes('postgres'))
    return true
  })

  // Hardcoded mapping for demo sandboxes on lab.fyukon.pro
  const demoLinks = {
    'RuKond': 'https://lab.fyukon.pro/demo/aircon',
    'AI CFO Bot': 'https://lab.fyukon.pro/demo/school',
    'Lead Bot': 'https://lab.fyukon.pro/demo/auto',
    'Fyukon Automation Lab': 'https://lab.fyukon.pro'
  }

  return (
    <div className="section-container py-28 min-h-screen">
      <div className="text-center mb-16">
        <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 inline-flex items-center gap-1 transition-colors">
          ← На главную
        </Link>
        <h1 className="text-4xl font-extrabold mt-4 mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          {t('projects.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map(c => {
          const active = filter === c.key
          return (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold relative transition-colors focus:outline-none shrink-0 ${
                active ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="active-project-filter"
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-500/20"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10">{c.label}</span>
            </button>
          )
        })}
      </div>

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => {
            const hasDemo = !!demoLinks[p.title]
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08)' }}
                key={p.title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 p-6 flex flex-col justify-between shadow-sm transition-all duration-300 relative overflow-hidden"
              >
                {hasDemo && (
                  <span className="absolute top-4 right-4 bg-green-500/10 text-green-600 dark:text-green-400 text-2xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-green-500/20">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Live Демо
                  </span>
                )}
                <div>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">{p.role}</p>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((tag, j) => (
                      <span key={j} className={`text-2xs font-semibold px-2 py-1 rounded-lg ${tagColors[j % tagColors.length]}`}>
                        {getTagIcon(tag)} {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {hasDemo && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={demoLinks[p.title]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-4 py-2.5 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors shadow-sm shadow-green-600/10"
                    >
                      ⚡ Запустить демо-сценарий
                    </motion.a>
                  )}
                  {p.link ? (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        hasDemo ? 'border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50' : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      Посмотреть код / сайт
                    </motion.a>
                  ) : !hasDemo ? (
                    <span className="text-center text-xs text-gray-400 py-2.5 font-medium bg-gray-50 rounded-xl dark:bg-gray-800/40">Разработка под NDA</span>
                  ) : null}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
