import React, { useCallback } from 'react';
import { useTransition } from 'react-spring';
import styled from 'styled-components';

import { ColumnConfig, TableItem } from '../interfaces';
import { TableCell, TableHeaderCell } from './TableCell';
import { TableHeader, TableRow } from './TableRow';

const TableWrapper = styled.div`
  overflow-x: scroll;
  margin: 8px;
`;

const TableContent = styled.div<any>`
  position: relative;
  height: ${({ height }) => height}px;
`;

export const Table = <T extends Record<string, any>>(props: TableProps<T>): JSX.Element => {
  const {
    data, onHeaderCellClick, sortBy, config, rowHeight = 25
  } = props;

  let tableHeight = 0;
  const transitions = useTransition(
    data.map((item) => ({
      ...item, height: rowHeight, y: (tableHeight += rowHeight) - rowHeight
    })), {
      key: (item: any) => item.id,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  );

  const renderTableHeader = useCallback(() => (
    <TableHeader>
      {config.map(({ name, width, isSticky }) => (
        <TableHeaderCell
          key={name}
          width={`${width}px`}
          onClick={() => onHeaderCellClick(name)}
          sortBy={name === sortBy}
          isSticky={isSticky}
        >
          {name}
        </TableHeaderCell>
      ))}
    </TableHeader>
  ), [transitions, onHeaderCellClick, sortBy, config]);

  const renderTableContent = useCallback(() => transitions((styles, item) => (
    <TableRow style={styles}>
      {config.map(({ name, width, isSticky }) => (<TableCell key={name} width={`${width}px`} isSticky={isSticky}>{item[name]}</TableCell>))}
    </TableRow>
  )), [transitions, data, config]);

  return (
    <TableWrapper>
      {renderTableHeader()}
      <TableContent height={tableHeight}>
        {renderTableContent()}
      </TableContent>
    </TableWrapper>
  );
};

Table.defaultProps = {
  rowHeight: 25
};

interface TableProps<T> {
  data: T[],
  onHeaderCellClick: (header: string) => void,
  sortBy: string,
  config: ColumnConfig[],
  rowHeight?: number
}
