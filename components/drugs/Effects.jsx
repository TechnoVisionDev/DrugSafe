import styles from './Effects.module.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Effects = ({ effects, info }) => {
    return (
        <section className={styles.effectsContainer}>
            { info.name === "Kratom" ? (
                <>
                    <h2>Effects at Low Doses (1-5g)</h2>
                    <p>{info.effectsLow}</p>
                    <div className={styles.effectsSection}>
                        <EffectsList title="Positive Effects" effects={effects.lowDose.positive} pairEffectsLength={effects.lowDose.negative.length} />
                        <EffectsList title="Negative Effects" effects={effects.lowDose.negative} isNegative pairEffectsLength={effects.lowDose.positive.length} />
                    </div>
                    <h2>Effects at High Doses (5g+)</h2>
                    <p>{info.effectsHigh}</p>
                    <div className={styles.effectsSection}>
                        <EffectsList title="Positive Effects" effects={effects.highDose.positive} pairEffectsLength={effects.highDose.negative.length} />
                        <EffectsList title="Negative Effects" effects={effects.highDose.negative} isNegative pairEffectsLength={effects.highDose.positive.length} />
                    </div>
                </>
            ) : (
                <>
                    <h2>Effects</h2>
                    <p>{info.effects}</p>
                    <div className={styles.effectsSection}>
                        <EffectsList title="Positive Effects" effects={effects.positive} pairEffectsLength={effects.negative.length} />
                        <EffectsList title="Negative Effects" effects={effects.negative} isNegative pairEffectsLength={effects.positive.length} />
                    </div>
                </>
            )}

            <h2 className={styles.header}>Comedown</h2>
            <p>{info.comedown}</p>
            <EffectsList title="After Effects" effects={effects.after} isNegative />

            <h2 className={styles.header}>Overdose</h2>
            <p>{info.overdose}</p>
            <EffectsList title="Signs of Overdose" effects={effects.overdose} isNegative />
            <p><b>Source:</b> <a href="https://psychonautwiki.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer"><em><u>www.psychonautwiki.org</u></em></a></p>
        </section>
    );
}

const EffectsList = ({ title, effects, isNegative = false }) => (
    <div className={styles.listContainer}>
        <ListGroup as="ul">
            <ListGroup.Item as="li" key={title} {...(isNegative ? {disabled: true} : {active: true})}>
                {title}
            </ListGroup.Item>
            {effects && effects.map((effect, index) => <ListGroup.Item as="li" key={index}>{effect}</ListGroup.Item>)}
        </ListGroup>
    </div>
);


export default Effects;
