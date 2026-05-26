import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-16 md:pt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900"
        >
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-200/30 dark:bg-blue-900/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-cyan-200/20 dark:bg-cyan-900/10 blur-3xl pointer-events-none" />

            <div className="section-container py-20 w-full">
                <div className="max-w-3xl hero-enter">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                        {t("hero.name")}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
                        {t("hero.role")}
                    </p>
                    <p className="text-2xl sm:text-3xl gradient-text font-semibold mb-10">
                        {t("hero.alias")}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="btn-primary cta-glow text-base px-8 py-4"
                        >
                            {t("hero.cta_work")}
                        </a>
                        <Link
                            to="/projects"
                            className="btn-outline text-base px-8 py-4"
                        >
                            {t("hero.cta_projects")}
                        </Link>
                        <a
                            href="/resume.pdf"
                            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors self-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("hero.cta_cv")}
                        </a>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                style={{ animation: "float 2s ease-in-out infinite" }}
            >
                <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
