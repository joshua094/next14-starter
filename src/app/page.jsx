import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>Where all your thoughts are brought to life through creativity and artistic semblance.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image
          src="/brands.png"
          alt="brand image"
          fill
          className={styles.brandImg}
        />
    </div>
    </div>
    <div className={styles.imgContainer}>
      <Image
        src="/hero.gif"
        alt="Hero image"
        fill
        className={styles.heroImg}
      />
    </div>
  </div>;
};

export default Home;