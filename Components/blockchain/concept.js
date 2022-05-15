import styles from "../../styles/blockchain/concept.module.css";

export const Concept = ({ concept }) => {
  return (
    <div className={styles.concept}>
      {concept}
   
    </div>
  );
};

export default Concept;
