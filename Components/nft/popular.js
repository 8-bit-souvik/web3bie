import styles from "../../styles/nft/popular.module.css";

export const Popular = ({ popular }) => {
  return (
      <>
        <section className={styles.popular}>
          {popular}
        </section>
      </>
  )
}

export default Popular;