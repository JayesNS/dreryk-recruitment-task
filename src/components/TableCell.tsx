import styled, {css} from 'styled-components';

export const TableCell = styled.div<any>`
  width: ${({width}) => width ?? 'auto'};
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid ${({theme}) => theme.textColor};

  ${({sortBy}) => sortBy ? css`
    &::after {
      content: '↓';
      padding-left: 4px;
    }
  `: ''}

  ${({isSticky}) => isSticky ? css`
    position: sticky;
    right: 0;
    border-left-style: double;
    border-left-width: 3px;
  ` : ''}
`;

export const TableHeaderCell = styled(TableCell)`
  background: ${({theme}) => theme.primary};
  cursor: pointer;
`;
