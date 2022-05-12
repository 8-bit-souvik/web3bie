import styles from "../styles/homepage.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = ({ aboutdata }) => {
  // console.log('About data', aboutdata)
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
          EXPLORE THE NEW CONCEPT OF INTERNET
        </div>
        <div className={styles.paragraph}>
          Web3 is an idea for a new iteration of the World Wide Web based on
          blockchain technology, which incorporates concepts such as
          decentralization and token-based economics.
        </div>
        <button className={styles.button} onClick={scroll}>
          LEARN MORE
        </button>
      </div>
      <div className={styles.container_right}>
        <img src="https://allpolicies.in/wp-content/uploads/2022/01/Web-3.0.png" />
      </div>
    </section>
  );
};

export default Home;
