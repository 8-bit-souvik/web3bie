import styles from "../../styles/crypto/home.module.css";

export const Home = ({ aboutdata }) => {
  return (
    <>
      <div className={styles.landing}>KNOW ABOUT DIGITAL CRYPTO CURRENCY</div>
      <div className={styles.defination}>
      A cryptocurrency (or “crypto”) is a digital asset that can circulate without the need for a central monetary authority such as a government or bank. Instead, cryptocurrencies are created using cryptographic techniques that enable people to buy, sell or trade them securely.
      </div>

      
    </>
  );
};

export default Home;
