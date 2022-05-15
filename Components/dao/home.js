import styles from "../../styles/dao/home.module.css";

export const Home = ({ aboutdao }) => {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.landing}>KNOW ABOUT DAO</div>
        <div className={styles.defination}>
        A decentralized autonomous organization (DAO) is an entity with no central leadership. Decisions get made from the bottom-up, governed by a community organized around a specific set of rules enforced on a blockchain.
<br />
<br />
DAOs are internet-native organizations collectively owned and managed by their members. They have built-in treasuries that are only accessible with the approval of their members. Decisions are made via proposals the group votes on during a specified period.
        </div>
      </section>
    </>
  );
};

export default Home;
