import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <TechStack />
            <Experience />
            <Contact />
        </>
    );
}
