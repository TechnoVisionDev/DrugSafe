// pages/drugs/[id].jsx
import styles from './drug.module.css';
import { useState, useRef } from 'react';
import { FaSquare, FaPills, FaChartLine, FaComments, FaExchangeAlt, FaVial, FaShieldAlt, FaExclamationTriangle, FaGavel, FaBook } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Navbar from '../../components/Navbar';
import { drugData } from '../../data/drugs';
import Introduction from '../../components/drugs/Introduction';
import Effects from '../../components/drugs/Effects';
import Dosage from '../../components/drugs/Dosage';

const Drug = ({ data }) => {

    const sections = [
        {name: 'Introduction', component: <Introduction drugData={data}/>, icon: <FaSquare />}, 
        {name: 'Effects', component: <Effects effects={data.effects} />, icon: <FaPills />}, 
        {name: 'Dosage', component: <Dosage routes={data.routes} info={data.info}/>, icon: <FaChartLine />}, 
        {name: 'Trip Reports', component: <></>, icon: <FaComments />}, 
        {name: 'Interactions', component: <></>, icon: <FaExchangeAlt />}, 
        {name: 'Reagent Testing', component: <></>, icon: <FaVial />}, 
        {name: 'Harm Reduction', component: <></>, icon: <FaShieldAlt />}, 
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
    // Use fetch to get the data for the specific drug
    const res = await fetch(`http://localhost:3000/api/drugs/${params.id}`);
    const data = await res.json();

    // If the request failed, throw an error
    if (!res.ok) {
        throw new Error(data.message);
    }

    // Pass the data to the page via props
    return { props: { data } };

    return {
        props: {data : drugData[params.id]}
    };
}

export async function getStaticPaths() {
    // Fetch all drug IDs from your API or database for static generation
    // This is just a placeholder
    const drugIds = ['cannabis', 'methamphetamine'];
    const paths = drugIds.map(id => ({ params: { id } }));

    return {
        paths,
        fallback: false
    };
}

export default Drug;
