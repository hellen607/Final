import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const footerHeigh = {
  marginTop: "-15px",
  height: "200px",
};

const listStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  width: "50%",
  margin: "auto",
  paddingTop: "10%",
};
const iconStyle = {
  display: "flex",
  //   gap: "50px",
  alignItems: "center",
  justifyContent: "space-around",
  width: "50%",
  margin: "auto",
  paddingTop: "5%",
  paddingBottom: "5%",

  paddingLeft: "3%",
};

function Footer() {
  return (
    <div className="bg-light">
      <div className="container">
        <div style={footerHeigh}>
          <ul style={listStyle}>
            <li className={styles.liStyle}>Home</li>
            <li>Rent</li>
            <li>Sale</li>
            <li>Blogs</li>
          </ul>
          <div style={iconStyle}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="text-center pb-4">
            <p>&copy;asdasdasdasdasdas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
