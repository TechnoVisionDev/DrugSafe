import styles from './Testing.module.css';
import { Table } from 'react-bootstrap';

const Testing = ({testing, info}) => {
    return (
        <section>
            <div>
                <h2>Testing {info.name}</h2>
                <p>{info.testing}</p>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Reagent</th>
                            <th>Expected</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {testing.map(reagent => 
                            <tr key={reagent.name}>
                                <td><a href={reagent.link} target="_blank" rel="noopener">{reagent.name}</a></td>
                                <td>{reagent.expected}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <div>
                <h2 className={styles.header}>How to Reagent Test</h2>
                <p>To perform a reagent test, a small amount of the substance is required. Carefully place this sample on a clean, non-reactive surface. Apply a drop of the reagent on the sample and observe the color change, if any. This reaction should be compared with a color chart provided with the reagent kit. For fentanyl testing, dissolve a small amount of the substance in water and immerse the test strip according to the instructions. A negative result typically shows two lines, while a positive for fentanyl shows a single line. Always follow the instructions provided with the specific reagent or test strip, and use gloves and eye protection to ensure safety during testing.</p>
                <p>You should always test your drugs with atleast 3 reagents before consuming them. It’s important to remember that even passing three reagent tests does not rule out all possible cuts. To be 100% sure, you would need to test with many more reagents or send to a lab for analysis.</p>
                <div className={styles.parentContainer}>
                    <img className={styles.image} src="https://dancesafe.org/wp-content/uploads/2014/02/2022-color-chart.png"></img>
                </div>
            </div>
            <div>
                <h2 className={styles.header}>Lab Testing</h2>
                <p>If you require additional or more thorough testing, then mail-in lab testing may be what you’re looking for! In several countries, various laboratories will allow you to anonymously send in a sample of your drugs to have their contents analyzed and posted on their website. Depending on the country and legality of testing, this can cost anywhere from free to $300. Whether it is legal or not in your area, you should always send samples anonymously for your own safety. Allow up to 6 weeks to see your results posted. The following are links to laboratories for each country:</p>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Laboratory</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        <tr>
                            <td>USA</td>
                            <td><a href="http://drugsdata.com/" target="_blank" rel="noopener">DrugsData</a></td>
                        </tr>
                        <tr>
                            <td>Canada</td>
                            <td><a href="https://getyourdrugstested.com/" target="_blank" rel="noopener">GetYourDrugsTested</a></td>
                        </tr>
                        <tr>
                            <td>Australia</td>
                            <td><a href="https://directionshealth.com/cantest/" target="_blank" rel="noopener">CanTEST</a></td>
                        </tr>
                        <tr>
                            <td>Spain</td>
                            <td><a href="https://energycontrol-international.org/drug-testing-service/submitting-a-sample/" target="_blank" rel="noopener">Energy Control Nation</a></td>
                        </tr>
                        <tr>
                            <td>United Kingdom</td>
                            <td><a href="https://www.wedinos.org/sample-testing" target="_blank" rel="noopener">WEDINOS</a></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <p><b>Source:</b> <a href="https://www.dancesafe.org" target="_blank" rel="noopener noreferrer"><em><u>www.dancesafe.org</u></em></a></p>
        </section>
    );
}

export default Testing;