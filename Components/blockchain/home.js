import styles from "../../styles/blockchain/home.module.css";

export const Home = ({ aboutdata }) => {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.landing}>KNOW ABOUT Blockchain Technology</div>
        <div className={styles.defination}>
          Blockchain is a shared, immutable ledger that facilitates the process
          of recording transactions and tracking assets in a business network.
          An asset can be tangible (a house, car, cash, land) or intangible
          (intellectual property, patents, copyrights, branding).
        </div>
      </section>
    </>
  );
};

export default Home;
