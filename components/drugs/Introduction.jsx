import styles from './Introduction.module.css';

const Introduction = ({info, images}) => {
    return (
        <section>
            <div>
                <h2 className={styles.header}>{info.isPlural ? 'What are' : 'What is'} {info.name}?</h2>
                {info.introduction.split('\n').map((c,index) => (<p key={index}>{c}</p>))}
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={images[0]} alt="Drug image #1" />
                    <img className={styles.image} src={images[1]} alt="Drug image #2" />
                    <img className={styles.image} src={images[2]} alt="Drug image #3" />
                </div>
            </div>
            <div>
                <h2>How it Works</h2>
                {info.pharmacology.split('\n').map((c,index) => (<p key={index}>{c}</p>))}
            </div>
            <div>
                <h2>History</h2>
                {info.history.split('\n').map((c,index) => (<p key={index}>{c}</p>))}
            </div>
        </section>
    );
}

export default Introduction;