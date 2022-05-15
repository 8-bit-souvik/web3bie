import styles from "../../styles/crypto/concept.module.css";

export const Learn = ({ concept }) => {
  return (
    <section className={styles.concept}>
     {concept}
    </section>
  );
};

export default Learn;
