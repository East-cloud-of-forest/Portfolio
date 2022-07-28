import classNames from "classnames";
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import "./Routers/RouterAnimation.scss";
import MainUiComp from "./Components/UiComp";
import Contect from "./Routers/Contect";
import Main from "./Routers/Main";
import Nav from "./Routers/Nav";
import Profile from "./Routers/Profile";
import Project from "./Routers/Project";

function App() {
  const [light, setLight] = useState(false);
  const location = useLocation();
  const nav = useNavigate();
  const [routerNum, setRouterNum] = useState(0);
  const [routeActive, setrouteActive] = useState(true);
  const [routeDirection, setRouteDirection] = useState("Down");

  // 휠 함수
  const RouteFunc = (e, target) => {
    // 라우팅 가능 & 메인일 경우 위로 올리는게 아닐때 작동
    if (routeActive && !(e.wheelDelta > 0 && routerNum === 0)) {
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
      } else if (e.type === 'click') {
        setRouteDirection("Click")
        num = target === 'main' ? 0 :4
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
    // 라우터 맵핑
    routerNum === 0 && nav("/");
    routerNum === 1 && nav("/profile");
    routerNum === 2 && nav("/project");
    routerNum === 3 && nav("/contect");
    routerNum === 4 && nav("/navigation");

    // 이벤트 추가 및 제거
    window.addEventListener("wheel", RouteFunc, false);
    return () => {
      window.removeEventListener("wheel", RouteFunc, false);
    };
  }, [routerNum, routeActive]);

  return (
    <div className={classNames("App", light && "light")}>
      <MainUiComp light={light} setLight={setLight} RouteFunc={RouteFunc} />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.pathname}
          classNames={routeDirection}
          timeout={500}
        >
          <Routes location={location}>
            <Route index path="/" element={<Main />} />
            <Route path="/navigation" element={<Nav />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contect" element={<Contect />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
