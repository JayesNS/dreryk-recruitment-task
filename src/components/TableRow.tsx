import styled from 'styled-components';

export const TableRow = styled.div<any>`
  width: max-content;
  font-family: Roboto, sans-serif;
  color: #0a0a0a;
  background: #f6f6ff;

  & :last-child {
    position: sticky;
    right: 0;
    border-left-style: double;
    border-left-width: 3px;
  }

  & > * {
    background: inherit;
  }

  &:nth-child(even) {
    filter: brightness(0.95);
  }
`;

export const TableHeader = styled(TableRow)`
  text-align: center;
  font-family: Lato, sans-serif;
  font-weight: 700;
  background: #a0a0ff;
`;
