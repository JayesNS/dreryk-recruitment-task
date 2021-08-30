import styled, {css} from 'styled-components';

export const TableCell = styled.div<any>`
  width: ${({width}) => width ?? 'auto'};
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid #0a0a0a;

  ${({sortBy}) => sortBy ? css`
    &::after {
      content: '↓';
      padding-left: 4px;
    }
  `: ''}
`;

export const TableHeaderCell = styled(TableCell)`
  background: #a0a0ff;
  cursor: pointer;
`;
