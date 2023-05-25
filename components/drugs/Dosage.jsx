import styles from './Dosage.module.css';
import { Table } from 'react-bootstrap';

const Dosage = ({routes, info}) => {
    return (
        <section className={styles.effectsContainer}>
            <h2>Dosing {info.name}</h2>
            <p>{info.dosage}</p>
            <div className={styles.tables}>
                {Object.keys(routes).map((key) =>
                    <div>
                        <h2 className={styles.header}>{routes[key].route}</h2>
                        <p>{routes[key].instructions}</p>
                        <div className={styles.tableContainer}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Dosage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bioavailability</td>
                                        <td>{routes[key].bioavailability}</td>
                                    </tr>
                                    <tr>
                                        <td>Threshold</td>
                                        <td>{routes[key].dosage.threshold}</td>
                                    </tr>
                                    <tr>
                                        <td>Light</td>
                                        <td>{routes[key].dosage.light}</td>
                                    </tr>
                                    <tr>
                                        <td>Common</td>
                                        <td>{routes[key].dosage.common}</td>
                                    </tr>
                                    <tr>
                                        <td>Strong</td>
                                        <td>{routes[key].dosage.strong}</td>
                                    </tr>
                                    <tr>
                                        <td>Heavy</td>
                                        <td>{routes[key].dosage.heavy}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Total</td>
                                        <td>{routes[key].duration.total}</td>
                                    </tr>
                                    <tr>
                                        <td>Onset</td>
                                        <td>{routes[key].duration.onset}</td>
                                    </tr>
                                    <tr>
                                        <td>Come Up</td>
                                        <td>{routes[key].duration.comeup}</td>
                                    </tr>
                                    <tr>
                                        <td>Peak</td>
                                        <td>{routes[key].duration.peak}</td>
                                    </tr>
                                    <tr>
                                        <td>Offset</td>
                                        <td>{routes[key].duration.offset}</td>
                                    </tr>
                                    <tr>
                                        <td>After Effects</td>
                                        <td>{routes[key].duration.after}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Dosage;