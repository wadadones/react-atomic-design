// import { useContext } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hone${val}`,
    image: "https://source.unsplash.com/sWJiqcKdW8U",
    email: "xxxsss@xxxx.com",
    phone: 1231231231,
    company: {
      name: "xx.inc"
    },
    website: "httpds"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  }
  return (
    <SContainer>
      <h2>Users Page</h2>
      <SearchInput />
      <br/>
      <SecondaryButton onClick={onClickSwitch} >切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
