import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; //um elemento fica abaixo do outro
  padding-bottom: 30px;
`;

export const InputStyled = styled.input`
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  height: 28px;
  font-size: 24px;
  padding:10px;
`;
