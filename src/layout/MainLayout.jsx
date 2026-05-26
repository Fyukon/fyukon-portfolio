import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToHash from "../hooks/ScrollToHash";

export default function MainLayout({ children }) {
    const { t, i18n } = useTranslation();
    const [dark, setDark] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved) return saved === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return true;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <ScrollToHash />
            <Nav dark={dark} setDark={setDark} toggleLang={toggleLang} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
