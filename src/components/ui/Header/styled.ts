import styled from "styled-components";

export const Wrapper = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
padding: 0 20px;
height: 60px;
background-color: #f5f5f5;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  transition: opacity 0.3s;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s;
    }
 `