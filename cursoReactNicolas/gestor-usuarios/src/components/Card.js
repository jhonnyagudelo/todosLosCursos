import styled from "styled-components";

const Div = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const Card = ({ children }) => {
  return (
    <>
      <Div>{children}</Div>
    </>
  );
};
export { Card };
