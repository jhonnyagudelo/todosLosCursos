import styled from "styled-components";

const Div = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = ({ children }) => {
  return (
    <>
      <Div>{children}</Div>
    </>
  );
};
export { Container };
