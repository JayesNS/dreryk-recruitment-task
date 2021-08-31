import styled from 'styled-components';
import { animated } from 'react-spring';

export const TableRow = styled<any>(animated.div)`
  width: max-content;
  font-family: ${({ theme }) => theme.font}, sans-serif;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.backgroundColor};
  position: absolute;

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
  position: initial;
  bottom: initial;
`;
