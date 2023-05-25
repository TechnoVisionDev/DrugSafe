import styles from './Effects.module.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Effects = ({ effects }) => {
    return (
        <section className={styles.effectsContainer}>
            <h2>Effects</h2>
            <p>We have listed the most common effects of this drug. Please note that everyone can be affected differently, and this is not an exhaustive list. Not everyone experiences these effects, and other effects are possible. The way you consume a drug may drastically affect the intensity of the effects. Remember, the likelihood of experiencing negative effects is much greater at high doses.</p>
            <div className={styles.listContainer}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        Positive Effects
                    </ListGroup.Item>
                    {effects.positive.map(effect => <ListGroup.Item as="li">{effect}</ListGroup.Item>)}
                </ListGroup>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" disabled>
                        Negative Effects
                    </ListGroup.Item>
                    {effects.negative.map(effect => <ListGroup.Item as="li">{effect}</ListGroup.Item>)}
                </ListGroup>
            </div>
            <h2 className={styles.header}>Comedown</h2>
            <p>We have listed some of the common after effects that users of this drug report feeling anywhere from a few hours to a few days after using. It’s important to remember that not everyone experiences these effects, and other effects are possible. Comedowns can be very debilitating for some and you should exercise extreme caution to make sure your body is properly taken care of.</p>
            <div className={styles.listContainer}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        After Effects
                    </ListGroup.Item>
                    {effects.after.map(effect => <ListGroup.Item as="li">{effect}</ListGroup.Item>)}
                </ListGroup>
            </div>
            <h2 className={styles.header}>Overdose</h2>
            <p>When too much of a drug is taken, an overdose may occur. Not all overdoses are fatal, but many can be. We have listed some of the common effects that users of this drug report feeling during an overdose. If you or someone you know is experiencing any of these symptoms, you should get medical help immediately. The time between overdose and death can be incredibly short and so it’s critical to act fast.</p>
            <p>Often symptoms of anxiety or panic attacks can mimic the initial signs of a drug overdose. It’s important to remember that you should always prioritize your safety and get medical help if you suspect that something is wrong. </p>
            <div className={styles.listContainer}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" disabled>
                        Signs of Overdose
                    </ListGroup.Item>
                    {effects.overdose.map(effect => <ListGroup.Item as="li">{effect}</ListGroup.Item>)}
                </ListGroup>
            </div>
        </section>
    );
}

export default Effects;