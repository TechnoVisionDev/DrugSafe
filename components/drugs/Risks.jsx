import styles from './Risks.module.css';

const Risks = ({risks}) => {
    return (
        <section>
            {risks.map((element, index) => 
                <div key={index}>
                    <h2>{element.header}</h2>
                    <p className={styles.body}>{element.body}</p>
                </div>
            )}
        </section>
    );
}

export default Risks;