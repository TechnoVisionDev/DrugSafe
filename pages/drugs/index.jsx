import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Navbar from "../../components/Navbar";
import styles from './index.module.css';

const Drugs = ({ drugs, initialSearchTerm }) => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');

    const filteredDrugs = drugs.filter((drug) => {
        return drug.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
            drug.aliases.some(alias =>
                alias.toLowerCase().startsWith(searchTerm.toLowerCase())
            )
    });

    useEffect(() => {
        if (router.query.search) {
            setSearchTerm(router.query.search);
        }
    }, [router.query]);

    return (
        <>
            <Navbar />
            <div className="pageContainer">
                <section className="headerContainer">
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/2833/2833242.png" alt="Icon for drugs" />
                    <h1 className="header">Search Drugs</h1>
                    <p className={styles.subtitle}>
                        <b>{"-- { "}</b>
                        Find harm reduction guides for any drug
                        <b>{" } --"}</b>
                    </p>
                </section>
                <Form.Control className={styles.search} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search"  aria-label="Search" />
                <div className={styles.gridContainer}>
                    {filteredDrugs.map((drug) => (
                        <Link href={`/drugs/${drug.info.name.toLowerCase()}`} className={styles.drugBox} key={drug.name}>
                            <img src={drug.icon} alt={drug.name} className={styles.drugIcon} />
                            <h2 className={styles.drugName}>{drug.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps({ query }) {
    // Retrieve drug data
    const res = await fetch(`${process.env.URL}/api/drugs`)
    const drugs = await res.json()
    if (!res.ok) {
        throw new Error(data.message);
    }

    // Retrieve initial search from navbar
    const initialSearchTerm = query.search || '';

    return {
        props: {
            drugs,
            initialSearchTerm,
        },
    };
}

export default Drugs;