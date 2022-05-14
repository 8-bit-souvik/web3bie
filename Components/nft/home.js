import styles from "../../styles/nft/home.module.css";

export const Home = ({ aboutdata }) => {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.landing}>KNOW ABOUT NFT</div>
        <div className={styles.defination}>
          An NFT is a digital asset that represents real-world objects like art,
          music, in-game items and videos. They are bought and sold online,
          frequently with cryptocurrency, and they are generally encoded with
          the same underlying software as many cryptos.
        </div>
      </section>
    </>
  );
};

export default Home;
