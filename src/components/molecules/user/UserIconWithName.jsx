import styled from "styled-components";
// import { useContext } from "react";
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";
import { useRecoilValue } from "recoil";

export const UserIconWithName = (props) => {
  const { name, image } = props;
  // const context = useContext(UserContext);
  const userInfo = useRecoilValue(userState);

  const isAdmin = userInfo ? userInfo.isAdmin : false
  return (
    <SContainer>
      <SImg height={140} width={200} src={image} alt={name} />
      <SName>{name}</SName>
      { isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`
