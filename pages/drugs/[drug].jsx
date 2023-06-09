// pages/drugs/[drug].jsx
import styles from './drug.module.css';
import { useState, useEffect } from 'react';
import { FaSquare, FaPills, FaChartLine, FaComments, FaExchangeAlt, FaVial, FaShieldAlt, FaExclamationTriangle, FaGavel, FaBook } from 'react-icons/fa';
import { drugData } from '../../lib/drugs'; 
import Navbar from '../../components/Navbar';
import Introduction from '../../components/drugs/Introduction';
import Effects from '../../components/drugs/Effects';
import Dosage from '../../components/drugs/Dosage';
import Interactions from '../../components/drugs/Interactions';
import HarmReduction from '../../components/drugs/HarmReduction';
import Testing from '../../components/drugs/Testing';
import Risks from '../../components/drugs/Risks';
import Law from '../../components/drugs/Law';
import References from '../../components/drugs/References';
import TripReports from '../../components/drugs/TripReports';
import {clientPromise, databaseName} from '../../lib/mongodb';

const Drug = ({ data, reports }) => {

    const sections = [
        {name: 'Introduction', component: <Introduction info={data.info} images={data.images}/>, icon: <FaSquare />}, 
        {name: 'Effects', component: <Effects effects={data.effects} info={data.info}/>, icon: <FaPills />}, 
        {name: 'Dosage', component: <Dosage routes={data.routes} info={data.info}/>, icon: <FaChartLine />}, 
        {name: 'Trip Reports', shortName: 'Reports', component: <TripReports drugName={data.name} reports={reports}/>, icon: <FaComments />}, 
        {name: 'Interactions', component: <Interactions interactions={data.interactions} info={data.info}/>, icon: <FaExchangeAlt />}, 
        {name: 'Reagent Testing', shortName: 'Testing', component: <Testing testing={data.testing} info={data.info}/>, icon: <FaVial />}, 
        {name: 'Harm Reduction', shortName: 'Safety', component: <HarmReduction harmReduction={data.harmReduction}/>, icon: <FaShieldAlt />}, 
        {name: 'Risks', component: <Risks risks={data.risks}/>, icon: <FaExclamationTriangle />}, 
        {name: 'The Law', component: <Law legality={data.legality} info={data.info} />, icon: <FaGavel />}, 
        {name: 'References', component: <References references={data.references}/>, icon: <FaBook />}
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

export async function getStaticProps({ params }) {
    // Retrieve drug data
    const data = drugData[params.drug];

    // Retrieve trip reports
    const client = await clientPromise;
    const db = client.db(databaseName);
    let reports = await db.collection('reports').find({ drug: params.drug }).toArray();

    // Convert _id and date to a string
    reports = reports.map((report) => ({
      ...report,
      _id: report._id.toString(),
      date: report.date.toString(),
    }));

    return { props: { data, reports } };
}

export async function getStaticPaths() {
    const drugNames = Object.keys(drugData);
    const paths = drugNames.map(drug => ({ params: { drug } }));
    return {
        paths,
        fallback: false
    };
}

export default Drug;
