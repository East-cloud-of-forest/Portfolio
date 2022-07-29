import classNames from "classnames";
import "../Css/ButtonComp.scss";

const ButtonComp = ({ children, className, onClick, light }) => {
  return (
    <div className={classNames("button_comp", className, light && "light")} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonComp;
