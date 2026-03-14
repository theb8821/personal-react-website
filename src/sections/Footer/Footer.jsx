import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy;{new Date().getFullYear()} Bishal Subedi <br/> All right reserved.</p>
    </section>
  )
}

export default Footer
