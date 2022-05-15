import styles from "../../styles/crypto/learn.module.css";

export const Learn = ({ learn }) => {
  return (
      <section className={styles.learn_more}>
        {learn}
      </section>
  )
}

export default Learn;