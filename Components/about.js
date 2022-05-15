import styles from "../styles/about.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = ({ about }) => {
  // console.log('About data', aboutdata)


  const evolution = about.card.map(cardTemplate)

  function cardTemplate(data) {
    return (
      <div className={styles.card}>
            <div className={styles.card_paragraph}>
              <b>{data.title}</b>
              <br />  <br />
              {data.text}
            </div>
            <div className={styles.card_image}>
              <img
                width="100%"
                src={data.image}
              />
            </div>
          </div>
    )
  }



  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}></div>
      <div className={styles.history}>
        <h2>{about.title}</h2>

        <p className={styles.paragraph}>
          {about.paragraph}
        </p>
        <div className={styles.timeline}>
          {evolution}
        </div>
      </div>
    </section>
  );
};

export default About;
