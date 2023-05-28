import styles from './Effects.module.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Effects = ({ effects, info }) => {
    return (
        <section className={styles.effectsContainer}>
            <h2>Effects</h2>
            <p>{info.effects}</p>
            <p>We have listed the most common effects of this drug. Please note that everyone can be affected differently, and this is not an exhaustive list. Remember, the likelihood of experiencing negative effects is much greater at high doses.</p>
            <div className={styles.listContainer}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" key="positive" active>
                        Positive Effects
                    </ListGroup.Item>
                    {effects.positive.map((effect, index) => <ListGroup.Item as="li" key={index}>{effect}</ListGroup.Item>)}
                </ListGroup>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" key="negative" disabled>
                        Negative Effects
                    </ListGroup.Item>
                    {effects.negative.map((effect, index) => <ListGroup.Item as="li" key={index}>{effect}</ListGroup.Item>)}
                </ListGroup>
            </div>
            <h2 className={styles.header}>Comedown</h2>
            <p>{info.comedown}</p>
            <div className={styles.listContainer}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" key="comedown" active>
                        After Effects
                    </ListGroup.Item>
                    {effects.after.map((effect, index) => <ListGroup.Item as="li" key={index}>{effect}</ListGroup.Item>)}
                </ListGroup>
            </div>
            <h2 className={styles.header}>Overdose</h2>
            <p>{info.overdose}</p>
            <div className={styles.listContainer}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" key="overdose" disabled>
                        Signs of Overdose
                    </ListGroup.Item>
                    {effects.overdose.map((effect, index) => <ListGroup.Item as="li" key={index}>{effect}</ListGroup.Item>)}
                </ListGroup>
            </div>
        </section>
    );
}

export default Effects;