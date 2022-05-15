import styles from "../../styles/nft/learn.module.css";

export const Learn = ({ learn }) => {
  return (
    <section className={styles.learn_more}>
      {learn}
    </section>
  );
};

export default Learn;
