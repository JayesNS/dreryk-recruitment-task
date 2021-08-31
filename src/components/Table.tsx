import React, { useCallback } from 'react';
import styled from 'styled-components';

import { ColumnConfig } from '../interfaces';
import { TableCell, TableHeaderCell } from './TableCell';
import { TableHeader, TableRow } from './TableRow';

const TableWrapper = styled.div`
  overflow-x: scroll;
  margin: 8px;
`;

export const Table = <T extends Record<string, any>>(props: TableProps<T>): JSX.Element => {
  const {
    data, onHeaderCellClick, sortBy, config,
  } = props;

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
  ), [onHeaderCellClick, sortBy, config]);

  const renderTableContent = useCallback(() => data.map((item: T) => (
    <TableRow key={item.id}>
      {config.map(({ name, width, isSticky }) => (<TableCell key={name} width={`${width}px`} isSticky={isSticky}>{item[name]}</TableCell>))}
    </TableRow>
  )), [data, config]);

  return (
    <TableWrapper>
      {renderTableHeader()}
      {renderTableContent()}
    </TableWrapper>
  );
};

interface TableProps<T> {
  data: T[],
  onHeaderCellClick: (header: string) => void,
  sortBy: string,
  config: ColumnConfig[]
}
