import styles from './Introduction.module.css';

const Introduction = ({drugData}) => {
    return (
        <section>
            <h2 className={styles.header}>What is {drugData.name}?</h2>
            <p>{drugData.description}</p>
            <h2 className={styles.header}>History</h2>
            <p>{drugData.description}</p>
        </section>
    );
}

export default Introduction;