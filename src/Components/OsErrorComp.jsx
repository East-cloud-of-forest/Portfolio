import "../Css/OsError.scss";

const OsErrorComp = ({SetRightOs}) => {
  return (
    <div className="OsError">
      현재 사용하시는 OS에서는 <br></br>
      정상적으로 작동하지 않을 수 있습니다.
      <br></br>
      <button onClick={()=>{SetRightOs(true)}}>확인</button>
    </div>
  );
};

export default OsErrorComp;
