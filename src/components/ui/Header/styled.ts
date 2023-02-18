import styled from "styled-components";

export const Wrapper = styled.header`
display: flex;
justify-content: center;
gap: 120px;
align-items: center;
height: 60px;
background-color: #f5f5f5;
`

export const Button = styled.button`
  border: none;
  color: #2D3236;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;

    &:hover {
        color: #000;
        cursor: pointer;
        transition: color 0.3s;
    }
 `