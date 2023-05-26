// pages/drugs/[id].jsx
import styles from './drug.module.css';
import { useState, useRef } from 'react';
import { FaSquare, FaPills, FaChartLine, FaComments, FaExchangeAlt, FaVial, FaShieldAlt, FaExclamationTriangle, FaGavel, FaBook } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { drugData } from '../../data/drugs'; 
import Navbar from '../../components/Navbar';
import Introduction from '../../components/drugs/Introduction';
import Effects from '../../components/drugs/Effects';
import Dosage from '../../components/drugs/Dosage';
import Interactions from '../../components/drugs/Interactions';
import HarmReduction from '../../components/drugs/HarmReduction';

const Drug = ({ data }) => {

    const sections = [
        {name: 'Introduction', component: <Introduction info={data.info} images={data.images}/>, icon: <FaSquare />}, 
        {name: 'Effects', component: <Effects effects={data.effects} info={data.info}/>, icon: <FaPills />}, 
        {name: 'Dosage', component: <Dosage routes={data.routes} info={data.info}/>, icon: <FaChartLine />}, 
        {name: 'Trip Reports', component: <></>, icon: <FaComments />}, 
        {name: 'Interactions', component: <Interactions interactions={data.interactions} info={data.info}/>, icon: <FaExchangeAlt />}, 
        {name: 'Reagent Testing', component: <></>, icon: <FaVial />}, 
        {name: 'Harm Reduction', component: <HarmReduction harmReduction={data.harmReduction}/>, icon: <FaShieldAlt />}, 
        {name: 'Risks', component: <></>, icon: <FaExclamationTriangle />}, 
        {name: 'The Law', component: <></>, icon: <FaGavel />}, 
        {name: 'References', component: <></>, icon: <FaBook />}
    ];

    const [selectedSection, setSelectedSection] = useState(sections[0]);
    const [menuVisible, setMenuVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        dropdownRef.current.focus();
    };

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img className={styles.drugImage} src={data.icon} alt={data.name} />
                    <h1 className={styles.drugName}>{data.name}</h1>
                    <p className={styles.drugAliases}>
                        <b>{"-- { "}</b>
                        {data.aliases.join(', ')}
                        <b>{" } --"}</b>
                    </p>
                </div>

                <p className={styles.description}>{data.description}</p>

                <div className={styles.main}>
                    <div className={styles.menuIcon} onClick={toggleMenu}>
                        {menuVisible ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                    <div ref={dropdownRef} tabIndex="-1" onBlur={() => setMenuVisible(false)} className={`${styles.sections} ${menuVisible ? styles.visible : ''}`}>
                        {sections.map((section) => (
                            <button 
                                key={section.name} 
                                onClick={() => { setSelectedSection(section); setMenuVisible(false); }} 
                                className={`${styles.sectionButton} ${selectedSection.name == section.name ? styles.active : ''}`}
                            >
                                {section.icon} {section.name}
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

export async function getStaticProps({ params }) {
    // Fetch drug data from API
    const res = await fetch(`${process.env.URL}/api/drugs/${params.id}`);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    return { props: { data } };
}

export async function getStaticPaths() {
    // Fetch all drug IDs for static generation
    const drugIds = Object.keys(drugData);
    const paths = drugIds.map(id => ({ params: { id } }));
    return {
        paths,
        fallback: false
    };
}

export default Drug;
