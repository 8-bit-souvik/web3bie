import styles from "../../styles/blockchain/features.module.css";

export const Features = ({ features }) => {
  return (
      <div className={styles.features}>
        {features}
      </div>
  )
}

export default Features;