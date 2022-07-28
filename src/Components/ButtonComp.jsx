import classNames from "classnames";
import "../Css/ButtonComp.scss";

const ButtonComp = ({ children, className, onClick }) => {
  return (
    <div className={classNames("button_comp", className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonComp;
