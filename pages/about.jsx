import Navbar from "../components/Navbar";
import styles from "./about.module.css";
import { useState, useEffect } from 'react';
import { FaSquare, FaPills, FaChartLine, FaComments } from 'react-icons/fa';

const About = () => {

    const sections = [
        { name: 'About Us', component: <AboutSection />, icon: <FaSquare /> },
        { name: 'Donate', component: <DonateSection />, icon: <FaPills /> },
        { name: 'Contact', component: <ContactSection />, icon: <FaChartLine /> },
        { name: 'Discord', component: <DiscordSection />, icon: <FaComments /> },
    ];
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 500);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <img className={styles.drugImage} src="https://cdn-icons-png.flaticon.com/512/5726/5726532.png" alt="Question marks" />
                    <h1 className={styles.drugName}>About DrugSafe</h1>
                    <p className={styles.drugAliases}>
                        <b>{"-- { "}</b>
                        Learn more about DrugSafe
                        <b>{" } --"}</b>
                    </p>
                </div>

                <p className={styles.description}>DrugSafe is a harm reduction website and community with a mission to make harm reduction for drug users as simple, accessible, and user-friendly as possible. Our website shares life-saving information related to drug dosages, interactions, effects, and much more!</p>

                <div className={styles.main}>
                    <div className={styles.sections}>
                        {sections.map((section) => (
                            <button
                                key={section.name}
                                onClick={() => setSelectedSection(section)}
                                className={`${styles.sectionButton} ${selectedSection.name === section.name ? styles.active : ''}`}
                            >
                                {section.icon} {isMobile && section.shortName ? section.shortName : section.name}
                            </button>
                        ))}
                    </div>

                    <div className={styles.sectionContent}>
                        {selectedSection.component}
                    </div>
                </div>
            </div>
        </>
    );
};

const AboutSection = () => {
    return (
        <section>
            <div>
                <h2>What is DrugSafe?</h2>
                <p>
                    DrugSafe is a harm reduction website and community with a mission to make harm reduction for drug users as simple, accessible, and user-friendly as possible. Our website is a modern, mobile-friendly platform to share useful information related to drug dosages, interactions, effects, and other life-saving information! Our Discord serves as a community to share knowledge about harm reduction and find support in recovery.
                    <br /><br />
                    Our website allows anyone to access harm reduction guides for a wide variety of drugs. Simply search for your drug of choice and you will be provided with information such as proper dosage, expected effects, associated risks, user trip reports, and so much more!
                </p>
                <h2>How is Your Website Different?</h2>
                <p>Many of today's harm reduction websites are either too complicated or don't size correctly for all screen sizes. This makes it difficult to pull up critical harm reduction info at parties, festivals, etc. The issue is that these locations are where most unsafe drug use is happening! Our website changes this by being built from the ground up to be fully responsive, meaning the entire user interface will dynamically change and scale no-matter what screen size you use. That means you can get the life-saving info you need whether you're at home on your laptop or on your phone partying!</p>
                <h2>How Can I contribute?</h2>
                <p>
                    DrugSafe is an entirely community-run project. This means the founder currently pays for all operating costs out of pocket every month, including domain fees, web hosting, etc. We are lucky to have a software engineer who does all development free of charge. If just a few people were generous enough to pledge $1 per month, we could keep DrugSafe running almost indefinitely. That means life-saving harm reduction for EVERYONE on the internet. We always post our monthly expenses on our Discord to be transparent about where funds are going.
                    <br /><br />
                    Our website is also entirely open source, meaning the development process is community run. If you’re a developer looking to contribute ways other than financially, feel free to check out our GitHub and make a PR request. Our team will review it ASAP. If you’re fluent in multiple languages and would be willing to translate some of our guides for us, that would also be of great help! Check out our discord if you would like to contribute in other ways but don't currently have the ability to help financially: <a className={styles.link} href="https://drugsafe.info/discord" target="_blank" rel="noopener noreferrer">https://drugsafe.info/discord</a>
                </p>
                <h2>What are Your Long Term Goals?</h2>
                <p>We have big dreams for what DrugSafe could become if we received enough funding and support. First, we'd want to register officially as a nonprofit organization with the US government. Unfortunately this costs anywhere from $99 to $400 in paperwork and legal costs. Once we achieve this, we'd love to provide free fentanyl strips and reagents through the mail to help combat the fentanyl crisis sweeping the USA and other nations. There is nothing that breaks our heart more than knowing people out there are dying due to dangerous cuts because they didn't have the resources to buy a reagent kit (which can be very pricey). Finally, our ultimate goal would be to open a low-cost mail-in testing laboratory where users could anonymously send in a sample of their drugs to have their full breakdown posted online using GC-MS test. Today's mail-in testing in the USA costs $100-150 per sample, which deters pretty much everyone from getting their drugs analyzed. We would love to bring this cost down to $25-50 and maybe even free one day. This is just a taste of the dreams you are funding by pledging even just $1 to DrugSafe.</p>
            </div>
        </section>
    );
}

const DonateSection = () => {
    return (
        <section>
            <div>
                <h2>Why Do We Need Donations?</h2>
                <p>DrugSafe is an entirely community-run project. This means the founder currently pays for all operating costs out of pocket every month, including domain fees, web hosting, etc. We are lucky to have a software engineer who does all development free of charge. If just a few people were generous enough to pledge $1 per month, we could keep DrugSafe running almost indefinitely. That means life-saving harm reduction for EVERYONE on the internet.We always post our monthly expenses on our Discord to be transparent about where funds are going.</p>
                <h2>What are Your Long Term Goals?</h2>
                <p>We have big dreams for what DrugSafe could become if we received enough funding and support. First, we'd want to register officially as a nonprofit organization with the US government. Unfortunately this costs anywhere from $99 to $400 in paperwork and legal costs. Once we achieve this, we'd love to provide free fentanyl strips and reagents through the mail to help combat the fentanyl crisis sweeping the USA and other nations. There is nothing that breaks our heart more than knowing people out there are dying due to dangerous cuts because they didn't have the resources to buy a reagent kit (which can be very pricey). Finally, our ultimate goal would be to open a low-cost mail-in testing laboratory where users could anonymously send in a sample of their drugs to have their full breakdown posted online using GC-MS test. Today's mail-in testing in the USA costs $100-150 per sample, which deters pretty much everyone from getting their drugs analyzed. We would love to bring this cost down to $25-50 and maybe even free one day. This is just a taste of the dreams you are funding by pledging even just $1 to DrugSafe.</p>
            </div>
        </section>
    );
}

const ContactSection = () => {
    return (
        <section>
            <div>
                <h2>Contact Us</h2>
                <p>A contact form is coming soon and is currently under construction. For now, contact us through our discord: <a className={styles.link} href="https://drugsafe.info/discord" target="_blank" rel="noopener noreferrer">https://drugsafe.info/discord</a></p>
            </div>
        </section>
    );
}

const DiscordSection = () => {
    return (
        <section>
            <div>
                <h2>About Our Discord</h2>
                <p>Our Discord server acts as a central hub of real-time communication for our community. We have a variety of channels for discussing harm reduction, recovery, drug science, and so much more. Whether you’re a researcher, drug user, rehab specialist, or addict in recovery, we know you will find a home in the DrugSafe discord. Join now by navigating to this link: <a className={styles.link} href="https://drugsafe.info/discord" target="_blank" rel="noopener noreferrer">https://drugsafe.info/discord</a></p>
            </div>
        </section>
    );
}

export default About;