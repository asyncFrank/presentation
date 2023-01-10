import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 140vh;
  /* background: url("./home-background.svg") no-repeat 700px bottom; */
  background: url("./home-background.svg") no-repeat bottom;
  background-color: ${(props) => props.theme.background};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.primary};
  padding-bottom: 50px;
  text-align: center;

  max-width: 500px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;

export const ButtonBox = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  height: 50px;
  width: 40px;

  font-size: 30px;

  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: none;
  border-radius: 30px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  position: relative;
  padding-left: 50px;
  margin: 0 0 1rem 1rem;
  &:hover {
    filter: opacity(0.9);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 30px 0 0 100px;
  height: 100vh;
  /* align-items: center;
  justify-content: center; */
  p {
    margin: 0.5rem 0 0.5rem 5rem;
    font-size: 1.5rem;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 50%;
`;
