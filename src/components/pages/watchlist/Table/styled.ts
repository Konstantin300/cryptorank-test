import styled from 'styled-components'

export const Cell = styled.td`
  padding: 0.8rem;
  `

export const Row = styled.tr`
    text-align: left;
    &:nth-child(even) {
        background-color: #f2f2f2;
        }
        &:nth-child(odd) {
            background-color: #fff;
            }`

export const StyledTable = styled.table`
  margin-top: 10px;
  border-collapse: collapse;
  width: 100%;`

export const TableHeader = styled.th`
    padding: 1rem;
  `