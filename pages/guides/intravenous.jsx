import Navbar from "../../components/Navbar";
import styles from "./intravenous.module.css";

const IntravenousGuide = () => {
    return (
        <>
            <Navbar />
            <div className="pageContainer">
                <section className="headerContainer">
                    <img className="image mb-3" src="https://static-00.iconduck.com/assets.00/drug-and-syringe-icon-512x499-tlqmrh1q.png" alt="Icon for intravenous" />
                    <h1 className="header">Intravenous Guide</h1>
                    <p className="subtitle">
                        <b>{"-- { "}</b>
                        How to safely inject drugs
                        <b>{" } --"}</b>
                    </p>
                </section>
                <p className="description">This guide is currently in development. We at DrugSafe are very careful not to release any harm reduction information untill we are absolutely sure it is accurate, safe, and reliable.</p>
            </div>
        </>
    );
}

export default IntravenousGuide;