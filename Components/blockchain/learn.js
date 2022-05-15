import styles from "../../styles/blockchain/learn.module.css";

export const Learn = ({ aboutdata }) => {
  return (
    <>
      <div className={styles.learn}>
        <h2>Usage of blockchain</h2>
        <b className={styles.usage}>
          <ol>
            <li>Payment processing and money transfers</li>
            <li>Monitor supply chains</li>
            <li>Retail loyalty rewards programs</li>
            <li>Digital IDs</li>
            <li>Data sharing</li>
            <li>Copyright and royalty protection</li>
            <li>Digital voting</li>
            <li>Immutable data backup</li>
            <li>Tax regulation and compliance</li>
            <li>Equity trading</li>
            <li>Managing Internet of Things networks</li>
          </ol>

          <img src="https://miro.medium.com/max/1400/1*Ce4yleNEJeVx2Z5xYhjHGg.jpeg" />
        </b>
      </div>
    </>
  );
};

export default Learn;
