import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
                <p>
                    &copy; {new Date().getFullYear()} {t("footer.copyright")}
                </p>
                <div className="flex items-center gap-4">
                    <Link
                        to="/about"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        {t("footer.about")}
                    </Link>
                    <a
                        href="https://github.com/Fyukon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://t.me/alseky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        Telegram
                    </a>
                    <span>·</span>
                    <span>{t("footer.built")}</span>
                </div>
            </div>
        </footer>
    );
}
