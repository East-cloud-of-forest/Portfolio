import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import ButtonComp from "../Components/ButtonComp";
import "../Css/Project.scss";
import { useState } from "react";
import classNames from "classnames";
import project from "../data/project";

const Project = ({ light }) => {
  const [curentPage, setCurentPage] = useState(0);
  const chnagePage = (arrow) => {
    let pageNum = curentPage;
    switch (arrow) {
      case "right":
        !(pageNum === project.length - 1) && pageNum++;
        break;
      case "left":
        !(pageNum === 0) && pageNum--;
        break;
      default:
        return;
    }
    setCurentPage(pageNum);
  };

  return (
    <div className="project_page">
      <div
        className="page_scroll"
        style={{
          width: project.length * 100 + "%",
          left: "-" + curentPage * 100 + "%",
        }}
      >
        {project.map(
          ({ img, name, engname, subname, info, day, dev, git, url }, i) => (
            <div key={i} className="project_box">
              <div className="project">
                <div className="img_block">
                  <img src={img} alt="" />
                  <span>{"0" + (i + 1)}</span>
                </div>
                <div className="info_block">
                  <div className="info_text">
                    <div>
                      <h1>{name}</h1>
                      <h2>{engname}</h2>
                      <p>{subname}</p>
                    </div>
                    <p>{info}</p>
                    <ul>
                      <li>{day}</li>
                      <li>{dev}</li>
                    </ul>
                  </div>
                  <div className={classNames("icon", light ? "light" : null)}>
                    {!(git === "") && (
                      <ButtonComp
                        light={light}
                        onClick={() => {
                          window.open(`${git}`, "_blank");
                        }}
                      >
                        <FontAwesomeIcon icon={brands("github")} />
                        Github
                      </ButtonComp>
                    )}
                    <ButtonComp
                      light={light}
                      onClick={() => {
                        window.open(`${url}`, "_blank");
                      }}
                    >
                      <FontAwesomeIcon icon={solid("arrow-right-to-bracket")} />
                      Go to Site
                    </ButtonComp>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* 캐러셀 화살표 및 도트들 */}
      <ButtonComp
        light={light}
        className={classNames("arrow", curentPage === 0 ? "hide" : null)}
        onClick={() => {
          chnagePage("left");
        }}
      >
        <FontAwesomeIcon icon={solid("chevron-left")} />
      </ButtonComp>
      <ButtonComp
        light={light}
        className={classNames(
          "arrow",
          curentPage === project.length - 1 ? "hide" : null
        )}
        onClick={() => {
          chnagePage("right");
        }}
      >
        <FontAwesomeIcon icon={solid("chevron-right")} />
      </ButtonComp>

      <div className="dots">
        {project.map((a, i) => (
          <ButtonComp
            light={light}
            className={classNames("dot", i === curentPage ? "active" : null)}
            key={i}
            onClick={() => {
              setCurentPage(i);
            }}
          >
            <FontAwesomeIcon icon={solid("circle")} />
          </ButtonComp>
        ))}
      </div>
    </div>
  );
};

export default Project;
