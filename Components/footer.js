import styles from "../styles/header.module.css";

export const Header = ({ aboutdata }) => {
  return (
    <section id="header" className={styles.header}>
      <div className={styles.logo}>WEB3bie</div>
      <div className={styles.sign}>
        <a href="#"><div>Source Code</div></a>
      </div>
    </section>
  );
};

export default Header;