import styled from "styled-components";

export const SelectWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Wrapper = styled.section`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px`

export const Text = styled.span`
    margin: 0 auto;
    font-size: 15px;
    font-weight: 600;
    color: #2D3236;`

export const SwitchButton = styled.button`
    border: none;
    width: 50px;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }`