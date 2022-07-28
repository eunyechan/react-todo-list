import "./style.css";
function List({ title, info, onChange, onCreate }) {
  return (
    <>
      <div className="ListContainer">
        <div className="ListWrapper">
          <input
            className="innerInput"
            name="title"
            onChange={onChange}
            value={title || ""}
            placeholder="제목"
            maxLength={"10"}
            minLength="2"
          />

          <input
            className="innerInput"
            name="info"
            onChange={onChange}
            value={info || ""}
            placeholder="내용"
            maxLength={"50"}
            minLength="5"
          />
        </div>
        <div className="btnContainer">
          <button onClick={onCreate} className="submitBtn">
            작성완료
          </button>
        </div>
      </div>
    </>
  );
}

export default List;
