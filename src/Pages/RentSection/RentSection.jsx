/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardImage from "../../assets/download.jpeg";
// import { useState } from "react";
// import styles from "./RentSection.module.css";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ShowAll from "../../components/ShowAll/ShowAll";
// import Btn from "../../components/Button/btn";
import styles from "../pages.module.css";

function RentSection() {
  const [rents, setRents] = useState([]);
  const showRent = rents.map((rent, idx) => (
    <div className={`${styles.cardRent}  `} key={idx}>
      <img src={cardImage} className={styles.RentImage} />
      <div
        className={`${styles.cardOverlay} d-flex flex-column text-white  justify-content-between`}
      >
        <div className={styles.cardOverlayText}>
          <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
            <Button variant="success">
              <FontAwesomeIcon icon={faBath} />
            </Button>
          </div>
        </div>
        <div>kn</div>
      </div>
      <div className="pt-2 px-3 d-flex align-items-center justify-content-between">
        <div>
          <FontAwesomeIcon icon={faBath} />
          <p>2222</p>
        </div>
        <div>
          🛁
          <p>2222</p>
        </div>
        <div>
          🛏
          <p>2222</p>
        </div>
      </div>
      <hr className={styles.hrLine} />
      <div className="d-flex align-items-center justify-content-around">
        <Button
          variant="success"
          size="sm"
          className={styles.btnCard}
          onClick={() => console.log("Success")}
        >
          🚽
        </Button>
        <Button></Button>
      </div>
    </div>
  ));

  return (
    <div className=" p-5">
      <div className="container ">
        <div className="text-center d-flex justify-content-between ">
          <div></div>
          <h3>Category By:</h3>
          <ShowAll size="sm">
            Show all <span>👉🏼</span>{" "}
          </ShowAll>
        </div>
        <div className="container text-center pt-5">
          <div className={styles.cards}>{showRent}</div>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
}

export default RentSection;
