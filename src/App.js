import classNames from "classnames";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import "./Routers/RouterAnimation.scss";
import UiComp from "./Components/UiComp";
import Contact from "./Routers/Contact";
import Main from "./Routers/Main";
import Profile from "./Routers/Profile";
import Project from "./Routers/Project";
import browserDetect from "browser-detect";
import OsErrorComp from "./Components/OsErrorComp";

function App() {
  const location = useLocation();
  const nav = useNavigate();
  const [light, setLight] = useState(false);
  const [routerNum, setRouterNum] = useState(0);
  const [routeActive, setrouteActive] = useState(true);
  const [routeDirection, setRouteDirection] = useState("Down");
  const [firstMainAnimation, setFirstMainAnimation] = useState(true);
  const [rightOs , SetRightOs] = useState(true)

  useEffect(()=>{
    SetRightOs(browserDetect().os.slice(0,3) === 'Mac')
  }, [])

  // 휠 함수
  const RouteFunc = (e, target) => {
    // 라우팅 가능 & 메인일 경우 위로 올리는게 아닐때 작동
    if (routeActive && !(e.wheelDelta > 0 && routerNum === 0)) {
      // 첫 렌더링 때문 메인 애니메이션 작동
      setFirstMainAnimation(false);
      let num = 0;
      // 휠로 변경할 경우
      if (e.type === "wheel") {
        // 휠 방향 설정
        e.wheelDelta > 0 ? setRouteDirection("Up") : setRouteDirection("Down");
        // 휠로 라우트 변경
        num = routerNum + e.wheelDelta / -120;
        if (num < 1) {
          num = 1;
        } else if (num > 3) {
          num = 3;
        }
        // 클릭해서 변경할 경우
      } else if (e.type === "click") {
        if (target === "main") {
          // 메인 클릭시 애니메이션
          setRouteDirection("Click");
          num = 0;
        } else {
          // 네비게이션 클릭시 애니메이션
          target - routerNum < 0
            ? setRouteDirection("Up")
            : setRouteDirection("Down");
          num = target;
        }
      }

      setRouterNum(num);

      // 연속 변경 방지
      setrouteActive(false);
      setTimeout(() => {
        setrouteActive(true);
      }, 400);
    }
  };

  useEffect(() => {
    // 이벤트 추가 및 제거
    window.addEventListener("wheel", RouteFunc);
    return () => {
      window.removeEventListener("wheel", RouteFunc);
    };
  }, [routeActive]);

  useEffect(() => {
    // 라우터 맵핑
    routerNum === 0 && nav("/", { replace: true });
    routerNum === 1 && nav("/profile", { replace: true });
    routerNum === 2 && nav("/project", { replace: true });
    routerNum === 3 && nav("/contact", { replace: true });
  }, [routerNum]);

  return (
    <div className={classNames("App", light && "light", routerNum === 0 && 'main')}>
      {rightOs && <OsErrorComp SetRightOs={SetRightOs} />}
      <UiComp
        light={light}
        setLight={setLight}
        RouteFunc={RouteFunc}
        hide={routerNum === 0 ? true : false}
      />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.pathname}
          classNames={routeDirection}
          timeout={500}
        >
          <Routes location={location}>
            <Route
              index
              path="/"
              element={
                <Main
                  light={light}
                  firstMainAnimation={firstMainAnimation}
                  setRouterNum={setRouterNum}
                />
              }
            />
            <Route path="/profile" element={<Profile light={light} />} />
            <Route path="/project" element={<Project light={light} />} />
            <Route path="/contact" element={<Contact light={light} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
