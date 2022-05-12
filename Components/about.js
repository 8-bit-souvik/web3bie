import styles from "../styles/about.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = ({ aboutdata }) => {
  // console.log('About data', aboutdata)
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}></div>
      <div className={styles.history}>
        <h2>Evolution of web</h2>

        <p className={styles.paragraph}>
          Web is the largest transformable-information construct that its idea
          was introduced by Tim Burners-Lee in 1989 at first [1, 9]. Much
          progress has been made about the web and related technologies in the
          past two decades. Web 1.0 as a web of cognition, web 2.0 as a web of
          communication, web 3.0 as a web of co-operation and web 4.0 as a web
          of integration are introduced such as four generation of the web since
          the advent of the web.
        </p>
        <div className={styles.timeline}>
          <div className={styles.card}>
            <div className={styles.card_paragraph}>
              <b>Web 1.0</b>
              <br />  <br />
              is the first generation of the web which according to Berners-Lee,
              could be considered the read-only web and also as a system of
              cognition. Web 1.0 began as an information place for businesses to
              broadcast their information to people. The early web provided a
              limited user interactions or content contributions and only
              allowed to search the information and read it.
            </div>
            <div className={styles.card_image}>
              <img
                width="100%"
                src="https://i.ibb.co/qxYPF0H/Screenshot-from-2022-05-10-00-26-14.png"
              />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_paragraph}>
              <b>Web 2.0</b>
              <br />     <br /> was defined by Dale Dougherty in 2004 ate web was defined by Dale Dougherty in 2004 as a read-write web
              [7]. The technologies of web 2.0 allow assembling and managing
              large global crowds with common interests in social interactions.
              The differences between web 1.0 and web 2.0 are numerous that are
              described in the reminder of the paper.
            </div>
            <div className={styles.card_image}>
              {" "}
              <img
                width="100%"
                src="https://i.ibb.co/fFYVqbp/Screenshot-from-2022-05-10-00-26-35.png"
              />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_paragraph}>
              <b>Web 3.0</b>
              <br />  <br />
              or semantic web desires to decrease human’s tasks and decisions
              and leave them to machines by providing machine-readable contents
              on the web [12]. In General, web 3.0 is included two main
              platforms, semantic technologies and social computing environment.
              The semantic technologies represent open standards that can be
              applied on the top of the web.
            </div>
            <div className={styles.card_image}>
              <img
                width="100%"
                src="https://i.ibb.co/fVW4LcL/Screenshot-from-2022-05-10-00-26-48.png"
              />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_paragraph}>
              <b>Web 4.0</b>
              <br />  <br />
              will be as a read-write-execution-concurrency web with intelligent
              interactions, but there is still no exact definition of it. Web
              4.0 is also known as symbiotic web in which human mind and
              machines can interact in symbiosis.
            </div>
            <div className={styles.card_image}>
              <img
                width="100%"
                src="https://www.bwa.com.tr/uploads/photos/2/6242c590f0c0c.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
