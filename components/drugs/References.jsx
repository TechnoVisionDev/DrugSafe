import styles from './References.module.css';

const References = ({references}) => {
    return (
        <section>
            <h2>References</h2>
            {references.map((element, index) => 
                <p className={styles.body} key={index}><b>[{index+1}]</b> {element}</p>
            )}
        </section>
    );
}

export default References;