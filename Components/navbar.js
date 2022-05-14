import styles from "../styles/navbar.module.css";
  

export const Navbar = ({ aboutdata }) => {
  function toggle_nav(e) {

    var nav_menu = document.getElementById("menu");
      if (nav_menu.style.left <= "-120px") {
        nav_menu.style.left = "-30px";
      } else{
        nav_menu.style.left = "-120px";
      }
      
  };

  return (
    <section id="navbar" className={styles.navbar}>
      <ul id="menu" className={styles.menu}>
        <li className={styles.menu_list}>
          <span className={`${styles.front} ${styles.fas} `}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/6517/6517327.png"
              height="30px"
            />
          </span>
          <a href="/" className={styles.side}>
            home
          </a>
        </li>
        <li className={styles.menu_list}>
          <span className={`${styles.front} ${styles.fas} `}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1349/1349733.png"
              height="30px"
            />
          </span>
          <a href="blockchain" className={styles.side}>blockchain
          </a>
        </li>
        <li className={styles.menu_list}>
          <span className={`${styles.front} ${styles.fas} `}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4843/4843056.png"
              height="30px"
            />
          </span>
          <a href="crypto" className={styles.side}>
            crypto
          </a>
        </li>
        <li className={styles.menu_list}>
          <span className={`${styles.front} ${styles.fas} `}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/6564/6564778.png"
              height="30px"
            />
          </span>
          <a href="nft" className={styles.side}>
            NFT
          </a>
        </li>
        <li className={styles.menu_list}>
          <span className={`${styles.front} ${styles.fas} `}>
            <img
              src="https://techcrunch.com/wp-content/uploads/2021/11/decentralized.jpg?w=1390&crop=1"
              height="30px"
            />
          </span>
          <a href="dao" className={styles.side}>
            DAO
          </a>
        </li>
        <li className={styles.menu_list}>
          <span className={`${styles.front} ${styles.fas} `}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1874/1874960.png"
              height="30px"
            />
          </span>
          <a href="metaverse" className={styles.side}>
            metaverse
          </a>
        </li>
        <li className={styles.menu_list}>
          <span className={`${styles.front} ${styles.fas} `}>
            <img src="https://i.ibb.co/GT6YF0R/image.png" height="30px" />
          </span>
          <a href="blogs" className={styles.side}>
            blogs
          </a>
        </li>
       
      </ul>

      <button id="toggle" className={styles.toggle} onClick={toggle_nav}>
        menu
      </button>
    </section>
  );
};

export default Navbar;
