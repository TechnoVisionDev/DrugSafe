import Navbar from '../components/Navbar';
import styles from './index.module.css';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="headerContainer">
        <img className="image mt-5" src="https://cdn-icons-png.flaticon.com/512/3790/3790110.png" alt="Icon for boofing" />
        <h1 className="header">DrugSafe</h1>
        <p className="subtitle">
          <b>{"-- { "}</b>
          Harm reduction, made simple
          <b>{" } --"}</b>
        </p>
        <div className={styles.container}>
          <Button href="/drugs" variant="primary">Get Started</Button>
          <Button href="https://discord.gg/s8CFunneAg" target="_blank" rel="noopener noreferrer" variant="primary">Join Our Community</Button>
        </div>
      </section>
    </>
  )
}
