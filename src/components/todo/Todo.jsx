import "./style.css";
import React from "react";

function User({ user, onRemove, onToggle }) {
  return (
    <>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        {user.active ? (
          <div className="trueContainer">
            <ul className="trueUl">
              <div style={{ display: "flex" }}>
                <span>제목:</span>
                <li className="trueLi">{user.title}</li>
              </div>
              <div style={{ display: "flex" }}>
                <span>내용:</span>
                <li className="trueLi">{user.info}</li>
              </div>
            </ul>
            <div className="trueBtnContainer">
              <button className="trueBtn" onClick={() => onRemove(user.id)}>
                삭제하기
              </button>
              <button className="trueBtn" onClick={() => onToggle(user)}>
                <span>진행중</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="falseContainer">
            <ul className="falseUl">
              <div style={{ display: "flex" }}>
                <span>제목:</span>
                <li>{user.title}</li>
              </div>
              <div style={{ display: "flex" }}>
                <span>내용:</span>
                <li>{user.info}</li>
              </div>
            </ul>
            <div className="falseBtnContainer">
              <button className="falseBtn" onClick={() => onRemove(user.id)}>
                삭제하기
              </button>
              <button className="falseBtn" onClick={() => onToggle(user)}>
                <span>완료</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const ToDo = ({ list, onRemove, onToggle }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {list.map((item) => (
          <User
            user={item}
            key={item.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </div>
    </>
  );
};

export default ToDo;
