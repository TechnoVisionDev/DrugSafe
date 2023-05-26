import styles from './HarmReduction.module.css';

const HarmReduction = ({harmReduction}) => {
    return (
        <section>
            <h2 className={styles.header}>Harm Reduction</h2>
            {harmReduction.map((element, index) => 
                <div>
                    <p><b>{index+1}.) {element.header}</b></p>
                    <p>{element.body}</p>
                </div>
            )}
        </section>
    );
}

export default HarmReduction;