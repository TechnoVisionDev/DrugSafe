import styles from './Interactions.module.css';
import { Table } from 'react-bootstrap';
import { FaExclamationTriangle, FaHeartbeat, FaTimes } from 'react-icons/fa';


const Interactions = ({ interactions, info }) => {
    return (
        <section className={styles.interactionsContainer}>
            <h2>Interactions</h2>
            {info.interactions.split('\n').map((c,index) => (<p key={index}>{c}</p>))}
            <Table bordered>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Drug</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {interactions.caution.map(interaction => 
                        <tr className={styles.caution} key={interaction}>
                            <td><FaExclamationTriangle/></td>
                            <td>{interaction}</td>
                        </tr>
                    )}
                    {interactions.unsafe.map(interaction => 
                        <tr className={styles.unsafe} key={interaction}>
                            <td><FaHeartbeat/></td>
                            <td>{interaction}</td>
                        </tr>
                    )}
                    {interactions.dangerous.map(interaction => 
                        <tr className={styles.dangerous} key={interaction}>
                            <td><FaTimes/></td>
                            <td>{interaction}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <h2 className={styles.header}>Interaction Key</h2>
            <p><b>Caution:</b> This level of interaction signifies that there could be potential issues with taking the drugs together, but it might not be severe or life-threatening. It means the drugs could interact in a way that might affect their performance or cause increased side effects. In this scenario, a healthcare provider may still prescribe these medications together but will monitor you closely, or they may adjust the dose or timing of medication administration to minimize the interaction.</p>
            <p><b>Unsafe:</b> An "unsafe" level of interaction means that combining these drugs could result in serious and potentially harmful side effects or significantly reduce the efficacy of one or both drugs. It's usually recommended to avoid combining drugs with an "unsafe" interaction level, or, if absolutely necessary, to only do so under close medical supervision with a careful consideration of potential risks and benefits.</p>
            <p><b>Dangerous:</b> This is the highest level of interaction risk. Drugs with "dangerous" interactions can cause severe, life-threatening side effects when combined, or they could significantly impact the effectiveness of crucial treatments. Using such a combination is generally strictly contraindicated. It's essential to avoid these combinations unless the benefits far outweigh the risks, and only under exceptional circumstances and under very close medical supervision.</p>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Interaction</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    <tr className={styles.caution}>
                        <td><FaExclamationTriangle/></td>
                        <td>Caution</td>
                    </tr>
                    <tr className={styles.unsafe}>
                        <td><FaHeartbeat/></td>
                        <td>Unsafe</td>
                    </tr>
                    <tr className={styles.dangerous}>
                        <td><FaTimes/></td>
                        <td>Dangerous</td>
                    </tr>
                </tbody>
            </Table>
            <p><b>Source:</b> <a href="https://psychonautwiki.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer"><em><u>www.psychonautwiki.org</u></em></a></p>
        </section>
    );
}

export default Interactions;