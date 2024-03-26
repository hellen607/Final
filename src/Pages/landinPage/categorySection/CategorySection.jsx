import { Link } from "react-router-dom";
import cardImage from "../../../assets/download.jpeg";
// import { useState } from "react";
import "../landingPage.css";
// import styles from "./CategorySection.module.css";
import styles from "../../pages.module.css";
const CategorySection = () => {
  // const [cards, setCards] = useState([]);
  // console.log(cards);
  // const CardItems = cards.map((card) => (
  //   <div className="col-xs-12 col-sm-6 col-md-3" key={card}>
  //     Column
  //   </div>
  // ));

  return (
    <div className="bg-light pt-5">
      <div className="container ">
        <div className="text-center">
          <h3>Category By:</h3>
        </div>
        <div className="container text-center pt-5">
          <div className="row g-3 d-flex align-items-center justify-content-center">
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img src={cardImage} className={styles.categoryImage} />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>asdasd</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img src={cardImage} className={styles.categoryImage} />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>asdasd</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img src={cardImage} className={styles.categoryImage} />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>asdasd</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img src={cardImage} className={styles.categoryImage} />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>asdasd</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default CategorySection;
