import styled from "styled-components";



export const Container = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
margin:0 auto;
width: 40%;

p{
    margin:1rem auto;
    font-size:1.2rem;
}

`
export const ProcessContent = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
/* margin:1rem 1rem 1rem 36rem; */
margin:1rem 8rem 1rem auto;
width: 50%;

p{
    /* font-weight:bold; */
    font-size: 2rem;
}
`
export const FinalProcessContent = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
/* margin:1rem 1rem 1rem 36rem; */
margin:1rem 8rem 1rem auto;
width: 50%;

p{
    /* font-weight:bold; */
    font-size: 2rem;
}
`

export const CompostagemContent = styled.div`
display:inline-block;
justify-content: center;
align-items:center;
position: relative;
margin:1rem 1rem 1rem 22rem;
width: 50%;

/* p{
    font-weight:bold;
    font-size: 2rem;
} */
figcaption {
  position: absolute;
  top: 180px;
  right: 200px;
  font-size: 2rem;
  color: black;
  /* text-shadow: 0px 0px 5px black; */
}
`