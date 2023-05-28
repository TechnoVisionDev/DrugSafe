import Navbar from "../../components/Navbar";
import styles from './boofing.module.css';

const BoofingGuide = () => {
    return (
        <>
            <Navbar />
            <div className="pageContainer">
                <section className="headerContainer">
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/6594/6594142.png" alt="Icon for boofing" />
                    <h1 className="header">Boofing Guide</h1>
                    <p className="subtitle">
                        <b>{"-- { "}</b>
                        How to safely boof drugs
                        <b>{" } --"}</b>
                    </p>
                </section>
                <p className="description">This guide is currently in development. We at DrugSafe are very careful not to release any harm reduction information untill we are absolutely sure it is accurate, safe, and reliable.</p>
            </div>
        </>
    );
}

export default BoofingGuide;