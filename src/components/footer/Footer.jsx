import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>Jay</div>
      <div className={styles.text}>
        Jay creative thoughts. All rights reserved
      </div>
    </footer>
  )
}

export default Footer