import styled from 'styled-components';

export const TableRow = styled.div<any>`
  width: max-content;
  font-family: Roboto, sans-serif;
  color: #0a0a0a;
  background: #f6f6ff;

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
