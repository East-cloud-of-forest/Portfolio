import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../Css/Ui.scss";
import classNames from "classnames";
import ButtonComp from "./ButtonComp";
import { useLocation } from "react-router-dom";

const UiComp = ({ light, setLight, RouteFunc, hide }) => {
  const location = useLocation().pathname.slice(1);

  return (
    <>
      <ButtonComp
        light={light}
        className={classNames("go_to_main", hide && "hide")}
        onClick={(e) => {
          RouteFunc(e, "main");
        }}
      >
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
        className="light_change"
        onClick={() => {
          setLight(!light);
        }}
        light={light}
      >
        {light ? (
          <FontAwesomeIcon icon={solid("lightbulb")} />
        ) : (
          <FontAwesomeIcon icon={regular("lightbulb")} />
        )}
      </ButtonComp>

      <div className={classNames("Nav", hide && "hide")}>
        <ul>
          {["profile", "project", "contect"].map((a, i) => (
            <li key={i}>
              <span
                onClick={(e) => {
                  RouteFunc(e, i + 1);
                }}
                className={location === a ? "active" : null}
              >
                {a}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UiComp;
