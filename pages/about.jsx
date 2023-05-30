import Navbar from "../components/Navbar";
import styles from "./about.module.css";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="pageContainer">
                <section className="headerContainer">
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/5726/5726532.png" alt="Icon for boofing" />
                    <h1 className="header">About DrugSafe</h1>
                    <p className="subtitle">
                        <b>{"-- { "}</b>
                        What is DrugSafe all about?
                        <b>{" } --"}</b>
                    </p>
                </section>
                <p className={styles.description}>
                    Welcome to DrugSafe, your trusted online companion in the world of harm reduction. We are an organization deeply dedicated to promoting health, well-being, and safety for individuals navigating the complexities of drug use.
                    <br/><br/>
                    Founded on the principles of empathy, understanding, and science, DrugSafe provides comprehensive, easy-to-understand, and reliable information to drug users. Our mission is to reduce harm and save lives by offering critical insights into safe drug use practices.
                    <br/><br/>
                    In the current digital era, accessing pertinent information should be a seamless process. Recognizing this, we've developed DrugSafe to be different from other harm reduction websites. We understand the frustration that comes from complicated user interfaces, hard-to-navigate websites, and platforms that are not optimized for mobile use.
                    <br/><br/>
                    What sets DrugSafe apart is our dedication to user-friendly technology. Our website features a clean user interface that adapts to any device size, making life-saving information accessible whether you're on a desktop, laptop, tablet, or smartphone. This commitment to accessibility is one of the many ways we strive to be the best possible resource for our community.
                    <br/><br/>
                    Our content is meticulously researched, and regularly updated to reflect the latest scientific findings in the field of harm reduction. We ensure that the information you find on DrugSafe is not just practical but is also accurate, up-to-date, and trustworthy.
                    <br/><br/>
                    DrugSafe is more than just a website - it's a life-saving tool, a community, and a commitment. We are dedicated to helping people stay safe, informed, and empowered, no matter where they are in their journey with drug use.
                    <br/><br/>
                    Remember, safety comes first, and we are here to help. Trust in DrugSafe - your go-to source for harm reduction information, available anywhere, anytime, and on any device.
                </p>
            </div>
        </>
    );
}

export default About;