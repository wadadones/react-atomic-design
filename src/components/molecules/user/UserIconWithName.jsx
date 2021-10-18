import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { name, image } = props;
  return (
    <SContainer>
      <SImg height={140} width={200} src={image} alt={name} />
      <SName>{name}</SName>
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
