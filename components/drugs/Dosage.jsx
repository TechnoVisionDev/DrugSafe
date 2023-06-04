import React, { useState } from 'react';
import styles from './Dosage.module.css';
import { Table } from 'react-bootstrap';

const Dosage = ({routes, info}) => {

    const [benzoType, setBenzoType] = useState("alprazolam");

    return (
        <section className={styles.effectsContainer}>
            <h2>Dosing {info.name}</h2>
            <p>{info.dosage}</p>
            {info.name === 'Benzodiazepines' &&
                <div className={styles.typeContainer}>
                    {['alprazolam', 'clonazepam', 'diazepam', 'lorazepam'].map((type) => (
                        <div
                            className={`${styles.typeButton} ${benzoType === type ? styles.active : ''}`}
                            key={type}
                            onClick={() => setBenzoType(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </div>
                    ))}
                </div>
            }
            <div className={styles.tables}>
                {Object.keys(routes).map((key, index) => (
                    info.name === 'Benzodiazepines' && key === benzoType && Object.keys(routes[key]).map((routeKey) =>
                        <div key={routeKey}>
                            <h2 className={styles.header}>{`${routes[key][routeKey].route} (${key.charAt(0).toUpperCase() + key.slice(1)})`}</h2>
                            <p>{routes[key][routeKey].instructions}</p>
                            <div className={styles.tableContainer}>
                                <DosageTable route={routes[key][routeKey]} />
                            </div>
                        </div>
                    ) || (
                        info.name !== 'Benzodiazepines' &&
                        <div key={index}>
                            <h2 className={styles.header}>{routes[key].route}</h2>
                            <p>{routes[key].instructions}</p>
                            <div className={styles.tableContainer}>
                                <DosageTable route={routes[key]} />
                            </div>
                        </div>
                    )
                ))}
            </div>
            <p><b>Source:</b> <a href="https://psychonautwiki.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer"><em><u>www.psychonautwiki.org</u></em></a></p>
        </section>
    );
}

const DosageTable = ({route}) => {
    const {dosage, duration} = route;
    return (
        <>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th colSpan={2}>Dosage</th>
                    </tr>
                </thead>
                <tbody>
                    {dosage && Object.keys(dosage).map((key) => (
                        <tr key={key}>
                            <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                            <td>{dosage[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th colSpan={2}>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {duration && Object.keys(duration).map((key) => (
                        <tr key={key}>
                            <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                            <td>{duration[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Dosage;
