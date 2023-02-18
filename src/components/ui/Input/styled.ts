import styled from "styled-components";

export const StyledInput = styled.input`
    max-width: 200px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;

    &:focus {
        border: 1px solid #0087ED;

        &:hover {
            cursor: pointer;
            border: 2px solid #0087ED;
        }
    }

    &:focus-visible {
        outline: none;
    }
`