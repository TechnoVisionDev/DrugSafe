// pages/drugs/[id].jsx
import styles from './Effects.module.css';

const Effects = ({ effects }) => {
    return (
        <div className={styles.effectsContainer}>
            <h2 className={styles.header}>Positive Effects</h2>
            <p>We have listed the most common effects of cannabis. Please note that everyone can be affected differently, and this is not an exhaustive list. Not everyone experiences these effects, and other effects are possible.</p>
            <ul>
                {effects.positive.map(effect => <li key={effect}>{effect}</li>)}
            </ul>
            <h2 className={styles.header}>Negative Effects</h2>
            <ul>
                {effects.negative.map(effect => <li key={effect}>{effect}</li>)}
            </ul>
            <h2 className={styles.header}>After Effects</h2>
            <ul>
                {effects.after.map(effect => <li key={effect}>{effect}</li>)}
            </ul>
        </div>
    );
}

export default Effects;