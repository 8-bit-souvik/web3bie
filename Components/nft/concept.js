import styles from "../../styles/nft/concept.module.css";

export const Concept = ({ concept }) => {
  return (
    <>
      <section className={styles.concept}>
        {concept}
      </section>
    </>
  );
};

export default Concept;
