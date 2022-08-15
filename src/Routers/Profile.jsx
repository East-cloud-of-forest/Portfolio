import classNames from "classnames";
import { useState } from "react";
import "../Css/Profile.scss";

const Profile = ({ light }) => {
  const [tab, Settab] = useState(0);
  const tabs = ["About", "Info", "Skill"];

  return (
    <div className="router">
      <div className="profile">
        <div className="profile_area">
          <div className="profile_img">
            <div className="img">
              <img src={require("../imgs/증명사진.jpg")} alt="" />
            </div>
            <div className="img">
              <img src={require("../imgs/멀리2.jpg")} alt="" />
            </div>
          </div>
          <div
            className={classNames("profile_border", light ? "light" : null)}
          ></div>
        </div>
        <div className="text_area">
          <ul className={classNames("tab", light ? "light" : null)}>
            {tabs.map((a, i) => (
              <li
                key={i}
                onClick={() => {
                  Settab(i);
                }}
                className={tab === i ? "active" : null}
              >
                {tab === i ? (
                  a
                ) : (
                  <>
                    <span>{a.slice(0, 1)}</span>
                    {a.slice(1)}
                  </>
                )}
              </li>
            ))}
          </ul>
          {tabs.map((a, i) => (
            <div
              key={i}
              className={classNames("tab_body", i === tab ? "active" : null)}
            >
              {a === "About" && (
                <>
                  <h1>
                    안녕하세요. <br /> 프론트엔드 개발자를 꿈꾸는 <br /> 임동운
                    입니다.
                  </h1>
                  <ul className="about_list">
                    <li>
                      UI / UX 디자인 과정을 수료하고 코딩에 큰 관심이 생겨
                      프론트엔드 개발자의 꿈을 꾸게 되었고, 수료 후 프로그레시브
                      웹 앱 프론트엔드 개발자 과정을 수료했습니다.
                    </li>
                    <li>
                      개발뿐만 아니라 사용자 경험에 대한 고민과 실용적이고
                      사용자에게 편한 디자인 또한 놓치고 싶지 않습니다.
                    </li>
                    <li>
                      개발 트렌드에 민감하게 반응하고 배움을 멈추지 않고 동향에
                      맞춰 계속 성장해 나가고 싶습니다.
                    </li>
                    <li>
                      전공과 다른 길을 가는 만큼 인생에서 두 번째 출발점에 서
                      있다고 생각하는 만큼 더욱 노력하여 성공적인 발돋움이
                      되었으면 합니다.
                    </li>
                  </ul>
                </>
              )}
              {a === "Info" && (
                <>
                  <h1>정보</h1>
                </>
              )}
              {a === "Skill" && (
                <>
                  <h1>스킬</h1>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
