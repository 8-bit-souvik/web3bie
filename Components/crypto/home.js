import styles from "../../styles/crypto/home.module.css";

export const Home = ({ home }) => {
  return (
    <section className={styles.home}>
      {home}
    </section>
  );
};

export default Home;
