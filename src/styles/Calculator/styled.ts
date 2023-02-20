import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  gap: 20px;
  align-items: center;
  `;

export const MainContainer = styled.section`
  height: fit-content;
  display: flex;
  height: 50vh;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 12px;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;
  padding-top: 40px;
  `

export const Amount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    border-radius: 5px;
    padding: 10px;
`

export const BoldText = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #2D3236;
`