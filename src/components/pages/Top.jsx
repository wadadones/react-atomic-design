import { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const context = useContext(UserContext);

  const onClickAdmin = () => {
    context.setUserInfo({ isAdmin: true })
    history.push("/users")
  }

  const onClickGeneral = () => {
    context.setUserInfo({ isAdmin: false })
    history.push("/users")
  }

  return (
    <SContainer>
      <h2>TOP Page</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br/>
      <br/>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
