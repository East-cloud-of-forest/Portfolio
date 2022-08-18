import classNames from "classnames";
import { useState } from "react";
import ButtonComp from "../Components/ButtonComp";
import "../Css/Profile.scss";
import skill from "../data/skill.js";

const Profile = ({ light }) => {
  const [tab, Settab] = useState(0);
  const [flip, setFlip] = useState(false);
  const [namefont, setNamefont] = useState("한글");
  const [licence, setLicence] = useState(false);

  const tabs = ["About", "Info", "Skill"];

  return (
    <div className="router">
      <div className="profile">
        <div>
          <div className={classNames("profile_area", light ? "light" : null)}>
            <div className={classNames("profile_img", flip ? "flip" : null)}>
              <div className="img">
                <img src={require("../imgs/증명사진.jpg")} alt="" />
              </div>
              <div className="img">
                <img src={require("../imgs/멀리2.jpg")} alt="" />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setFlip(!flip);
            }}
            className={classNames("profile_flip", light ? "light" : null)}
          >
            {flip ? "그래서 좀 뒤로 감" : "사진이 조금 부담스러움"}
          </div>
        </div>
        <div className="text_area">
          <ul className="tab">
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
                    <span>{a.slice(1)}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
          {tabs.map((a, i) => (
            <div
              key={i}
              className={classNames("tab_body", i === tab ? "active" : null, a)}
              onWheel={
                (a === "Info") | (a === "Skill")
                  ? (e) => {
                      e.stopPropagation();
                    }
                  : null
              }
            >
              {a === "About" && (
                <>
                  <h1>안녕하세요.</h1>
                  <h1>프론트엔드 개발자를 꿈꾸는</h1>
                  <h1>임동운 입니다.</h1>
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
                  <div>
                    <span>이름</span>
                    <span>
                      {
                        {
                          한글: "임동운",
                          한자: "林東雲",
                          영어: "Lim Dong Un",
                        }[namefont]
                      }
                    </span>
                    <div>
                      <ButtonComp
                        light={light}
                        onClick={() => {
                          setNamefont("한글");
                        }}
                      >
                        가
                      </ButtonComp>
                      <ButtonComp
                        light={light}
                        onClick={() => {
                          setNamefont("한자");
                        }}
                      >
                        漢
                      </ButtonComp>
                      <ButtonComp
                        light={light}
                        onClick={() => {
                          setNamefont("영어");
                        }}
                      >
                        A
                      </ButtonComp>
                    </div>
                  </div>
                  <div>
                    <span>생년월일</span>
                    <span>1993.06.10</span>
                  </div>
                  <div>
                    <span>지역</span>
                    <span>부산 북구</span>
                  </div>
                  <div>
                    <span>이메일</span>
                    <span>ecof1911@gmail.com</span>
                  </div>
                  <div>
                    <span>경력</span>
                    <span>신입</span>
                  </div>
                  <div>
                    <span>학력</span>
                    <table>
                      <tbody>
                        <tr>
                          <td>2012.02 ~ 2019.02</td>
                          <td>동서대학교</td>
                          <td>보건행정학과</td>
                        </tr>
                        <tr>
                          <td>2009.02 ~ 2012.02</td>
                          <td>대연정보고등학교</td>
                          <td>모바일콘텐츠학과</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <span>직업훈련</span>
                    <table>
                      <tbody>
                        <tr>
                          <td>2022.01 ~ 2022.07</td>
                          <td>
                            [디지털컨버전스] 프로그레시브 웹앱 프론트엔드 개발
                            실무자 양성과정 A-1
                          </td>
                          <td>정보입력부서</td>
                        </tr>
                        <tr>
                          <td>2021.04 ~ 2021.08</td>
                          <td>UIUX웹디자인(웹디자인기능사)A</td>
                          <td>부산나래디자인학원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <span>사회경험</span>
                    <table>
                      <tbody>
                        <tr>
                          <td>2019.10 ~ 2021.03</td>
                          <td>다스카손해사정사</td>
                          <td>정보입력부서</td>
                        </tr>
                        <tr>
                          <td>2019.05 ~ 2019.08</td>
                          <td>메디코리아</td>
                          <td>병원 마케팅 컨설트</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <span>자격증</span>
                    <table className={licence ? "active" : null}>
                      <tbody>
                        <tr>
                          <td>2022.01</td>
                          <td>웹디자인 기능사</td>
                          <td>한국산업인력공단</td>
                        </tr>
                        <tr>
                          <td>2018.12</td>
                          <td>전산회계1급</td>
                          <td>한국세무사협회</td>
                        </tr>
                        <tr>
                          <td>2018.12</td>
                          <td>병원행정사</td>
                          <td>대한병원행정관리자협회</td>
                        </tr>
                        <tr>
                          <td>2018.12</td>
                          <td>건강보험사</td>
                          <td>대한병원행정관리자협회</td>
                        </tr>
                        <tr>
                          <td>2017.11</td>
                          <td>위생사</td>
                          <td>한국보건의료인국가시험원</td>
                        </tr>
                        <tr>
                          <td>2017.06</td>
                          <td>EFR - CPR/First Aid/Care for Children w/ AED</td>
                          <td>한국응급처치교육원</td>
                        </tr>
                        <tr>
                          <td>2016.06</td>
                          <td>보험심사평가사2급</td>
                          <td>한국보험심사평가사인증원</td>
                        </tr>
                        <tr>
                          <td>2013.03</td>
                          <td>자동차운전면허증 1종 보통</td>
                          <td>경찰청(운전면허시험관리단)</td>
                        </tr>
                      </tbody>
                    </table>
                    {!licence && (
                      <ButtonComp
                        light={light}
                        onClick={() => {
                          setLicence(true);
                        }}
                      >
                        <span>+</span>
                      </ButtonComp>
                    )}
                  </div>
                </>
              )}
              {a === "Skill" && (
                <>
                  {skill.map(({ level, name, img, kind, text }, i) => (
                    <div key={i}>
                      <ButtonComp className="skill_item" light={light}>
                        <div className="skill_box">
                          <div className="skill_icon">
                            <div className="skill_level"><span>10</span>/{level}</div>
                            <img src={img} alt="" />
                          </div>
                          <span
                            dangerouslySetInnerHTML={{ __html: name }}
                          ></span>
                        </div>
                        <div className="skill_info">
                          <div>
                            <span>{kind}</span>
                          </div>
                          <p>{text}</p>
                        </div>
                      </ButtonComp>
                      <hr />
                    </div>
                  ))}
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
