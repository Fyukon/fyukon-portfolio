import { useTranslation } from "react-i18next";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
    const { t } = useTranslation();
    const [ref, visible] = useScrollReveal();

    return (
        <div className="section-container py-24 min-h-screen">
            <div
                ref={ref}
                className={`reveal ${visible ? "revealed" : ""} max-w-3xl`}
            >
                <h1 className="text-4xl font-bold mb-6">{t("about.title")}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    {t("about.subtitle")}
                </p>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("about.contactTitle")}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t("about.contactDesc")}
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400">
                        <p>
                            <strong>2024</strong> — Started learning Python,
                            built first Telegram bots
                        </p>
                        <p>
                            <strong>2025</strong> — Internship at TableCRM,
                            production backend work
                        </p>
                        <p>
                            <strong>2025</strong> — Started teaching programming
                            (300+ lessons)
                        </p>
                        <p>
                            <strong>Present</strong> — Building automation
                            solutions and full-stack projects
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
