import { Button } from "react-bootstrap";
import cardImage from "../../assets/download.jpeg";
import NavBar from "../../components/navbar/NavBar";
import styles from "../pages.module.css";
import Footer from "../../components/Footer/Footer";

function Details() {
  return (
    <div className="w-100">
      <NavBar />
      <div className={styles.detailHero}>
        <img src={cardImage} className={styles.Image} />
        <div
          className={`${styles.textDetail} d-flex text-white  justify-content-between  `}
        >
          <div className="d-flex align-items-center justify-content-between  gap-4  ">
            <Button>jj</Button>
            <div>iijdhhfh</div>
          </div>
          <div>sdhnadhjjnfasgg</div>
        </div>
      </div>
      <div className="align-items-center d-flex justify-content-center pt-2  ">
        Details
      </div>
      <hr className={styles.line} />
      <div className=" bg-light ">
        <div className="container">
          <div>
            <img src={cardImage} className={styles.picture} />
            <div
              className={`${styles.B} d-flex  align-items-center justify-content-center  pt-2`}
            >
              <div className={styles.button}>
                <div>djjf</div>
                <div> ❤️</div>
              </div>
              <button className={styles.button}>
                <div>djjf</div>
                <div>📞</div>
              </button>
              <div className={styles.button}>
                <div>djjf</div>
                <div> 📞</div>
              </div>
            </div>
          </div>
          <div className=" row  pt-4 d-flex  g-3">
            <div className="col-xs-12  col-s-12 col-md-6 col-lg-6 col-xl-6 d-inline-grid h-50 gap-2  ">
              <div className={styles.b1}>
                fyhfghsnflhdjgadhkjggggggjjjjvkjhgkyugkuygkyufgl{" "}
              </div>

              <div className={`${styles.b1}`}>
                <img src={cardImage} />
                <img src={cardImage} />
                <img src={cardImage} />
              </div>
              <div className={styles.b1}>chdisd</div>
            </div>
            <div className="col-xs-12 col-s-12  col-md-6 col-lg-6 col-xl-6  d-inline-grid gap-2">
              <div className={styles.b}>asdsd</div>
              <div className={styles.b}>chdisd</div>
              <div className={styles.b}>chdisd</div>
              <div className={styles.b}>chdisd</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
