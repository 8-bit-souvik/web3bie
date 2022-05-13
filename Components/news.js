import styles from "../styles/news.module.css";
import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// export default class NextJsCarousel extends Component {
//   render() {
//     return (
//       <section className={styles.news}>
//         <h2>NextJs Carousel - GeeksforGeeks</h2>
//         <Carousel>
//           <div className={styles.news_card}>
//             <img src="https://images.pexels.com/photos/11419080/pexels-photo-11419080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image1" />
//             <p className="legend">Image 1</p>
//           </div>
//           <div className={styles.news_card}>
//             <img
//               src="https://images.pexels.com/photos/10089714/pexels-photo-10089714.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt="image2"
//             />
//             <p className="legend">Image 2</p>
//           </div>
//           <div className={styles.news_card}>
//             <img
//               src="https://images.pexels.com/photos/10467844/pexels-photo-10467844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt="image3"
//             />
//             <p className="legend">Image 3</p>
//           </div>
//           <div className={styles.news_card}>
//             <img
//               src="https://images.pexels.com/photos/11858794/pexels-photo-11858794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt="image4"
//             />
//             <p className="legend">Image 4</p>
//           </div>
//           <div className={styles.news_card}>
//             <img
//               src="https://images.pexels.com/photos/11682017/pexels-photo-11682017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt="image5"
//             />
//             <p className="legend">Image 5</p>
//           </div>
//         </Carousel>
//       </section>
//     );
//   }
// }

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Carousal = ({ newsData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log(newsData.articles);

  let news = newsData.articles.map(newsTemplate);

  function newsTemplate(data) {
    return(
      <a href={data.url} rel="noreferrer" target="_blank"> <div className={styles.news_card}>
          <img
            src={data.urlToImage}
            alt="image"
          />
          <p className={styles.legend}>{data.description}</p> 
        </div></a>
    )
  }


  return (
    <section className={styles.news}>
      <h1>
        Relevent news
      </h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
      {news}
      </Carousel>
      <br />
    </section>
  );
};

export default Carousal;
