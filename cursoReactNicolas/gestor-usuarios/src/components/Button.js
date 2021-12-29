import styled from "styled-components";

const StyledButton = styled.button`
  transition: all 0.5s ease;
  background-color: #2185d0;
  border-radius: 4px;
  color: #fff;
  border: 1px solid #2185d0;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #1678c2;
  }
`;

const Button = ({ children }) => {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};
export { Button };
