import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../Css/Ui.scss";
import classNames from "classnames";
import ButtonComp from "./ButtonComp";

const MainUiComp = ({ light, setLight, RouteFunc }) => {
  return (
    <div className="router Ui">
      <header>
        <ButtonComp className="go_to_main" onClick={(e)=>{RouteFunc(e, 'main')}}>
          <ul>
            <li>
              <FontAwesomeIcon icon={solid("arrow-left")} />
            </li>
            <li>
              <p>MAIN</p>
            </li>
          </ul>
        </ButtonComp>

        <ButtonComp
          className={classNames("light_change", light && "light")}
          onClick={() => {
            setLight(!light);
          }}
        >
          {light ? (
            <FontAwesomeIcon icon={solid("lightbulb")} />
          ) : (
            <FontAwesomeIcon icon={regular("lightbulb")} />
          )}
        </ButtonComp>
      </header>
    </div>
  );
};

export default MainUiComp;
