import React from "react";
import styles from "./Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faRebel,
  faSalesforce,
} from "@fortawesome/free-brands-svg-icons";
import { faBan, faHome } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import NavBar from "../../components/navbar/NavBar";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate(1);
  return (
    <>
      <NavBar />
      <div className={styles.dashboard}>
        <div className="container bg-light">
          <div className="d-flex align-items-center justify-content-center"></div>
          <div className={styles.addRent}>
            <button
              className={styles.cardStyle}
              onClick={() => navigate("/dashboard/for-rent")}
            >
              For Rent <FontAwesomeIcon icon={faHome} />
            </button>
            <button
              className={styles.cardStyle}
              onClick={() => navigate("/dashboard/for-sale")}
            >
              For Sale <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
