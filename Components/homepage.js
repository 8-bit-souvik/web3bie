import styles from "../styles/homepage.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = ({ home }) => {
  // console.log('About data', aboutdata)

  const {title, description, image } = home;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function scroll(e) {
    window.scrollTo(0, e.target.offsetTop, { behavior: "smooth" });
  };
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container_left}>
        <div className={styles.heading}>
          {title}
        </div>
        <div className={styles.paragraph}>
          {description}
        </div>
        <button className={styles.button} onClick={scroll}>
          LEARN MORE
        </button>
      </div>
      <div className={styles.container_right}>
        <img src={image} />
      </div>
    </section>
  );
};

export default Home;
