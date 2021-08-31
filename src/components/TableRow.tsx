import styled from 'styled-components';

export const TableRow = styled.div<any>`
  width: max-content;
  font-family: ${({ theme }) => theme.font}, sans-serif;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.backgroundColor};

  & > * {
    background: inherit;
  }

  &:nth-child(even) {
    filter: brightness(0.95);
  }
`;

export const TableHeader = styled(TableRow)`
  text-align: center;
  font-family: ${({ theme }) => theme.headerFont}, sans-serif;
  font-weight: 700;
  background: ${({ theme }) => theme.primary};
`;
