import styles from './Law.module.css';

const Law = ({legality, info}) => {
    return (
        <section>
            <h2>The Law</h2>
            <p>{info.legality}</p>
            <h3 style={styles.subheader}>Europe</h3>
            <ul>
                <li><b>United Kingdom:</b> {legality.europe.uk}</li>
                <li><b>Germany:</b> {legality.europe.germany}</li>
                <li><b>France:</b> {legality.europe.france}</li>
                <li><b>Netherlands:</b> {legality.europe.netherlands}</li>
                <li><b>Spain</b> {legality.europe.spain}</li>
                <li><b>Russia</b> {legality.europe.russia}</li>
                {legality.europe.italy && <li><b>Italy:</b> {legality.europe.italy}</li>}
                {legality.europe.ireland && <li><b>Ireland:</b> {legality.europe.ireland}</li>}
            </ul>
            <h3 style={styles.subheader}>America</h3>
            <ul>
                <li><b>USA:</b> {legality.america.usa}</li>
                <li><b>Canada</b> {legality.america.canada}</li>
                <li><b>Mexico</b> {legality.america.mexico}</li>
            </ul>            
            <h3 style={styles.subheader}>Asia</h3>
            <ul>
                <li><b>Hong Kong:</b> {legality.asia.hk}</li>
                <li><b>Singapore:</b> {legality.asia.singapore}</li>
                <li><b>Israel:</b> {legality.asia.israel}</li>
                {legality.asia.thailand && <li><b>Thailand:</b> {legality.asia.thailand}</li>}
            </ul>
            <h3 style={styles.subheader}>Africa</h3>
            <ul>
                <li><b>South Africa:</b> {legality.africa.southafrica}</li>
            </ul>
            <h3 style={styles.subheader}>Australia</h3>
            <ul>
                <li><b>Australia:</b> {legality.australia.australia}</li>
                <li><b>New Zealand:</b> {legality.australia.newzealand}</li>
            </ul>
        </section>
    );
}

export default Law;