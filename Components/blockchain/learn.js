import styles from "../../styles/blockchain/learn.module.css";

export const Learn = ({ learn }) => {
  return (
    <>
      <div className={styles.learn}>
        {learn}
      </div>
    </>
  );
};

export default Learn;
