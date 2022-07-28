import styled from "styled-components";
import Form from "./Form";

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 12px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 100px 100px 100px;
`;

const BodyTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  h1 {
    font-size: 10em;
    font-weight: bold;
  }
`;

function Main() {
  return (
    <>
      <BodyContainer>
        <BodyTitle>
          <h1>ToDoList</h1>
        </BodyTitle>
        <Form />
      </BodyContainer>
    </>
  );
}

export default Main;
