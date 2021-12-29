import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 0 0 5px 0;
  color: #222;
  font-weight: 700;
  font-size: 20px;
`;

const StyledInput = styled.input`
  background-color: #fff;
  outline: 0;
  font-size: 20px;
  padding: 10px 15px;
  border: 1px solid rgb(34, 34, 34, 0.15);
  color: #222;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Input = ({ label, ...rest }) => {
  return (
    <>
      <Div>
        <Label>{label}</Label>
        <StyledInput {...rest} />
      </Div>
    </>
  );
};
export { Input };
