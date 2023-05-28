import Navbar from "../../components/Navbar";
import styles from './testing.module.css';

const TestingGuide = () => {
    return (
        <>
            <Navbar />
            <div className="pageContainer">
                <section className="headerContainer">
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/2266/2266134.png" alt="Icon for reagent testing" />
                    <h1 className="header">Reagent Testing</h1>
                    <p className="subtitle">
                        <b>{"-- { "}</b>
                        How to correctly test your drugs
                        <b>{" } --"}</b>
                    </p>
                </section>
                <p className="description">This guide is currently in development. We at DrugSafe are very careful not to release any harm reduction information untill we are absolutely sure it is accurate, safe, and reliable.</p>
            </div>
        </>
    );
}

export default TestingGuide;