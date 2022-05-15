import styles from "../../styles/dao/concept.module.css";

export const Concept = ({ concept }) => {
  return (
    <>
      <div className={styles.concept}>
        {concept}
      </div>
    </>
  );
};

export default Concept;
