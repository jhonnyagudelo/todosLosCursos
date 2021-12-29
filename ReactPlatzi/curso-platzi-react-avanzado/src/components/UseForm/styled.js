import styled from "styled-components";

const Form = styled.form`
  padding: 16px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px 4px;
  display: block;
  width: calc(100% - 20px);
  margin: 5px 0;
`;

const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  padding: 1em;
`;

const Title = styled.h2`
  font-size: 16px;
  padding: 8px 0;
`;

export { Form, Input, Button, Title };
