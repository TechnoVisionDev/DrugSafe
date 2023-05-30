import Navbar from '../components/Navbar';
import styles from './index.module.css';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>The Future of <span className={styles.span}>Accessible</span><br className={styles.br}/> Harm Reduction</h1>
          <p className={styles.subtitle}>
            We're committed to providing simplified, readily available harm reduction resources. Life-saving information is just a click away, regardless of the device you use.
          </p>
          <div className={styles.buttonContainer}>
            <Button href="/drugs" variant="primary">Get Started</Button>
            <Button href="https://discord.gg/s8CFunneAg" target="_blank" rel="noopener noreferrer" variant="outline-primary">Join Our Community</Button>
          </div>
        </div>
        <img className={styles.image} src="https://cdn-icons-png.flaticon.com/512/3790/3790110.png" alt="Icon for boofing" />
      </section>
    </>
  )
}
