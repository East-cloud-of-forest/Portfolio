import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import ButtonComp from "../Components/ButtonComp";
import "../Css/Contact.scss";

const Contact = ({ light }) => {
  return (
    <div className="router">
      <div className="contact">
        <h1>Thank You</h1>
        <h2>Contect</h2>
        <hr />
        <ul>
          <li>
            <ButtonComp
              light={light}
              onClick={() =>
                window.open(`https://github.com/East-cloud-of-forest`, "_blank")
              }
            >
              <FontAwesomeIcon icon={brands("github")} />
            </ButtonComp>
            <span>github</span>
          </li>
          <li>
            <ButtonComp
              light={light}
              onClick={() => window.open(`https://velog.io/@ecof_`, "_blank")}
            >
              <FontAwesomeIcon icon={solid("v")} />
            </ButtonComp>
            <span>velog</span>
          </li>
          <li>
            <ButtonComp
              light={light}
              onClick={() =>
                (window.location.href = "mailto:ecof1911@gmail.com")
              }
            >
              <FontAwesomeIcon icon={solid("envelope")} />
            </ButtonComp>
            <span>mail</span>
          </li>
          <li>
            <ButtonComp
              light={light}
              onClick={() =>
                window.open(`https://open.kakao.com/o/s7suL7od`, "_blank")
              }
            >
              <FontAwesomeIcon icon={solid("comment")} />
            </ButtonComp>
            <span>kakao</span>
          </li>
        </ul>
        <p className={classNames("copyright")}>
          &copy; Lim Dong Un. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
