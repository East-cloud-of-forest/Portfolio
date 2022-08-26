import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "../Css/Main.scss";

const Main = ({ firstMainAnimation, light, setRouterNum }) => {
  return (
    <div
      className={classNames(
        "router main_page",
        firstMainAnimation && "firstAnimation"
      )}
    >
      <h1>환영합니다.</h1>
      <h1>프론트엔드 개발자,</h1>
      <h1><span>임동운</span>의 포트폴리오 사이트 입니다.</h1>
      <div className={classNames("main_background", light && 'light')}>
        <h2>frontend</h2>
        <h2>portfolio</h2>
      </div>
      <div className="down_animation" />
      <div className="down_animation_media" onClick={()=>{setRouterNum(1)}}>
        <FontAwesomeIcon icon={solid('angle-down')} />
        <FontAwesomeIcon icon={solid('angle-down')} />
        <FontAwesomeIcon icon={solid('angle-down')} />
      </div>
    </div>
  );
};

export default Main;
